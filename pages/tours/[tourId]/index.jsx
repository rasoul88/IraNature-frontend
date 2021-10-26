import { useRouter } from "next/router";
import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
import {
  HeaderContainer,
  HeaderContentContainer,
  GradientText,
  HeaderContentItemsContainer,
  HeaderContentItem,
  InformationSection,
  InfoContainer,
  AboutContainer,
  ItemsContainer,
  InfoItem,
  GallerySection,
  CommentsSection,
  CommentsContainer,
  CommentsInfoContainer,
} from "./index.styles";
import SecodaryHeading from "../../../components/heading/heading.component";
import ReturnIcon from "../../../public/assets/icons/back-return-svgrepo-com.svg";
import { Controller } from "../../../components/navigation/navigation.styles";
import ClockIcon from "../../../public/assets/icons/clock-svgrepo-com.svg";
import PinIcon from "../../../public/assets/icons/pin-svgrepo-com.svg";
import CalenderIcon from "../../../public/assets/icons/calendar.svg";
import DifficultyIcon from "../../../public/assets/icons/flag.svg";
import ParticipantsIcon from "../../../public/assets/icons/users.svg";
import StarIcon from "../../../public/assets/icons/star-full.svg";
import Avatar from "../../../components/avatar/avatar.component";
import CommentBox from "../../../components/comment-box/comment-box.component";

const tour = {
  id: 0,
  title: "کاوشگری دریا",
  items: {
    time: "سوم آبان",
    participants: "تا 50 نفر",
    guides: "راهنمای تور : 2 نفر",
    camp: "خواب در هتل دنج",
    difficulty: "راحت",
    rating: 4.6,
  },
  backgroundImage: "/assets/img/nat-5.jpg",
  // gradientColor: "linear-gradient(to right bottom, #ffb900, #ff7730)",
  // gradientText:
  //   "linear-gradient(to right bottom, rgba(255, 185, 0, 0.85), rgba(255, 119, 48, 0.85))",
  // iconsColor: "rgba(255, 119, 48, 0.85)",
  gradientColor:
    "linear-gradient(to right bottom,  rgba(41, 152, 255),   rgba(86, 67, 250))",
  gradientText:
    "linear-gradient(to right bottom,  rgba(41, 152, 255, 0.85),   rgba(86, 67, 250, 0.85))",
  iconsColor: "rgb(24, 123, 205)",
  // gradientColor: "linear-gradient(to right bottom, #7ed56f,  #28b485)",
  // gradientText:
  //   "linear-gradient(to right bottom, rgba(126, 213, 111, 0.85),  rgba(40, 180, 133, 0.85))",
  // iconsColor: "rgba(40, 180, 133, 0.85)",
  payValue: "3,000,000",
};

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const TourPage = () => {
  const router = useRouter();
  const { tourId } = router.query;

  return (
    <div style={{ backgroundColor: "#fafafa", width: "100vw" }}>
      <Controller
        style={{ position: "fixed", left: "4rem" }}
        onClick={() => router.back()}
        mode="return"
      >
        <ReturnIcon />
        <p>بازگشت به تورها</p>
      </Controller>
      <HeaderContainer
        gradientColor={tour.gradientColor}
        backgroundImage={tour.backgroundImage}
      >
        <HeaderContentContainer>
          <GradientText gradientText={tour.gradientText}>
            <span>{tour.title}</span>
          </GradientText>
          <HeaderContentItemsContainer>
            <HeaderContentItem>
              <span>چابهار </span>
              <PinIcon />
            </HeaderContentItem>
            <HeaderContentItem>
              روز <span> ۷</span>
              <ClockIcon />
            </HeaderContentItem>
          </HeaderContentItemsContainer>
        </HeaderContentContainer>
      </HeaderContainer>
      <InformationSection>
        <AboutContainer>
          <SecodaryHeading background={tour.gradientColor}>
            درباره ی این تور
          </SecodaryHeading>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </AboutContainer>
        <InfoContainer>
          <ItemsContainer>
            <SecodaryHeading background={tour.gradientColor}>
              ویژگی ها
            </SecodaryHeading>
            <InfoItem iconColor={tour.iconsColor}>
              <p>{tour.items.time}</p>
              <h4>تاریخ تور</h4>
              <CalenderIcon />
            </InfoItem>
            <InfoItem iconColor={tour.iconsColor}>
              <p>{tour.items.difficulty}</p>
              <h4>دشواری</h4>
              <DifficultyIcon />
            </InfoItem>
            <InfoItem iconColor={tour.iconsColor}>
              <p>{tour.items.participants}</p>
              <h4>تعداد افراد</h4>
              <ParticipantsIcon />
            </InfoItem>
            <InfoItem iconColor={tour.iconsColor}>
              <p>{tour.items.rating} / 5</p>
              <h4>امتیاز</h4>
              <StarIcon />
            </InfoItem>
          </ItemsContainer>
          <ItemsContainer>
            <SecodaryHeading background={tour.gradientColor}>
              راهنماهای تور
            </SecodaryHeading>

            <InfoItem>
              <p>رسول صحرایی</p>
              <h4>تور لیدر</h4>
              <Avatar name="rasoul" />
            </InfoItem>
            <InfoItem>
              <p>محسن زینی وند</p>
              <h4>راهنما</h4>
              <Avatar />
            </InfoItem>
          </ItemsContainer>
        </InfoContainer>
      </InformationSection>
      <GallerySection>
        <SecodaryHeading background={tour.gradientColor}>
          تصاویر تور
        </SecodaryHeading>
        <ImageGallery items={images} />
      </GallerySection>

      {/* change */}
      <CommentsSection>
        <SecodaryHeading background={tour.gradientColor}>
          نظرات کاربران
        </SecodaryHeading>
        <CommentsInfoContainer>
          <p>تعداد نظرات: 6</p>
        </CommentsInfoContainer>
        <CommentsContainer scrollColor={tour.gradientColor}>
          {Array(6)
            .fill()
            .map((el, index) => (
              <CommentBox
                key={index}
                // image="assets/img/iran1.jpg"
                name="رسول صحرایی"
                createdDate="1400/11/3 22:45"
                iconColor={tour.iconsColor}
              />
            ))}
        </CommentsContainer>
      </CommentsSection>
    </div>
  );
};

export default TourPage;
