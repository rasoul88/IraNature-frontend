import Avatar from "../avatar/avatar.component";
import {
  Container,
  ContentContainer,
  HeaderContainer,
  InfoContainer,
} from "./comment-box.styles";
import Rating from "../rating/rating.component";
import * as moment from "moment-jalaali";
const timeDifference = parseInt(moment().format("jM")) >= 7 ? 3.5 : 4.5;

const CommentBox = ({ review, iconColor }) => {
  return (
    <Container>
      <HeaderContainer>
        <InfoContainer>
          <Avatar name={review.user.name} image={review.user.photo} />
          <div style={{ marginRight: "1rem" }}>
            <h4>{review.user.name}</h4>
            <p>
              {moment(review.createdAt, "YYYY-M-D HH:mm")
                .locale("fa")
                .add(timeDifference, "h")
                .format("jYYYY/jM/jD HH:mm")}
            </p>
          </div>
        </InfoContainer>
        <Rating rating={review.rating} iconColor={iconColor} />
      </HeaderContainer>
      <ContentContainer iconColor={iconColor}>{review.review}</ContentContainer>
    </Container>
  );
};

export default CommentBox;
