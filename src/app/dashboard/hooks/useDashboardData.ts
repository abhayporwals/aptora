import { useState, useEffect } from "react";

interface NewsItem {
  title: string;
  published_at: string;
  url: string;
  source: { title: string };
  currencies: { code: string }[];
}

interface DappMetrics {
  transactions: number;
  transactionsPercentageChange: number;
  uaw: number;
  uawPercentageChange: number;
  volume: number;
  volumePercentageChange: number;
  balance: number;
  balancePercentageChange: number;
}

interface SocialLink {
  title: string;
  url: string;
  type: string;
}

interface DappItem {
  name: string;
  description: string;
  logo: string;
  categories: string[];
  socialLinks: SocialLink[];
  metrics: DappMetrics;
  website: string;
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
interface CoinPrice {
  usd: number;
  usd_market_cap: number;
  usd_24h_vol: number;
}

interface CoinGeckoPriceResponse {
  aptos: CoinPrice;
}


interface AptosChartData {
  prices: [number, number][]
}

interface DashboardData {
  topDapps: DappItem[];
  news: NewsItem[];
  topGainers: topGainersData[];
  topLosers: topLosersData[];
  aptPrice: CoinGeckoPriceResponse[];
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
    aptPrice: [],
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
        console.log("result", result);

        const formattedDapps = result.topDapps.map((dapp: any) => ({
          name: dapp.name || "Unknown",
          category: dapp.category || "DeFi",
          volume_24h: dapp.balanceUSD || 0,
          change_24h:
            ((dapp.balanceUSD - dapp.balance) / dapp.balance) * 100 || 0,
          balance: dapp.balance || 0,
          balanceUSD: dapp.balanceUSD || 0,
        }));

        setData({
          topDapps: formattedDapps,
          news: result.news || [],
          topGainers: result.topGainers || [],
          topLosers: result.topLosers || [],
          aptPrice: result.AptoPrice || [],
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
