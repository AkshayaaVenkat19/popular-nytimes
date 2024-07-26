const Loader = () => {
  return (
    <div className="text-lg text-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#567B95] border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"></div>
      <div className="text-sm">Loading...</div>
    </div>
  );
};

export default Loader;
