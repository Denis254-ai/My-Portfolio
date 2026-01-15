"use client";

import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Toolkit } from "@/components/sections/toolkit";
import { Services } from "@/components/sections/services";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { Process } from "@/components/sections/process";
import { Insights } from "@/components/sections/insights";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full overflow-hidden">
      <Hero />
      <About />
      <Toolkit />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Process />
      <Insights />
    </div>
  );
}
