// 스와이퍼 플러그인 컴포넌트

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css/swiper_ban.scss";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다
// (여기서는 페이지네이션,네비게이션,자동넘김)
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";

export function SwiperBan({ cat }) {
  // cat - 카테고리명

  // 리스트만들기 함수 ////
  const makeList = (num) => {
    // num
    let temp = [];
    for (let x = 0; x < num; x++) {
      temp[x] = (
        <SwiperSlide key={x}>
          {cat == "men" && x == 2 ? (
            <video
              src={"./images/sub/" + cat + "/banner/cgv.mp4"}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            //   muted
              loop
              className="vid"
            //   autoPlay
            />
          ) : (
            <img
              src={"./images/sub/" + cat + "/banner/ban" + (x + 1) + ".png"}
            />
          )}
        </SwiperSlide>
      );
    } /////////// for /////////////

    // 배열을 리턴
    return temp;
  }; ///////////// makeList 함수 //////////

  // 리턴코드 ///////////////////
  return (
    <>
      <Swiper
        /* ref 속성에 useRef 할당변수를 넣어서 외부에 연결함 */
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // loop={true}
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다 */
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        onSlideChange={(swp)=>{
            // swp는 내부로 전달되는 스와이퍼 자신객체
            console.log("슬라이드순번:",swp.activeIndex);
            if(swp.activeIndex==2){
                document.querySelector(".vid").play();
            }
            else{
                document.querySelector(".vid").pause();
            }
        }}
      >
        {makeList(cat == "style" ? 5 : 3)}
      </Swiper>
    </>
  );
} /////////// SwiperBan 컴포넌트 ///////////
