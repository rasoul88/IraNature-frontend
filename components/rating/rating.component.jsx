import { Container } from "./rating.styles";
import Star from "../../public/assets/icons/star-empty.svg";
import FillStar from "../../public/assets/icons/star-full.svg";
const Rating = ({ rating, iconColor }) => {
  return (
    <Container iconColor={iconColor}>
      {Array(5 - rating * 1)
        .fill()
        .map((el, index) => (
          <Star key={5 - index} />
        ))}
      {Array(rating * 1)
        .fill()
        .map((el, index) => (
          <FillStar key={index} />
        ))}
    </Container>
  );
};

export default Rating;
