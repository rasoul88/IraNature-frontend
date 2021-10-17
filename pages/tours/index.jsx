import { PageContainer, CardsContainer } from "./index.styles";
import Card from "../../components/card/card.component";
import SecondaryHeading from "../../components/heading/heading.component";

const toursData = [
  {
    id: 0,
    title: "کاوشگری دریا",
    items: [
      "تور 3 روزه",
      "تا 50 نفر",
      "راهنمای تور : 2 نفر",
      "خواب در هتل دنج",
      "دشواری : ‌راحت",
    ],
    backgroundImage: "/assets/img/nat-5.jpg",
    gradientColor: "linear-gradient(to right bottom, #ffb900, #ff7730)",
    gradientText:
      "linear-gradient(to right bottom, rgba(255, 185, 0, 0.85), rgba(255, 119, 48, 0.85))",
    payValue: "3,000,000",
  },
  {
    id: 1,
    title: "راهپیمایی جنگل",
    items: [
      "تور 7 روزه",
      "تا 40 نفر",
      "راهنمای تور : 6 نفر",
      "خواب در چادرهای فراهم شده",
      "دشواری : متوسط",
    ],
    backgroundImage: "/assets/img/nat-6.jpg",
    gradientColor: "linear-gradient(to right bottom, #7ed56f,  #28b485)",
    gradientText:
      "linear-gradient(to right bottom, rgba(126, 213, 111, 0.85),  rgba(40, 180, 133, 0.85))",
    payValue: "5,000,000",
  },
  {
    id: 2,
    title: "ماجراجویی برفی",
    items: [
      "تور 5 روزه",
      "تا 15 نفر",
      "راهنمای تور : 3 نفر",
      "خواب در چادر های فراهم شده",
      "دشواری : سخت",
    ],
    backgroundImage: "/assets/img/nat-7.jpg",
    gradientColor:
      "linear-gradient(to right bottom,  rgba(41, 152, 255),   rgba(86, 67, 250))",
    gradientText:
      "linear-gradient(to right bottom,  rgba(41, 152, 255, 0.85),   rgba(86, 67, 250, 0.85))",
    payValue: "2,000,000",
  },
  {
    id: 3,
    title: "کاوشگری دریا",
    items: [
      "تور 3 روزه",
      "تا 50 نفر",
      "راهنمای تور : 2 نفر",
      "خواب در هتل دنج",
      "دشواری : ‌راحت",
    ],
    backgroundImage: "/assets/img/nat-5.jpg",
    gradientColor: "linear-gradient(to right bottom, #ffb900, #ff7730)",
    gradientText:
      "linear-gradient(to right bottom, rgba(255, 185, 0, 0.85), rgba(255, 119, 48, 0.85))",
    payValue: "3,000,000",
  },
  {
    id: 4,
    title: "راهپیمایی جنگل",
    items: [
      "تور 7 روزه",
      "تا 40 نفر",
      "راهنمای تور : 6 نفر",
      "خواب در چادرهای فراهم شده",
      "دشواری : متوسط",
    ],
    backgroundImage: "/assets/img/nat-6.jpg",
    gradientColor: "linear-gradient(to right bottom, #7ed56f,  #28b485)",
    gradientText:
      "linear-gradient(to right bottom, rgba(126, 213, 111, 0.85),  rgba(40, 180, 133, 0.85))",
    payValue: "5,000,000",
  },
  {
    id: 5,
    title: "ماجراجویی برفی",
    items: [
      "تور 5 روزه",
      "تا 15 نفر",
      "راهنمای تور : 3 نفر",
      "خواب در چادر های فراهم شده",
      "دشواری : سخت",
    ],
    backgroundImage: "/assets/img/nat-7.jpg",
    gradientColor:
      "linear-gradient(to right bottom,  rgba(41, 152, 255),   rgba(86, 67, 250))",
    gradientText:
      "linear-gradient(to right bottom,  rgba(41, 152, 255, 0.85),   rgba(86, 67, 250, 0.85))",
    payValue: "2,000,000",
  },
];

const ToursPage = () => {
  return (
    <PageContainer data-test="component-tours-page">
      <SecondaryHeading> تورهای فعال</SecondaryHeading>
      <CardsContainer>
        {toursData.map((tour) => (
          <Card key={tour.id} {...tour} />
        ))}
      </CardsContainer>
    </PageContainer>
  );
};

export default ToursPage;
