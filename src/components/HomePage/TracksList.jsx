import React from "react";
import { TrackBox } from "../common";
import { useMediaPredicate } from "react-media-hook";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TracksList = ({ tracks, title, musicsState }) => {
  const isMobile = useMediaPredicate("(max-width: 1024px)");

  return (
    <div className="fadeShow2  flex w-full flex-col items-start gap-2">
      <p className="text-lg italic dark:text-white dark:opacity-70 lg:text-2xl">
        • {title}
      </p>
      <Swiper
        className="h-auto w-[100%]"
        spaceBetween={isMobile ? 10 : 30}
        slidesPerView={isMobile ? 2.5 : 8}
      >
        <div className="flex w-full justify-between gap-4">
          {tracks.map((track) => {
            if (track.state === musicsState) {
              return (
                <SwiperSlide key={track.musicName}>
                  <TrackBox {...track} />
                </SwiperSlide>
              );
            }
          })}
        </div>
      </Swiper>
    </div>
  );
};
export default TracksList;
