"use client";
import React, { useState, useEffect } from "react";
import { ProjectCard, EmptyStatesUI } from "@/components/layout";

export default function ProjectsList({ initialProjects }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading our amazing projects...</p>
        </div>
      </div>
    );

  return (
    <>
      {!initialProjects ? (
        <EmptyStatesUI data="Project" />
      ) : (
        <>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Active Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each project represents our commitment to creating a sustainable
              future for generations to come
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {initialProjects?.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
