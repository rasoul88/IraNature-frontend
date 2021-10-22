import { connect } from "react-redux";
import {
  PageContainer,
  ContentContainer,
  CardsContainer,
} from "./index.styles";
import Card from "../../components/card/card.component";
import SecondaryHeading from "../../components/heading/heading.component";
import FilterPanel from "../../components/filter-panel/filter-panel.component";

const ToursPage = ({ panelStatus, toursData }) => {
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
      </ContentContainer>
    </PageContainer>
  );
};

const mapStateToProps = ({ tours: { panelStatus, toursData } }) => ({
  panelStatus,
  toursData,
});
export default connect(mapStateToProps)(ToursPage);
