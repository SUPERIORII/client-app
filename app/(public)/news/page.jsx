import NewsError from "@/components/errors/NewsError";
import NewsPage from "./NewsPage";
import { Footer, Navbar } from "@/components/layout";

const page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`);

  if (!response.ok) return <NewsError />;

  const data = await response.json();

  return (
    <div>
      {/* NAVBAR SECTION */}
      <Navbar />
      <div className="pt-16">
        <NewsPage news={data} />
      </div>
      <Footer />
    </div>
  );
};

export default page;
