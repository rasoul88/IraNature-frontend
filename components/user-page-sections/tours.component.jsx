import React from "react";
import { connect } from "react-redux";
import { SectionContainer } from "./user-page-sections.styles";
import { getMyCreatedTours } from "../../redux/userPage/userPage.actions";
import { MyToursContainer } from "./user-page-sections.styles";
import Card from "../card/card.component";

const MyCreatedTours = ({ myCreatedTours, getMyCreatedTours }) => {
  React.useEffect(() => {
    getMyCreatedTours();
  }, [getMyCreatedTours]);

  return (
    <SectionContainer
    // style={{ maxHeight: "100vh", overflowX: "auto", margin: "0" }}
    >
      <MyToursContainer>
        {myCreatedTours.map((tour) => (
          <Card key={tour._id} tour={tour} />
        ))}
      </MyToursContainer>
    </SectionContainer>
  );
};

const mapStateToProps = ({ userPage: { myCreatedTours } }) => ({
  myCreatedTours,
});

const mapDispatchToProps = (dispatch) => ({
  getMyCreatedTours: () => dispatch(getMyCreatedTours()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MyCreatedTours);
