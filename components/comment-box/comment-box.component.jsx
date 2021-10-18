import Avatar from "../avatar/avatar.component";
import {
  Container,
  ContentContainer,
  HeaderContainer,
  InfoContainer,
} from "./comment-box.styles";
import Rating from "../rating/rating.component";
const CommentBox = ({
  name,
  image,
  rating,
  review,
  createdDate,
  iconColor,
}) => {
  return (
    <Container>
      <HeaderContainer>
        <InfoContainer>
          <Avatar name={name} image={image} />
          <div>
            <h4>{name}</h4>
            <p>{createdDate}</p>
          </div>
        </InfoContainer>
        <Rating rating="3" iconColor={iconColor} />
      </HeaderContainer>
      <ContentContainer>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد.
      </ContentContainer>
    </Container>
  );
};

export default CommentBox;
