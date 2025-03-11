import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import UniqueFeatures from "./components/UniqueFeatures";
import WhyFollow from "./components/WhyFollow";
import UpcomingPlans from "./components/UpcomingPlans";
import Tweets from "./components/Tweets";
import FAQ from "./components/FAQ";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <UniqueFeatures />
      <WhyFollow />
      <UpcomingPlans />
      <Tweets />
      <FAQ />
      <Team />
      <Footer />
    </main>
  );
}
