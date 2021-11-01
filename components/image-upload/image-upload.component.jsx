import React from "react";
import Image from "next/image";
import { Container, Label, ImageContainer } from "./image-upload.styles";
import ImageIcon from "../../public/assets/icons/image-photo-svgrepo-com.svg";
import CloseIcon from "../../public/assets/icons/fill-close-svgrepo-com.svg";

const ImageUpload = ({ id, multiple, onChange }) => {
  const [imagesUrl, setImagesUrl] = React.useState([]);
  const [imagesFile, setImagesFile] = React.useState([]);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let imgsUrl = [...imagesUrl];
      let imgsFile = {};

      if (multiple) {
        for (const file of event.target.files) {
          imgsUrl.push(URL.createObjectURL(file));
        }
        setImagesUrl(imgsUrl);

        const preFilesNum = Object.keys(imagesFile).length;
        const newFilesNum = event.target.files.length;
        for (let i = 0; i < preFilesNum; i++) {
          imgsFile[i] = imagesFile[i];
        }
        for (let i = 0; i < newFilesNum; i++) {
          imgsFile[i + preFilesNum] = event.target.files[i];
        }

        setImagesFile(imgsFile);
        onChange(imgsFile);
      } else {
        setImagesUrl([URL.createObjectURL(event.target.files[0])]);
        setImagesFile(event.target.files);
        onChange(event.target.files);
      }
    }
  };

  const onDeleteImage = (index) => {
    let imgsFile = {};
    const newArr = Object.keys(imagesFile).filter((el) => el * 1 !== index);
    for (let i = 0; i < newArr.length; i++) {
      imgsFile[i] = imagesFile[newArr[i]];
    }
    setImagesFile(imgsFile);
    onChange(imgsFile);

    let imgsUrl = imagesUrl.filter((img, idx) => index !== idx);
    setImagesUrl(imgsUrl);
  };

  return (
    <Container>
      {imagesUrl.map((img, index) => (
        <ImageContainer key={index}>
          <CloseIcon onClick={() => onDeleteImage(index)} />
          <Image src={img} alt="alt" layout="fill" objectFit="contain" />
        </ImageContainer>
      ))}
      <>
        <input
          id={id}
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={onImageChange}
          style={{ display: "none" }}
          multiple={multiple ? true : false}
          files={imagesFile}
        />
        <Label htmlFor={id}>
          <ImageIcon />
          <h5>برای آپلود کلیک کنید</h5>
          <p>(jpg, jpeg, png)</p>
        </Label>
      </>
    </Container>
  );
};

export default ImageUpload;
