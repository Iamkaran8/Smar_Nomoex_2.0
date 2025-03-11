import React, { useEffect, useState } from "react";
import axios from "axios";

const CryptoData = () => {
    const [crypto, setCrypto] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCryptoData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/crypto-data");
                setCrypto(response.data.data); // CoinMarketCap returns data inside "data" field
                console.log(response.data.data)
                setLoading(false);
            } catch (err) {
                console.log("error")
                setLoading(false);
            }
        };

        fetchCryptoData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Crypto Market Data</h2>
            {/* <ul>
                {crypto.slice(0, 10).map((coin) => (
                    <li key={coin.id}>
                        {coin.name} ({coin.symbol}): ${coin.quote.USD.price.toFixed(2)}
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default CryptoData;
