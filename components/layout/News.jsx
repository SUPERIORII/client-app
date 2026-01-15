import React from "react";

export default function News({ news }) {
  return (
    <div className="p-4 bg-white shadow rounded">
      <div className="h-32 bg-gray-200 mb-2">
        <img
          src={news.image}
          width={300}
          height={300}
          alt={news.title}
          className="w-full h-full"
        />
      </div>
      <h4 className="font-semibold">{news.title}</h4>
      <p className="text-sm">{news.summary}</p>
      <a href="#" className="text-green-600 mt-2 inline-block">
        Read More
      </a>
    </div>
  );
}
