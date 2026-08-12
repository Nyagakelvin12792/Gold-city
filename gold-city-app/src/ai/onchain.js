/* ==========================================================================
   FREE ON-CHAIN & MARKET METRICS CLIENT
   Uses 100% free, public, keyless APIs: CoinGecko, Blockchain.info, Alternative.me
   ========================================================================== */

/**
 * Fetches free real-time BTC market metrics, network health, and sentiment.
 */
export async function fetchFreeOnChainData() {
  try {
    const [coingeckoRes, fngRes, blockchainRes] = await Promise.allSettled([
      fetch('https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&community_data=false&developer_data=false'),
      fetch('https://api.alternative.me/fng/'),
      fetch('https://api.blockchain.info/stats?format=json&cors=true')
    ]);

    let price = null;
    let change24h = null;
    let fngScore = null;
    let fngClassification = null;
    let hashRate = null;
    let difficulty = null;

    if (coingeckoRes.status === 'fulfilled' && coingeckoRes.value.ok) {
      const cg = await coingeckoRes.value.json();
      price = cg.market_data?.current_price?.usd;
      change24h = cg.market_data?.price_change_percentage_24h;
    }

    if (fngRes.status === 'fulfilled' && fngRes.value.ok) {
      const fng = await fngRes.value.json();
      fngScore = fng.data?.[0]?.value;
      fngClassification = fng.data?.[0]?.value_classification;
    }

    if (blockchainRes.status === 'fulfilled' && blockchainRes.value.ok) {
      const bc = await blockchainRes.value.json();
      hashRate = bc.hash_rate ? (bc.hash_rate / 1000000000).toFixed(1) + ' EH/s' : null;
      difficulty = bc.difficulty;
    }

    return {
      price: price ? `$${price.toLocaleString()}` : null,
      change24h: change24h ? `${change24h.toFixed(2)}%` : null,
      fngScore,
      fngClassification,
      hashRate,
      difficulty
    };
  } catch (err) {
    console.warn('Free on-chain API fetch error:', err);
    return {};
  }
}
