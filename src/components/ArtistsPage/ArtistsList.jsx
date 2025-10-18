import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArtistAvatar } from "../common";

const ArtistsList = ({ artists, title, type }) => {
  return (
    <div className="flex  w-full flex-col items-start gap-2">
      <p className="text-lg italic dark:text-white dark:opacity-70 lg:text-2xl">
        • {title}
      </p>
      <Swiper className="w-full" spaceBetween={20} slidesPerView={5}>
        <div className="flex w-full justify-between gap-4 lg:lg:cursor-pointer">
          {artists.map((artist) => {
            if (artist.genre === type) {
              return (
                <SwiperSlide key={artist.id}>
                  <ArtistAvatar {...artist} />
                </SwiperSlide>
              );
            }
          })}
        </div>
      </Swiper>
    </div>
  );
};
export default ArtistsList;
