import React from "react";
import { SectionContainer, VideoContainer, Video } from "./stories.styles";
import SecodaryHeading from "../heading/heading.component";
import Story from "../story-box/story.component";

const Stories = () => {
  return (
    <SectionContainer>
      <VideoContainer>
        <Video autoPlay muted loop>
          <source src="/assets/img/video.mp4" type="video/mp4" />
          <source src="/assets/img/video.mp4" type="video/webm" />
          Your browser is not supported!
        </Video>
      </VideoContainer>
      <SecodaryHeading>ما مردم را واقعاً خوشحال می کنیم</SecodaryHeading>
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        style={{ marginTop: "8rem" }}
      >
        <Story
          name="مریم مرادی"
          image="/assets/img/nat-8.jpg"
          title="بهترین هفته ی عمرم رو با خانواده م داشتم"
          content="لورم ایپسوم و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
        ></Story>
      </div>
      <div
        data-aos="fade-left"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
      >
        <Story
          name="سعید محمدی"
          image="/assets/img/nat-9.jpg"
          title="وای! زندگی من الان کاملاً متفاوته"
          content="لورم ایپسوم و ایپسوم و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
        ></Story>
      </div>
    </SectionContainer>
  );
};

export default Stories;
