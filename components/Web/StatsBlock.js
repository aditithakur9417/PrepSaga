const StatsBlock = ({ stats }) => {
    // -- font color, family to be managed.
  return (
    <section className="flex text-center mt-3">
      {stats.map((stat) => (
        <div className="w-1/3 border-r-2 ">
          <p className="text-4xl pb-1">{stat.statNumber}</p>
          <p className="text-base">{stat.statName}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsBlock;
