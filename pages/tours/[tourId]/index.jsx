import { useRouter } from "next/router";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
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
  ReviewWriterSection,
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
import Spin from "../../../public/assets/icons/Spin.svg";
import {
  createGradientbackground,
  createGradientText,
} from "../../../utils/functions";
import ReviewWriter from "../../../components/review-writer/review-writer.component";
import * as moment from "moment-jalaali";
const timeDifference = parseInt(moment().format("jM")) >= 7 ? 3.5 : 4.5;
const createGalleryImages = (images) => {
  return images.map((image) => ({
    original: `http://localhost:6060/img/tours/${image}`,
    thumbnail: `http://localhost:6060/img/tours/${image}`,
  }));
};

const TourPage = ({ ssrTour }) => {
  const router = useRouter();
  // const { tourId } = router.query;

  if (router.isFallback) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin style={{ width: "30rem", height: "30rem" }} />;
      </div>
    );
  }

  const doc = ssrTour?.data.doc;
  // console.log("router.isFallback", router.isFallback);
  console.log("ssrTour", ssrTour);
  console.log(
    "moment",
    // moment("2013-8-25 16:40", "YYYY-M-D HH:mm").format("jYYYY/jM/jD HH:mm")
    moment("2021-11-19 19:24", "YYYY-M-D HH:mm")
      .locale("fa")
      .add(timeDifference, "h")
      .format("jYYYY/jM/jD HH:mm")
  );
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
        gradientColor={createGradientbackground(
          doc.gradientColor.from,
          doc.gradientColor.to
        )}
        backgroundImage={`http://localhost:6060/img/tours/${doc.imageCover}`}
      >
        <HeaderContentContainer>
          <GradientText
            gradientText={createGradientText(
              doc.gradientColor.from,
              doc.gradientColor.to
            )}
          >
            <span>{doc.name}</span>
          </GradientText>
          <HeaderContentItemsContainer
            gradientText={createGradientText(
              doc.gradientColor.from,
              doc.gradientColor.to
            )}
          >
            <HeaderContentItem>
              <span>{doc.destination} </span>
              <PinIcon />
            </HeaderContentItem>
            <HeaderContentItem style={{ marginLeft: "2rem" }}>
              <p>روز</p> <span> {doc.duration}</span>
              <ClockIcon />
            </HeaderContentItem>
          </HeaderContentItemsContainer>
        </HeaderContentContainer>
      </HeaderContainer>
      <InformationSection>
        <AboutContainer>
          <SecodaryHeading
            background={createGradientbackground(
              doc.gradientColor.from,
              doc.gradientColor.to
            )}
          >
            درباره ی این تور
          </SecodaryHeading>
          <p>{doc.summary}</p>
        </AboutContainer>
        <InfoContainer>
          <ItemsContainer>
            <SecodaryHeading
              background={createGradientbackground(
                doc.gradientColor.from,
                doc.gradientColor.to
              )}
            >
              ویژگی ها
            </SecodaryHeading>
            <InfoItem iconColor={doc.gradientColor.from}>
              <p>{doc.startDate}</p>
              <h4>تاریخ شروع</h4>
              <CalenderIcon />
            </InfoItem>
            <InfoItem iconColor={doc.gradientColor.from}>
              <p>{doc.difficulty}</p>
              <h4>دشواری</h4>
              <DifficultyIcon />
            </InfoItem>
            <InfoItem iconColor={doc.gradientColor.from}>
              <p>{doc.maxGroupSize}</p>
              <h4>تعداد افراد</h4>
              <ParticipantsIcon />
            </InfoItem>
            <InfoItem iconColor={doc.gradientColor.from}>
              {doc.ratingsAverage === 0 ? (
                <p>بدون امتیاز</p>
              ) : (
                <p>{doc.ratingsAverage} / 5</p>
              )}
              <h4>امتیاز</h4>
              <StarIcon />
            </InfoItem>
          </ItemsContainer>
          <ItemsContainer>
            <SecodaryHeading
              background={createGradientbackground(
                doc.gradientColor.from,
                doc.gradientColor.to
              )}
            >
              راهنماهای تور
            </SecodaryHeading>

            <InfoItem>
              <p>{doc.guides[0].name}</p>
              <h4>تور لیدر</h4>
              <Avatar name={doc.guides[0].name} image={doc.guides[0].photo} />
            </InfoItem>
            {doc.guides.length > 1 &&
              doc.guides.map((guide, index) => {
                if (index > 0)
                  return (
                    <InfoItem key={index}>
                      <p>{guide.name}</p>
                      <h4>راهنما</h4>
                      <Avatar name={guide.name} image={guide.photo} />
                    </InfoItem>
                  );
              })}
          </ItemsContainer>
        </InfoContainer>
      </InformationSection>
      <GallerySection>
        <SecodaryHeading
          background={createGradientbackground(
            doc.gradientColor.from,
            doc.gradientColor.to
          )}
        >
          تصاویر تور
        </SecodaryHeading>
        <ImageGallery items={createGalleryImages(doc.images)} />
      </GallerySection>

      {/* change */}
      <CommentsSection>
        <SecodaryHeading
          background={createGradientbackground(
            doc.gradientColor.from,
            doc.gradientColor.to
          )}
        >
          نظرات کاربران
        </SecodaryHeading>
        <CommentsInfoContainer>
          <p>تعداد نظرات: {doc.reviews.length}</p>
        </CommentsInfoContainer>
        <CommentsContainer
          scrollColor={createGradientbackground(
            doc.gradientColor.from,
            doc.gradientColor.to
          )}
        >
          {doc.reviews.map((review) => (
            <CommentBox
              key={review._id}
              review={review}
              iconColor={doc.gradientColor.from}
            />
          ))}
        </CommentsContainer>
      </CommentsSection>
      <ReviewWriterSection>
        <SecodaryHeading
          background={createGradientbackground(
            doc.gradientColor.from,
            doc.gradientColor.to
          )}
        >
          ثبت دیدگاه
        </SecodaryHeading>
        <ReviewWriter tourId={doc._id} gradientColor={doc.gradientColor} />
      </ReviewWriterSection>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { tourId } = params;
  const res = await fetch(`http://localhost:6060/api/v1/tours/${tourId}`);
  const ssrTour = await res.json();

  return {
    props: {
      ssrTour,
    },

    revalidate: 1, // In seconds
  };
}

export default TourPage;
