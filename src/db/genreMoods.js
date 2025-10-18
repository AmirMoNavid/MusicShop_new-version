import Pop from "@/assets/SearchCategories/Pop.jpg";
import Rap from "@/assets/SearchCategories/Rap.jpg";
import Romance from "@/assets/SearchCategories/Romance.jpg";
import Sad from "@/assets/SearchCategories/Sad.jpg";
import Nostalgic from "@/assets/SearchCategories/Nostalgic.jpg";
import { PLAYLIST_PAGE } from "@/pathes";
export const genres = [
  {
    title: "Pop",
    path: `/${PLAYLIST_PAGE}/Pop`,
    imageUrl: Pop,
  },
  {
    title: "Rap",
    path: `/${PLAYLIST_PAGE}/Rap`,
    imageUrl: Rap,
  },
];
export const moods = [
  {
    title: "Romantic",
    path: `/${PLAYLIST_PAGE}/Romantic`,
    imageUrl: Romance,
  },
  {
    title: "Turkish",
    path: `/${PLAYLIST_PAGE}/Turkish`,
    imageUrl: Sad,
  },
  {
    title: "Nostalgia",
    path: `/${PLAYLIST_PAGE}/Nostalgia`,
    imageUrl: Nostalgic,
  },
];
