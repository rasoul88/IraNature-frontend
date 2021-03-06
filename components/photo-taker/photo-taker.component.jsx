import React, { useEffect } from "react";
import {
  Container,
  Player,
  Canvas,
  CloseCamera,
  ButtonsContainer,
  CaptureButton,
  FlipCameraButton,
  OkButton,
  RetryButton,
} from "./photo-taker.styles";
import { dataURItoBlob } from "../../utils/functions";
import { connect } from "react-redux";

const PhotoTaker = ({ setIsCameraOpen, forPanel, onCapture, deviceType }) => {
  const videoRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const [photo, setPhoto] = React.useState(null);
  const [cameraMode, setCameraMode] = React.useState("front");

  useEffect(() => {
    if (!("mediaDevices" in navigator)) {
      navigator.mediaDevices = {};
    }
    if (!("getUserMedia" in navigator.mediaDevices)) {
      navigator.mediaDevices.getUserMedia = function (constraints) {
        var getUserMedia =
          navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        if (!getUserMedia) {
          return Promise.reject(new Error("getUserMedia is not implemented!"));
        }

        return new Promise(function (resolve, reject) {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
    }
    navigator.mediaDevices
      .getUserMedia({
        video:
          cameraMode === "front"
            ? { facingMode: "user" }
            : { facingMode: { exact: "environment" } },
        audio: false,
      })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      });
  }, [videoRef, cameraMode]);

  const onCloseCamera = () => {
    videoRef.current.srcObject.getVideoTracks().forEach((track) => {
      track.stop();
    });
    setIsCameraOpen(false);
  };

  return (
    <Container forPanel={forPanel}>
      <CloseCamera onClick={() => onCloseCamera()} />
      <Player show={!photo} ref={videoRef} autoPlay={true}></Player>
      <Canvas
        width={deviceType !== "desktop" ? 480 : 640}
        height={deviceType !== "desktop" ? 640 : 480}
        id="canvas"
        show={photo}
        ref={canvasRef}
      ></Canvas>
      <ButtonsContainer>
        {!photo && deviceType !== "desktop" ? (
          <FlipCameraButton
            onClick={() =>
              setCameraMode((preState) =>
                preState === "front" ? "back" : "front"
              )
            }
          />
        ) : (
          <span style={{ width: "4rem", height: "4rem" }}></span>
        )}
        {!photo ? (
          <CaptureButton
            onClick={() => {
              var context = canvasRef.current.getContext("2d");
              context.drawImage(
                videoRef.current,
                0,
                0,
                deviceType !== "desktop" ? 480 : 640,
                deviceType !== "desktop" ? 640 : 480
              );

              setPhoto(dataURItoBlob(canvasRef.current.toDataURL()));
            }}
          />
        ) : (
          <OkButton
            onClick={() => {
              onCapture({ target: { files: [photo] } });
              onCloseCamera();
            }}
          />
        )}
        {photo ? (
          <RetryButton onClick={() => setPhoto(null)} />
        ) : (
          <span style={{ width: "4rem", height: "4rem" }}></span>
        )}
      </ButtonsContainer>
    </Container>
  );
};

const mapStateToProps = ({ user: { deviceType } }) => ({
  deviceType,
});
export default connect(mapStateToProps)(PhotoTaker);
