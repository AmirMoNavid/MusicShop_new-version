const Main = ({ children }) => {
  return (
    <div className="flex h-full w-full flex-col overflow-auto bg-zinc-300/50 dark:bg-neutral-900 ">
      <div className="fadeShow dark::text-white h-full w-full text-gray-950">
        {children}
      </div>
    </div>
  );
};

export default Main;
