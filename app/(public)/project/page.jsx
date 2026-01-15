import { Footer, Navbar } from "@/components/layout";
import ProjectsList from "./layouts/ProjectsList";
import ProjectsStats from "./layouts/ProjectsStats";
import Link from "next/link";

const ProjectsPage = async () => {
  // ACTUAL DATA (fetch safely during prerender)
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/project`,
    { credentials: "include", cache: "no-store" }
  );

  // CHECK SERVER STATUS
  if (!response.ok) throw new Error(`SEVER_ERROR`);

  // store the data
  const data = await response.json();

  // Ensure stats is always an array to avoid .map on undefined during prerender
  const stats = data?.stats;
  const projects = data?.projectsResult;

  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 text-gray-800 min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-linear-to-br from-slate-800 via-slate-500 to-slate-600 py-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
            <div
              className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                Our Environmental
                <span className="block bg-linear-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p
                className="text-xl md:text-2xl text-green-100 mb-8 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Discover initiatives making real impact across communities
                worldwide
              </p>

              {/* Stats Grid */}
              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                {/* PROJECT STATISTICS */}
                <ProjectsStats stats={stats} />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4 py-20">
          {/* PROJECTS LIST */}
          <ProjectsList initialProjects={projects} />
          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-linear-to-br from-green-500 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Join our community of environmental champions and help us create
                lasting change
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Volunteer Now
                </Link>
                <Link
                  href="/login"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
