"use client";
import { Footer, Navbar } from "@/components/layout";
import React, { useEffect, useState } from "react";
import { Newspaper, TrendingUp, FileText, BookOpen, Bell } from "lucide-react";
import EmptyStateUI from "@/components/layout/EmptyStatesUI";
import CategorySection from "@/components/layout/CategorySection";
import NewsLoader from "@/components/loaders/NewsLoader";

const NewsPage = ({ news }) => {
  const [newsData, setNewsData] = useState({
    latest: [],
    pressRelease: [],
    story: [],
    research: [],
  });
  const [isLoaded, setIsLoaded] = useState(false);

  //LOADING STATE
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fetchNews = async () => {
    try {
      setNewsData(news);
    } catch (err) {
      setError(err.response?.message);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);

  const emptyNews =
    (!newsData.latest || newsData.latest.length === 0) &&
    (!newsData.pressRelease || newsData.pressRelease.length === 0) &&
    (!newsData.story || newsData.story.length === 0) &&
    (!newsData.research || newsData.research.length === 0);

  //   LOADING STATE LOADER
  if (!isLoaded) return <NewsLoader />;

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Bell className="w-4 h-4" />
            <span className="text-sm font-medium">Stay Informed</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Latest News & <span className="text-emerald-200">Insights</span>
          </h1>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto leading-relaxed">
            Discover the latest updates on environmental issues, research
            breakthroughs, and inspiring stories from our community
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-emerald-50 to-transparent"></div>
      </section>

      {/* News Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        {emptyNews ? (
          <EmptyStateUI />
        ) : (
          <>
            <CategorySection
              title="Latest News"
              items={newsData.latest}
              icon={TrendingUp}
              gradient="from-emerald-500 to-teal-600"
            />
            <CategorySection
              title="Press Releases"
              items={newsData.pressRelease}
              icon={FileText}
              gradient="from-blue-500 to-cyan-600"
            />
            <CategorySection
              title="Research & Publications"
              items={newsData.research}
              icon={BookOpen}
              gradient="from-violet-500 to-purple-600"
            />
            <CategorySection
              title="Stories from the Field"
              items={newsData.story}
              icon={Newspaper}
              gradient="from-orange-500 to-amber-600"
            />
          </>
        )}
      </main>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-emerald-50 mb-8 max-w-2xl mx-auto">
            Subscribe to receive the latest environmental news, research
            updates, and inspiring stories directly to your inbox
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
            Subscribe to Updates
          </button>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
