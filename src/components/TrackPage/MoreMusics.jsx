import React from "react";
import { TrackBox, TrackLine } from "../common";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMediaPredicate } from "react-media-hook";

const MoreMusics = ({ allTracks }) => {
  const isMobile = useMediaPredicate("(max-width: 1024px)");

  const renderMoreTracks = () => {
    return allTracks.slice(0, 15).map((track) => {
      return <TrackLine {...track} />;
    });
  };
  const renderMobileMoreTracks = () => {
    return (
      <Swiper
        className="h-auto w-full rounded-xl"
        spaceBetween={10}
        slidesPerView={2.2}
      >
        <div className="flex w-full justify-between gap-4">
          {allTracks.slice(0, 15).map((track) => {
            return (
              <SwiperSlide key={track.musicName}>
                <TrackBox {...track} />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    );
  };

  return (
    <>
      <div className=" fadeShow3 z-50 hidden max-h-full w-full flex-col items-start justify-start gap-5  overflow-auto rounded-md p-2 lg:flex">
        {renderMoreTracks()}
      </div>
      <div className="z-40 h-72 w-full rounded-xl pb-[20rem] text-white lg:hidden">
        <p>More Musics...</p>
        {isMobile ? renderMobileMoreTracks() : ""}
      </div>
    </>
  );
};
export default MoreMusics;
