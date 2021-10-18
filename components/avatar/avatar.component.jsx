import Image from "next/image";
import { AvatarContainer } from "./avatar.styles";
import DefaultAvatar from "../../public/assets/icons/avatar-svgrepo-com.svg";

const Avatar = ({ name, image }) => {
  return (
    <AvatarContainer>
      {image ? (
        <Image src={image} width="100%" height="100%" alt={name.split("")[0]} />
      ) : (
        <DefaultAvatar />
      )}
    </AvatarContainer>
  );
};

export default Avatar;
