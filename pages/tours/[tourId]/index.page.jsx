import React from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
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
import {
  createGradientbackground,
  createGradientText,
  stringDateToShowingDate,
} from "../../../utils/functions";
import ReviewWriter from "../../../components/review-writer/review-writer.component";
import {
  updateCurrentTourPageStart,
  removeUpdatedCurrentTourPageData,
} from "../../../redux/tours/tours.actions";
import TourPageSkeleton from "../../../components/tourPage-skeleton/tourPage-skeleton.component";

const createGalleryImages = (images) => {
  return images.map((image) => ({
    original: `${process.env.NEXT_PUBLIC_BASE_SERVER_STATICS_URL}/img/tours/${image}`,
    thumbnail: `${process.env.NEXT_PUBLIC_BASE_SERVER_STATICS_URL}/img/tours/${image}`,
  }));
};

const TourPage = ({
  updatedcurrentTourPageData,
  updateCurrentTourPageStart,
  removeUpdatedCurrentTourPageData,
}) => {
  const router = useRouter();
  const { tourId } = router.query;

  React.useEffect(() => {
    updateCurrentTourPageStart(tourId);
    return () => {
      removeUpdatedCurrentTourPageData();
    };
  }, [tourId, updateCurrentTourPageStart, removeUpdatedCurrentTourPageData]);

  const doc = updatedcurrentTourPageData;

  if (!doc) {
    return <TourPageSkeleton />;
  }

  // const doc = updatedcurrentTourPageData || ssrTour?.data.doc;
  // console.log("router.isFallback", router.isFallback);

  return (
    <div style={{ backgroundColor: "#fafafa", width: "100vw" }}>
      <Controller
        style={{ position: "fixed", left: "4rem" }}
        onClick={() => router.back()}
        mode="return"
      >
        <ReturnIcon />
        <p>???????????? ???? ??????????</p>
      </Controller>
      <HeaderContainer
        gradientColor={createGradientbackground(
          doc.gradientColor.from,
          doc.gradientColor.to
        )}
        backgroundImage={`${process.env.NEXT_PUBLIC_BASE_SERVER_STATICS_URL}/img/tours/${doc.imageCover}`}
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
              <p>??????</p> <span> {doc.duration}</span>
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
            ???????????? ?? ?????? ??????
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
              ?????????? ????
            </SecodaryHeading>
            <InfoItem iconColor={doc.gradientColor.from}>
              <p>{stringDateToShowingDate(doc.startDate)}</p>
              <h4>?????????? ???????? ????????</h4>
              <CalenderIcon />
            </InfoItem>
            <InfoItem iconColor={doc.gradientColor.from}>
              <p>{doc.difficulty}</p>
              <h4>????????????</h4>
              <DifficultyIcon />
            </InfoItem>
            <InfoItem iconColor={doc.gradientColor.from}>
              <p>{doc.maxGroupSize}</p>
              <h4>?????????? ??????????</h4>
              <ParticipantsIcon />
            </InfoItem>
            <InfoItem iconColor={doc.gradientColor.from}>
              {doc.ratingsAverage === 0 ? (
                <p>???????? ????????????</p>
              ) : (
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    {doc.ratingsAverage}
                  </span>{" "}
                  / 5
                </p>
              )}
              <h4>????????????</h4>
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
              ?????????????????? ??????
            </SecodaryHeading>

            <InfoItem>
              <p>{doc.guides[0].name}</p>
              <h4>?????? ????????</h4>
              <Avatar name={doc.guides[0].name} image={doc.guides[0].photo} />
            </InfoItem>
            {doc.guides.length > 1 &&
              doc.guides.map((guide, index) => {
                if (index > 0)
                  return (
                    <InfoItem key={index}>
                      <p>{guide.name}</p>
                      <h4>????????????</h4>
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
          ???????????? ??????
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
          ?????????? ??????????????
        </SecodaryHeading>
        <CommentsInfoContainer>
          <p>?????????? ??????????: {doc.reviews.length}</p>
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
          ?????? ????????????
        </SecodaryHeading>
        <ReviewWriter tourId={doc._id} gradientColor={doc.gradientColor} />
      </ReviewWriterSection>
    </div>
  );
};

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const { tourId } = params;
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/tours/${tourId}`
//   );
//   const ssrTour = await res.json();

//   return {
//     props: {
//       ssrTour,
//     },

//     revalidate: 1, // In seconds
//   };
// }

const mapStateToProps = ({ tours: { updatedcurrentTourPageData } }) => ({
  updatedcurrentTourPageData,
});

const mapDispatchToProps = (dispatch) => ({
  removeUpdatedCurrentTourPageData: () =>
    dispatch(removeUpdatedCurrentTourPageData()),
  updateCurrentTourPageStart: (tourId) =>
    dispatch(updateCurrentTourPageStart(tourId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TourPage);
