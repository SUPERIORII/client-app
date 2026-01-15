"use client";
import { focusAreas } from "@/helpers/sources";
import { FadeInSection } from "@/components/layout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

export default function FocusArea() {
  return (
    <>
      {focusAreas.map((focus, index) => (
        <FadeInSection key={index} delay={index * 0.1}>
          <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
            <CardHeader className="pb-4">
              <div
                className={`w-16 h-16 rounded-2xl bg-linear-to-r ${focus.gradient} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {focus.icon}
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                {focus.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 leading-relaxed text-base">
                {focus.description}
              </CardDescription>
            </CardContent>
          </Card>
        </FadeInSection>
      ))}
    </>
  );
}
