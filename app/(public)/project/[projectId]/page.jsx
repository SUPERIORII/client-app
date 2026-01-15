import Link from "next/link";
import NotFoundProject from "../layouts/NotFoundProject";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import LikeCommentShare from "../layouts/LikeCommentShare";
import { contentTypeConfig } from "@/components/utils/contentTypeConfig";
import { authUser } from "@/helpers/getUser";
// import baseUrl from "@/lib/baseUrl";

const ProjectId = async ({ params }) => {
  const currentUser = await authUser();
  const { projectId } = await params;

  // FETCH THE SINGLE PROJECT
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/project/single-project/${projectId}`,
    {
      credentials: "include",
      cache: "no-store",
    }
  );
  const projectDetails = await response.json();

  // FETCH TOTAL LIKE COUNT
  const contentType = contentTypeConfig(projectDetails.status);
  const likeResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/likes?contentId=${
      projectDetails.id
    }&contentType=${contentType}&userId=${currentUser?.id || null}`,
    {
      cache: "no-store",
    }
  );
  const likeData = await likeResponse.json();

  // CHECK IF THREE IS NO PROJECT
  const emptyProject = !projectDetails || projectDetails.length === 0;

  if (emptyProject) return <NotFoundProject />;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/project"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-300 rounded-xl text-slate-700 font-semibold hover:border-blue-600 hover:text-blue-600 hover:-translate-x-1 hover:shadow-lg transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative h-125 overflow-hidden">
            <img
              src={projectDetails.projectImage}
              alt={projectDetails.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg text-sm font-bold uppercase tracking-wider mb-4">
                {projectDetails.status}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                {projectDetails.title}
              </h1>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-3">
                {projectDetails.image ? (
                  <img
                    className="w-12 h-12 object-cover object-center rounded-full flex items-center justify-center shadow-lg"
                    src={projectDetails.image}
                    alt={projectDetails.author}
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                    {projectDetails?.author?.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <User className="w-4 h-4" />
                    {projectDetails.author}
                  </div>
                  <p className="text-sm text-slate-500">content Author</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">{projectDetails.date}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-2xl text-slate-700 leading-relaxed font-medium mb-8 italic border-l-4 border-blue-600 pl-6">
                {projectDetails.description}
              </p>

              <div className="text-lg text-slate-800 leading-relaxed space-y-6">
                {projectDetails.description
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index} className="text-justify">
                      {paragraph.trim()}
                    </p>
                  ))}
              </div>
            </div>

            <div className="mb-8 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-slate-600" />
                <span className="font-semibold text-slate-900">Tags</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {projectDetails.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-linear-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-lg text-sm font-semibold hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <LikeCommentShare
              projectDetails={projectDetails}
              likeData={likeData}
              currentUser={currentUser}
            />
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProjectId;
