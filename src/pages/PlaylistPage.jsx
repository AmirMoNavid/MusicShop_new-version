import FadeBackgroundImage from "@/components/common/FadeBackgroundImage";
import SiteLayout from "@/layout/SiteLayout";
import React, { useEffect } from "react";
import { useMediaPredicate } from "react-media-hook";
import createEmptyArray from "@/utils/createEmptyArray";
import Skeleton from "@/components/common/Skeleton";
import { useParams } from "react-router-dom";
import { TrackLine } from "@/components/common";
import { useDispatch, useSelector } from "react-redux";
import NostalogiaImage from "@/assets/Playlists/Nostalgia.jpg";
import { getPlaylists } from "../redux/Playlists/PlaylistsSlice";
import FavoriteMusicsImage from "@/assets/Playlists/YourFavorite.jpg";

const PlaylistPage = () => {
  const dispatch = useDispatch();
  const playLists = useSelector((state) => state.playlists.playlists);
  const { loading } = useSelector((state) => state.playlists);
  const { playlist } = useParams();
  const currentPlaylist = playLists.find((p) => p.title === playlist);
  const favoriteMusics = localStorage.getItem(`favorite`) || "";

  useEffect(() => {
    dispatch(getPlaylists());
  }, []);

  const renderPlaylistImage = () => {
    if (playlist === "Your Favorites") return FavoriteMusicsImage;
    if (currentPlaylist?.imageUrl.length !== 0) {
      return currentPlaylist?.imageUrl;
    } else {
      return NostalogiaImage;
    }
  };
  return (
    <SiteLayout>
      {!loading ? (
        <div className="relative flex h-full w-full flex-col dark:text-white">
          <FadeBackgroundImage imageUrl={renderPlaylistImage()} />
          {/* Content */}
          <div className=" z-10 flex w-full flex-col gap-4 p-2 lg:p-9">
            <div className="flex w-full flex-col items-center justify-start gap-6 lg:flex-row lg:items-end">
              <img
                className="fadeShow1 h-52 w-52 lg:h-64 lg:w-64 "
                src={renderPlaylistImage()}
                alt=""
              />
              <div className="fadeShow2 lg:items-star2 order-1 flex flex-col items-center gap-3 text-white lg:order-none">
                <p className="text-3xl font-bold lg:text-5xl">
                  {currentPlaylist?.title}
                </p>
                <p className="lg:text-2xl">
                  {playlist === "Your Favorites"
                    ? "1 follower"
                    : `${currentPlaylist?.followers}k followers`}
                </p>
              </div>
            </div>
          </div>
          <div className="fadeShow4 z-40 flex h-3/4 max-h-full w-full flex-col items-start justify-start gap-4 overflow-auto  p-4 lg:h-full lg:max-h-none">
            <p className="opacity-70">Songs ...</p>
            <div className="flex h-full w-full flex-col items-center justify-start gap-3">
              {currentPlaylist?.tracks
                ? currentPlaylist?.tracks.map((track) => {
                    return <TrackLine key={track.id} {...track} />;
                  })
                : JSON.parse(favoriteMusics)?.map((track) => {
                    return <TrackLine key={track.id} {...track} />;
                  })}
            </div>
          </div>
        </div>
      ) : (
        <PlaylistPageSkeleton />
      )}
    </SiteLayout>
  );
};

const PlaylistPageSkeleton = () => {
  const isMobile = useMediaPredicate("(max-width: 1024px)");

  return (
    <div className="flex h-full w-full flex-col justify-start gap-12 p-4 lg:p-8">
      <div className="flex w-full items-center justify-center gap-3">
        {createEmptyArray(1).map((_, index) => {
          return (
            <div
              key={index}
              className="flex w-full flex-col items-center justify-center gap-2 lg:h-full lg:flex-row"
            >
              <Skeleton className="h-44 w-1/2 rounded-xl lg:order-none lg:h-64 lg:w-64" />
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 lg:items-start lg:justify-end lg:gap-4">
                <Skeleton className="h-4 w-[30%] rounded-xl lg:h-6 lg:w-[20%]" />
                <Skeleton className="h-4 w-[20%] rounded-xl lg:h-6 lg:w-[15%]" />
                <Skeleton className="h-4 w-[60%] rounded-xl lg:h-6 lg:w-[30%]" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex w-full items-center justify-between gap-3 lg:justify-start">
        {createEmptyArray(1).map((_, index) => {
          return (
            <div
              key={index}
              className="flex w-full flex-col items-center justify-center gap-2 lg:w-28"
            >
              <Skeleton className="h-4 w-8 rounded-full" />
              <Skeleton className="h-4 w-[30%] rounded-2xl" />
            </div>
          );
        })}
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-3 ">
        {createEmptyArray(isMobile ? 3 : 9).map((_, index) => {
          return (
            <div
              key={index}
              className="flex w-full flex-col items-center justify-center gap-2"
            >
              <Skeleton className="h-10 w-full rounded-xl" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PlaylistPage;
