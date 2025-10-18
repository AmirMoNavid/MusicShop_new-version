import createEmptyArray from "@/src/utils/createEmptyArray";
import Skeleton from "../common/Skeleton";

const TracksLoading = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      {createEmptyArray(5).map((_, index) => {
        return <Skeleton key={index} className="h-14 w-full rounded-lg" />;
      })}
    </div>
  );
};
export default TracksLoading;
