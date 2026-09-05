import Hero from "@/components/hero";
import NextRaceSection from "@/components/next-race";
import StandingsPreview from "@/components/standings-preview";
import FeaturedDriver from "@/components/featured-driver";
import TeamsShowcase from "@/components/teams-showcase";
import RaceCalendarPreview from "@/components/race-calendar-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NextRaceSection />
      <StandingsPreview />
      <FeaturedDriver />
      <TeamsShowcase />
      <RaceCalendarPreview />
    </>
  );
}
