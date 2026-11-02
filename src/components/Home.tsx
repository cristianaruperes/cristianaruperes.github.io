import React from "react";
import { Hero } from "./Hero";
import { About } from "./About";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { FeaturedProjects } from "./FeaturedProjects";
import { Publications } from "./Publications";

/**
 * Everything except the full portfolio lives on this single page; the nav links
 * to each section by anchor. The portfolio keeps its own route, reachable from
 * the button under the featured projects.
 */
export const Home: React.FC = () => (
  <>
    <Hero />
    <About />
    <Experience />
    <Education />
    <FeaturedProjects />
    <Publications />
  </>
);
