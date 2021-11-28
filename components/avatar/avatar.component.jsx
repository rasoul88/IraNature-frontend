import { AvatarContainer } from "./avatar.styles";
import Image from "next/image";
import DefaultAvatar from "../../public/assets/icons/avatar-svgrepo-com.svg";

const Avatar = ({ name, image }) => {
  return (
    <AvatarContainer>
      {image ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_SERVER_STATICS_URL}/img/users/${image}`}
          alt={name.split("")[0]}
          layout="fill"
        />
      ) : (
        <DefaultAvatar />
      )}
    </AvatarContainer>
  );
};

export default Avatar;
