import React from "react";
import { connect } from "react-redux";
import {
  Container,
  EditIconContainer,
  CameraFolderContainer,
} from "./photo-selector.styles";
import EditIcon from "../../public/assets/icons/edit-svgrepo-com.svg";
import CameraIcon from "../../public/assets/icons/camera-svgrepo-com.svg";
import FolderIcon from "../../public/assets/icons/upload-folder-svgrepo-com.svg";
import PhotoTaker from "../photo-taker/photo-taker.component";

import { updateMe } from "../../redux/user/user.actions";

const PhotoSelector = ({ updateMe, forPanel }) => {
  const [togglePhotoSeleectorPanel, setTogglePhotoSeleectorPanel] =
    React.useState(false);

  const [isCameraOpen, setIsCameraOpen] = React.useState(false);

  const onImageProfileSelect = (event) => {
    if (event.target.files && event.target.files[0]) {
      const formData = new FormData();
      formData.append("photo", event.target.files[0]);
      updateMe(formData);
    }
  };

  return (
    <Container>
      <CameraFolderContainer
        togglePhotoSeleectorPanel={togglePhotoSeleectorPanel}
      >
        <label htmlFor="select-file-for-profile-picture">
          <FolderIcon />
        </label>
        <CameraIcon onClick={() => setIsCameraOpen((preState) => !preState)} />
        <input
          id="select-file-for-profile-picture"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={onImageProfileSelect}
        />
      </CameraFolderContainer>
      <EditIconContainer
        onClick={() => setTogglePhotoSeleectorPanel((preState) => !preState)}
      >
        <EditIcon />
      </EditIconContainer>
      {isCameraOpen && (
        <PhotoTaker
          onCapture={(event) => onImageProfileSelect(event)}
          setIsCameraOpen={setIsCameraOpen}
          forPanel={forPanel}
        />
      )}
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateMe: (credentials) => dispatch(updateMe(credentials)),
});
export default connect(null, mapDispatchToProps)(PhotoSelector);
