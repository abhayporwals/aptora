import NewsSection from "./components/NewsSection";
import TopDapps from "./components/TopDapps";
import PriceOverview from "./components/PriceOverview";
import MarketMovers from "./components/MarketMovers";
import TopGainers from "../components/TopGainers";
import TopLosers from "../components/TopLosers";
import AptosChart from "../components/AptosChart";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Main Price Chart Section */}
      <section className="w-full p-6">
        <AptosChart />
      </section>

         {/* Market Overview Section */}
      <section className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TopGainers />
          <TopLosers />
        </div>
      </section>


      {/* Main Dashboard Content */}
      <section className="container p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Top DApps */}
          <div className="lg:col-span-8">
            <TopDapps />
          </div>

          {/* Right Column - News Feed */}
          <div className="lg:col-span-4">
            <NewsSection />
          </div>
        </div>
      </section>
    </div>
  );
}
