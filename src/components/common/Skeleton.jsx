const Skeleton = ({ className }) => {
  return (
    <div
      className={`animate-pulse bg-neutral-300 dark:bg-gray-100/30 ${className}`}
    ></div>
  );
};
export default Skeleton;
