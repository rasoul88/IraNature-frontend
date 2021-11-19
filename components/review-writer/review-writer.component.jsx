import React from "react";
import { connect } from "react-redux";
import { Container, RatingRow, ReviewRow } from "./review-writer.styles";
import Rating from "../rating/rating.component";
import CustomButton from "../custom-button/custom-button.component";
import { submitReview } from "../../redux/tours/tours.actions";

const reducer = (state, action) => {
  switch (action.type) {
    case "setRating":
      return {
        ...state,
        rating: action.payload,
      };
    case "setReview":
      return {
        ...state,
        review: action.payload,
      };
    case "setErrors":
      return {
        ...state,
        errors: action.payload,
      };
  }
};
const ReviewWriter = ({ tourId, submitReview, gradientColor }) => {
  const [{ rating, review, errors }, URDispatch] = React.useReducer(reducer, {
    rating: 0,
    review: "",
    errors: {
      rating: false,
      review: false,
    },
  });

  const onSubmitReview = () => {
    if (rating === 0 || review.length === 0) {
      return URDispatch({
        type: "setErrors",
        payload: { rating: rating === 0, review: review.length === 0 },
      });
    }
    URDispatch({
      type: "setErrors",
      payload: { rating: false, review: false },
    });
    submitReview({
      review,
      rating,
      tour: tourId,
    });
  };
  return (
    <Container>
      <RatingRow>
        <Rating
          onChange={(newValue) =>
            URDispatch({ type: "setRating", payload: newValue })
          }
          iconColor={gradientColor.from}
          rating={rating}
          selectable={true}
        />
        <h4>: امتیاز</h4>
      </RatingRow>
      {errors.rating && <p>لطفا یک امتیاز از 1 تا 5 انتخاب کنید</p>}
      <ReviewRow iconColor={gradientColor.from}>
        <h4>: دیدگاه</h4>
        <textarea
          type="text"
          placeholder="دیدگاه خود را بنویسید..."
          onBlur={(event) =>
            URDispatch({ type: "setReview", payload: event.target.value })
          }
        />
      </ReviewRow>
      {errors.review && <p>لطفا دیدگاه خود را بنویسید</p>}
      <CustomButton
        backgroundColor={gradientColor.from}
        onClick={onSubmitReview}
      >
        ثبت دیدگاه
      </CustomButton>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  submitReview: (review) => dispatch(submitReview(review)),
});
export default connect(null, mapDispatchToProps)(ReviewWriter);
