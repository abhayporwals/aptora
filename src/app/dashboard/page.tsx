import NewsSection from "./components/NewsSection";
import TopDapps from "./components/TopDapps";
import PriceOverview from "./components/PriceOverview";
import MarketMovers from "./components/MarketMovers";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
      {/* Price Overview Section */}
      <div className="lg:col-span-8">
        <PriceOverview />
      </div>

      {/* News Feed Section */}
      <div className="lg:col-span-4">
        <NewsSection />
      </div>

      {/* Top Dapps Section */}
      <div className="lg:col-span-6">
        <TopDapps />
      </div>

      {/* Market Movers Section */}
      <div className="lg:col-span-6">
        <MarketMovers />
      </div>
    </div>
  );
}
