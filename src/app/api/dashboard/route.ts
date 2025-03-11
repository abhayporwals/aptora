import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const currency = "APT,AMAPT,TRUAPT,THAPT,STAPT";
    const DAPPRADAR_API_KEY = process.env.DAPPRADAR_API_KEY;
    const CRYPTOPANIC_API_KEY = process.env.CRYPTOPANIC_API_KEY;

    if (!CRYPTOPANIC_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const nftApiUrl = `https://apis.dappradar.com/v2/dapps/top/balance?range=24h&top=10&chain=aptos`;
    const newsApiUrl = `https://cryptopanic.com/api/v1/posts/?auth_token=${CRYPTOPANIC_API_KEY}&public=true&currencies=${currency}`;

    const [nftResponse, newsResponse] = await Promise.all([
      fetch(nftApiUrl, {
        headers: { "X-API-Key": DAPPRADAR_API_KEY || "" },
      }).then((res) => {
        if (!res.ok) throw new Error(`NFT API returned ${res.status}`);
        return res.json();
      }),
      fetch(newsApiUrl).then((res) => {
        if (!res.ok) throw new Error(`News API returned ${res.status}`);
        return res.json();
      }),
    ]);

    return NextResponse.json({
      topDapps: nftResponse.results || [],
      news: newsResponse.results ? newsResponse.results.slice(0, 10) : [],
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
