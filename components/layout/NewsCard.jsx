import { Newspaper } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

const NewsCard = ({ item }) => (
  <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="relative h-56 overflow-hidden bg-linear-to-br from-emerald-50 to-teal-50">
      {item.image_url ? (
        <img
          src={item.image_url}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Newspaper className="w-16 h-16 text-emerald-200" />
        </div>
      )}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-6">
      <h3 className="font-bold text-lg mb-3 text-gray-900 line-clamp-2 group-hover:text-emerald-600 transition-colors">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
        {item.description}
      </p>
      <a
        href={`/news/${item.slug}`}
        className="inline-flex items-center text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors group/link"
      >
        Read Full Article
        <svg
          className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  </article>
);

export default NewsCard;
