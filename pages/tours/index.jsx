import { connect } from "react-redux";
import Axios from "axios";
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
import { setFilterItem } from "../../redux/tours/tours.actions";

export const UnconnectedToursPage = ({
  panelStatus,
  page,
  toursData,
  setFilterItem,
  ssrTours,
}) => {
  const filterItemsChangeHandler = (itemName, value) => {
    setFilterItem(itemName, value);
  };
  return (
    <PageContainer data-test="component-tours-page">
      <FilterPanel />
      <ContentContainer panelStatus={panelStatus}>
        <SecondaryHeading> تورهای فعال</SecondaryHeading>
        <CardsContainer>
          {ssrTours.data.docs.map((tour) => (
            <Card data-test="tour-card" key={tour.id} tour={tour} />
          ))}
        </CardsContainer>
        <PaginateContainer>
          <Paginate
            data-test="tours-pagination"
            maxPage={ssrTours.pages}
            onChange={(newValue) => filterItemsChangeHandler("page", newValue)}
            selectedPage={page}
          />
        </PaginateContainer>
      </ContentContainer>
    </PageContainer>
  );
};

const mapStateToProps = ({
  tours: { panelStatus, filterItems, toursData },
}) => ({
  panelStatus,
  page: filterItems.page,
  toursData,
});

const mapDipatchToProps = (dispatch) => ({
  setFilterItem: (itemName, value) => dispatch(setFilterItem(itemName, value)),
});
export default connect(
  mapStateToProps,
  mapDipatchToProps
)(UnconnectedToursPage);

export async function getStaticProps() {
  const res = await fetch("http://localhost:6060/api/v1/tours");
  const ssrTours = await res.json();
  // const ssrTours = await Axios.get("http://localhost:6060/api/v1/tours");
  // console.log(ssrTours);

  return {
    props: {
      ssrTours,
    },

    revalidate: 1000, // In seconds
  };
}
