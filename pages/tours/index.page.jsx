import React from "react";
import { connect } from "react-redux";
import {
  PageContainer,
  ContentContainer,
  CardsContainer,
  PaginateContainer,
} from "./index.styles";
import Card from "../../components/card/card.component";
import SecondaryHeading from "../../components/heading/heading.component";
import FilterPanel from "../../components/filter-panel/filter-panel.component";
import Paginate from "../../components/paginate/paginate.component";
import {
  getFilteredTours,
  setFilterItem,
} from "../../redux/tours/tours.actions";

export const UnconnectedToursPage = ({
  panelStatus,
  page,
  setFilterItem,
  ssrTours,
  updatedToursData,
  getFilteredTours,
}) => {
  const filterItemsChangeHandler = (itemName, value) => {
    setFilterItem(itemName, value);
  };
  const tours = updatedToursData
    ? updatedToursData.data.docs
    : ssrTours.data.docs;
  const pages = updatedToursData ? updatedToursData.pages : ssrTours.pages;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [updatedToursData]);
  return (
    <PageContainer data-test="component-tours-page">
      <FilterPanel />
      <ContentContainer panelStatus={panelStatus}>
        <SecondaryHeading> تورهای فعال</SecondaryHeading>
        <CardsContainer>
          {tours.map((tour) => (
            <Card data-test="tour-card" key={tour.id} tour={tour} />
          ))}
        </CardsContainer>
        <PaginateContainer>
          <Paginate
            data-test="tours-pagination"
            maxPage={pages}
            onChange={(newValue) => {
              filterItemsChangeHandler("page", newValue);
              getFilteredTours();
            }}
            selectedPage={page}
          />
        </PaginateContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/tours`);
  const ssrTours = await res.json();
  // const ssrTours = await Axios.get("http://localhost:6060/api/v1/tours");
  // console.log(ssrTours);

  return {
    props: {
      ssrTours,
    },

    revalidate: 60, // In seconds
  };
}

const mapStateToProps = ({
  tours: { panelStatus, filterItems, updatedToursData, isFetching },
}) => ({
  panelStatus,
  page: filterItems.page,
  updatedToursData,
  isFetching,
});

const mapDipatchToProps = (dispatch) => ({
  setFilterItem: (itemName, value) => dispatch(setFilterItem(itemName, value)),
  getFilteredTours: () => dispatch(getFilteredTours()),
});
export default connect(
  mapStateToProps,
  mapDipatchToProps
)(UnconnectedToursPage);
