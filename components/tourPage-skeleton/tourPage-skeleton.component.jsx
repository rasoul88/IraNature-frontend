import React from "react";
import { useRouter } from "next/router";
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
  SkeletonItem,
  SkeletonText,
} from "./tourPage-skeleton.styles";
import SecodaryHeading from "../heading/heading.component";
import ReturnIcon from "../../public/assets/icons/back-return-svgrepo-com.svg";
import { Controller } from "../navigation/navigation.styles";
import CalenderIcon from "../../public/assets/icons/calendar.svg";
import DifficultyIcon from "../../public/assets/icons/flag.svg";
import ParticipantsIcon from "../../public/assets/icons/users.svg";
import StarIcon from "../../public/assets/icons/star-full.svg";
import {
  createGradientbackground,
  createGradientText,
} from "../../utils/functions";
import DefaultAvatar from "../../public/assets/icons/avatar-svgrepo-com.svg";

const TourPageSkeleton = () => {
  const router = useRouter();
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
        gradientColor={createGradientbackground("#6d6d6d", "#6e6e6e")}
      >
        <HeaderContentContainer>
          <GradientText gradientText={createGradientText("#505050", "#5d5d5d")}>
            <span>-----------</span>
          </GradientText>
          <HeaderContentItemsContainer
            gradientText={createGradientText("#505050", "#5d5d5d")}
          >
            <HeaderContentItem>
              <span>------------ </span>
            </HeaderContentItem>
            <HeaderContentItem style={{ marginLeft: "2rem" }}>
              <span> ----------</span>
            </HeaderContentItem>
          </HeaderContentItemsContainer>
        </HeaderContentContainer>
      </HeaderContainer>
      <InformationSection>
        <AboutContainer>
          <SecodaryHeading
            background={createGradientbackground("#6d6d6d", "#6e6e6e")}
          >
            <SkeletonItem>----------------</SkeletonItem>
          </SecodaryHeading>
          <SkeletonText />
        </AboutContainer>
        <InfoContainer>
          <ItemsContainer>
            <SecodaryHeading
              background={createGradientbackground("#6d6d6d", "#6e6e6e")}
            >
              <SkeletonItem>-------------------------</SkeletonItem>
            </SecodaryHeading>
            <InfoItem iconColor={"#6d6d6d"}>
              <SkeletonItem>-----------------</SkeletonItem>
              <SkeletonItem>---------------</SkeletonItem>
              <CalenderIcon />
            </InfoItem>
            <InfoItem iconColor={"#6d6d6d"}>
              <SkeletonItem>-------------</SkeletonItem>
              <SkeletonItem>-------------</SkeletonItem>
              <DifficultyIcon />
            </InfoItem>
            <InfoItem iconColor={"#6d6d6d"}>
              <SkeletonItem>-------------</SkeletonItem>
              <SkeletonItem>-------------</SkeletonItem>
              <ParticipantsIcon />
            </InfoItem>
            <InfoItem iconColor={"#6d6d6d"}>
              <SkeletonItem>-------------</SkeletonItem>
              <SkeletonItem>-------------</SkeletonItem>
              <StarIcon />
            </InfoItem>
          </ItemsContainer>
          <ItemsContainer>
            <SecodaryHeading
              background={createGradientbackground("#6d6d6d", "#6e6e6e")}
            >
              <SkeletonItem>---------------------</SkeletonItem>
            </SecodaryHeading>

            <InfoItem>
              <SkeletonItem>----------------</SkeletonItem>

              <SkeletonItem>------------</SkeletonItem>

              <DefaultAvatar style={{ fill: "#6d6d6d" }} />
            </InfoItem>
            <InfoItem>
              <SkeletonItem>----------------</SkeletonItem>

              <SkeletonItem>---------</SkeletonItem>

              <DefaultAvatar style={{ fill: "#6d6d6d" }} />
            </InfoItem>
            <InfoItem>
              <SkeletonItem>---------------------</SkeletonItem>

              <SkeletonItem>---------</SkeletonItem>

              <DefaultAvatar style={{ fill: "#6d6d6d" }} />
            </InfoItem>
          </ItemsContainer>
        </InfoContainer>
      </InformationSection>
    </div>
  );
};

export default TourPageSkeleton;
