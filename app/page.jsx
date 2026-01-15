import React from "react";
import {
  Carousel,
  EmptyStatesUI,
  FadeInSection,
  Footer,
  Navbar,
  VideoPlayer,
} from "@/components/layout/index";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FocusArea from "@/components/layout/FocusArea";

import Image from "next/image";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  const storeCookies = await cookies();
  const token = storeCookies.get("accessToken");

  if (token) redirect("/dashboard");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/landing`,
    {
      credentials: "include",
      cache: "no-store",
    }
  );

  // EXTRACE ALL THE DATA FROM THE FETCH RESULT
  const { projects, news, heroSectionImages } = await response.json();

  if (!response.ok)
    throw new Error(
      `SEVER_ERROR:
      ${response.status}`
    );

  // // CHECK IF API RETURN EMPTY VALUES
  const hasNoData =
    (!news || news.length === 0) && (!projects || projects.length === 0);

  // console.log(hasNoData);

  // GET ALL HOME DATA
  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-16">
        {/* Enhanced Hero Section */}
        <Carousel heroSectionImages={heroSectionImages} />

        {/* Enhanced Focus Areas Section */}
        <section className="py-24 bg-linear-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Our Focus Areas
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Addressing environmental challenges through innovative
                  solutions and community-driven initiatives
                </p>
                <div className="w-24 h-1 bg-linear-to-r from-green-500 to-blue-500 mx-auto mt-6 rounded-full" />
              </div>
            </FadeInSection>
            {/* FOCUS ARROW CONTAINER */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FocusArea />
            </div>
          </div>
        </section>

        {/* Enhanced What We Do Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <FadeInSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-linear-to-r from-green-500 to-blue-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl" />
                  {/* VideoPlayer */}
                  {/* <VideoPlayer /> */}
                  {/* <video src="/images/video-2.mp4" controls className="w-500 h-54"></video> */}
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                      A thriving, sustainable world where communities and
                      ecosystems
                      <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-blue-600">
                        prosper in harmony
                      </span>
                    </h3>

                    <Badge
                      variant="secondary"
                      className="mb-6 text-green-800 bg-green-100 hover:bg-green-200 px-4 py-2"
                    >
                      🌱 Leading Environmental Champions
                    </Badge>
                  </div>

                  <div className="prose prose-lg text-gray-600">
                    <p className="text-xl leading-relaxed">
                      Empowering communities to build sustainable futures
                      through environmental stewardship, education, and
                      innovative solutions.
                    </p>

                    <p className="leading-relaxed">
                      We're dedicated to creating lasting environmental impact
                      by working directly with communities, implementing
                      cutting-edge solutions, and fostering a culture of
                      sustainability that benefits both people and planet.
                    </p>
                  </div>

                  <Button
                    size="lg"
                    className="bg-linear-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
                  >
                    Learn More About Our Mission
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Projects & News Content */}
        {hasNoData ? (
          <section className="py-24">
            <div className="container mx-auto px-6">
              <EmptyStatesUI data="data" />
            </div>
          </section>
        ) : (
          <>
            {/* Enhanced Projects Section */}
            <section className="py-24 bg-linear-to-br from-green-50 to-blue-50">
              <div className="container mx-auto px-6">
                <FadeInSection>
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                      Our Impact in Action
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Discover how we're making a tangible difference through
                      innovative projects and community partnerships
                    </p>
                    <div className="w-24 h-1 bg-linear-to-r from-green-500 to-blue-500 mx-auto mt-6 rounded-full" />
                  </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects?.map((project, index) => (
                    <FadeInSection key={project.id} delay={index * 0.1}>
                      <div
                        className="
                      group h-full hover:shadow-2xl transition-all duration-500
                         backdrop-blur-sm 
                       hover:-translate-y-3 overflow-hidden
                       bg-card text-card-foreground flex flex-col gap-6
                        rounded-xl border pb-6 shadow-sm"
                      >
                        <div className="relative h-54 overflow-hidden">
                          <img
                            src={project.image_url}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge
                              variant="secondary"
                              className={`${
                                project.status === "coming_soon"
                                  ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                                  : project.status === "ongoing"
                                  ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                                  : "bg-green-100 text-green-800 hover:bg-green-200"
                              }`}
                            >
                              <div
                                className={`w-2 h-2 rounded-full mr-2 ${
                                  project.status === "coming_soon"
                                    ? "bg-yellow-500"
                                    : project.status === "ongoing"
                                    ? "bg-blue-500"
                                    : "bg-green-500"
                                }`}
                              />
                              {project.status.replace("_", " ").toUpperCase()}
                            </Badge>
                          </div>
                        </div>

                        <CardHeader>
                          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                            {project.title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <CardDescription className="text-gray-600 leading-relaxed">
                            {project.description.slice(0, 120)}...
                          </CardDescription>

                          <Button
                            variant="ghost"
                            asChild
                            className="w-full group-hover:bg-green-50 group-hover:text-green-700 transition-colors"
                          >
                            <a href={`/project/${project.slug}`}>
                              View Project Details
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </Button>
                        </CardContent>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </section>

            {/* Enhanced News Section */}
            <section className="py-24 bg-white">
              <div className="container mx-auto px-6">
                <FadeInSection>
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                      Latest News & Updates
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Stay informed about our latest initiatives, partnerships,
                      and environmental impact stories
                    </p>
                    <div className="w-24 h-1 bg-linear-to-r from-green-500 to-blue-500 mx-auto mt-6 rounded-full" />
                  </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {news?.map((article, index) => (
                    <FadeInSection key={article.id} delay={index * 0.1}>
                      <Card className="group h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-3 overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={article.image_url}
                            alt={article.title}
                            className="object-cover transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                        </div>

                        <CardHeader>
                          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                            {article.title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                            {article.descriptions}
                          </CardDescription>

                          <Button
                            variant="ghost"
                            asChild
                            className="w-full group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"
                          >
                            <a href={article.slug}>
                              Read Full Story
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Enhanced Call to Action */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-green-600 via-blue-600 to-purple-600" />
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative container mx-auto px-6 text-center">
            <FadeInSection>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to Make a
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-orange-300">
                    Difference?
                  </span>
                </h2>

                <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
                  Join thousands of environmental champions who are creating
                  positive change in their communities. Every action counts,
                  every voice matters.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href="/volunteer">🌱 Become a Volunteer</a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href="/newsletter">📧 Join Our Newsletter</a>
                  </Button>
                </div>

                <div className="mt-12 text-white/80">
                  <p className="text-sm">
                    Join <strong className="text-yellow-300">50,000+</strong>
                    egi-warriors already making an impact
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
