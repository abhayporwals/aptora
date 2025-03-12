import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const currency = "APT,AMAPT,TRUAPT,THAPT,STAPT";
    const DAPPRADAR_API_KEY = process.env.DAPPRADAR_API_KEY;
    const CRYPTOPANIC_API_KEY = process.env.CRYPTOPANIC_API_KEY;
    const COINGEKKO_API_KEY = process.env.COINGEKKO_API_KEY;

    if (!CRYPTOPANIC_API_KEY || !COINGEKKO_API_KEY || !DAPPRADAR_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const topDapps = `https://apis.dappradar.com/v2/dapps/top/balance?range=24h&top=10&chain=aptos`;

    const newsApiUrl = `https://cryptopanic.com/api/v1/posts/?auth_token=${CRYPTOPANIC_API_KEY}&public=true&currencies=${currency}`;

    const topgainers = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=10&page=1&price_change_percentage=24h`;

    const toplosers = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_asc&per_page=10&page=1&price_change_percentage=24h`;

    const [mytopDapps, newsResponse, topGainers, topLosers] = await Promise.all([
      fetch(topDapps, {
        headers: { "X-API-Key": DAPPRADAR_API_KEY || "" },
      }).then((res) => {
        if (!res.ok) throw new Error(`topDapps API returned ${res.status}`);
        return res.json();
      }),
      fetch(newsApiUrl).then((res) => {
        if (!res.ok) throw new Error(`News API returned ${res.status}`);
        return res.json();
      }),
      fetch(topgainers, {
        headers: { "x-cg-demo-api-key": COINGEKKO_API_KEY || "" },
      }).then((res) => {
        if (!res.ok) throw new Error(`Top Gainers API returned ${res.status}`);
        return res.json();
      }),
      fetch(toplosers, {
        headers: { "x-cg-demo-api-key": COINGEKKO_API_KEY || "" },
      }).then((res) => {
        if (!res.ok) throw new Error(`Top Losers API returned ${res.status}`);
        return res.json();
      }),
    ]);

    return NextResponse.json({
      topDapps: mytopDapps.results || [],
      news: newsResponse.results ? newsResponse.results.slice(0, 10) : [],
      topGainers: topGainers || [],
      topLosers: topLosers || [],
    });
  } catch (error) {
    console.error("Error fetching combined data:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch data",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
