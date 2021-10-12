import React from "react";
import { FeaturesContainer } from "./features.styles";
import FeatureBox from "../feature-box/feature-box.component";
import IranIcon from "../../public/assets/icons/ir.svg";
import HeartIcon from "../../public/assets/icons/heart.svg";
import MapIcon from "../../public/assets/icons/map.svg";
import CompassIcon from "../../public/assets/icons/compass.svg";

const featuresObj = [
  {
    id: 1,
    title: "ایران رو بگرد",
    content:
      " و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    SVG: IranIcon,
  },
  {
    id: 2,
    title: "با طبیعت آشنا شو",
    content:
      " و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    SVG: CompassIcon,
  },
  {
    id: 3,
    title: "راهت رو پیدا کن",
    content:
      " و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    SVG: MapIcon,
  },
  {
    id: 4,
    title: "زندگی سالم تری داشته باش",
    content:
      " و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    SVG: HeartIcon,
  },
];

const Features = () => (
  <FeaturesContainer>
    <div>
      {featuresObj.map((feature) => (
        <FeatureBox key={feature.id} {...feature} />
      ))}
    </div>
  </FeaturesContainer>
);

export default Features;
