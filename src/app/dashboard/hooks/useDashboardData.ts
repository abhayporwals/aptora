import { useState, useEffect } from "react";

interface SocialLink {
  type: string;
  url: string;
}

interface DappMetrics {
  balance: number;
  balancePercentageChange: number;
  transactions: number;
  transactionsPercentageChange: number;
  uaw: number;
  uawPercentageChange: number;
  volume: number;
  volumePercentageChange: number;
}

interface DappItem {
  dappId: number;
  name: string;
  description: string;
  fullDescription: string;
  logo: string;
  website: string;
  link: string;
  isActive: boolean;
  categories: string[];
  chains: string[];
  socialLinks: SocialLink[];
  tags: Array<{
    name: string;
    url: string;
  }>;
  metrics: DappMetrics;
}

interface NewsItem {
  title: string;
  published_at: string;
  url: string;
  source: { title: string };
  currencies: { code: string }[];
}

interface topGainersData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  last_updated: string;
}

interface topLosersData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  last_updated: string;
}

interface AptosPriceData {
  usd: number;
  usd_24h_vol: number;
  usd_market_cap: number;
}

interface CoinGeckoResponse {
  aptos?: AptosPriceData;
}

interface AptosChartData {
  prices: [number, number][];
}

interface DashboardData {
  topDapps: DappItem[];
  news: NewsItem[];
  topGainers: topGainersData[];
  topLosers: topLosersData[];
  aptPrice: CoinGeckoResponse;
  aptosChartData: AptosChartData[];
  isLoading: boolean;
  error: string | null;
}

export function useDashboardData(): DashboardData {
  const [data, setData] = useState<DashboardData>({
    topDapps: [],
    news: [],
    topGainers: [],
    topLosers: [],
    aptPrice: {},
    aptosChartData: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/dashboard");
        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }
        const result = await response.json();

        setData({
          topDapps: result.topDapps || [],
          news: result.news || [],
          topGainers: result.topGainers || [],
          topLosers: result.topLosers || [],
          aptPrice: result.AptoPrice || {},
          aptosChartData: result.aptosChartData || [],
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setData((prev) => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error.message : "An error occurred",
        }));
      }
    }

    fetchData();
    // Set up polling every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return data;
}
