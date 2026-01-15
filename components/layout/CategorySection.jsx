import NewsCard from "./NewsCard";


const CategorySection = ({ title, items, icon: Icon, gradient }) => {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className={`p-3 rounded-xl bg-linear-to-br ${gradient}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default CategorySection;
