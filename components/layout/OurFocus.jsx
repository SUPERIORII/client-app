import React from "react";
import { FadeInSection } from ".";
export default function OurFocus({ focus }) {
  return (
    // FADE IN TRANSITION
    <FadeInSection className="p-6 bg-white rounded shadow">
      <div className="mx-auto flex justify-center items-center mb-4">
        <span className="bg-green-200 p-2 rounded-full text-green-500">
          {focus.icon}
        </span>
      </div>
      <h1 className="font-semibold text-center capitalize">
        {focus.title}
      </h1>
      <p className="text-sm text-center">{focus.description}</p>
    </FadeInSection>
  );
}
