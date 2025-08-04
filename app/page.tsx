import "./globals.css";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import { Approach } from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="
    relative bg-black-100
     flex justify-center
      items-center flex-col
       overflow-hidden mx-auto
        px-5 sm:px-10"
    >
      <div className="mx-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
