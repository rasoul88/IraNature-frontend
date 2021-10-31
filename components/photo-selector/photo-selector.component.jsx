import React from "react";
import {
  Container,
  EditIconContainer,
  CameraFolderContainer,
} from "./photo-selector.styles";
import EditIcon from "../../public/assets/icons/edit-svgrepo-com.svg";
import CameraIcon from "../../public/assets/icons/camera-svgrepo-com.svg";
import FolderIcon from "../../public/assets/icons/upload-folder-svgrepo-com.svg";

const PhotoSelector = () => {
  const [togglePhotoSeleectorPanel, setTogglePhotoSeleectorPanel] =
    React.useState(false);
  return (
    <Container>
      <CameraFolderContainer
        togglePhotoSeleectorPanel={togglePhotoSeleectorPanel}
      >
        <FolderIcon />
        <CameraIcon />
      </CameraFolderContainer>
      <EditIconContainer
        onClick={() => setTogglePhotoSeleectorPanel((preState) => !preState)}
      >
        <EditIcon />
      </EditIconContainer>
    </Container>
  );
};
export default PhotoSelector;
