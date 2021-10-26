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
import { setFilterItem } from "../../redux/tours/tours.actions";

export const UnconnectedToursPage = ({
  panelStatus,
  page,
  toursData,
  setFilterItem,
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
          {toursData.map((tour) => (
            <Card data-test="tour-card" key={tour.id} {...tour} />
          ))}
        </CardsContainer>
        <PaginateContainer>
          <Paginate
            data-test="tours-pagination"
            maxPage={18}
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
