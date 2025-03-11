import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors({
    origin: "http://localhost:5173" // Allow frontend access
}));
app.use(express.json());

app.get("/crypto-data", async (req, res) => {
    try {
        const response = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
            headers: {
                "X-CMC_PRO_API_KEY": "976fe7f4-79a7-4d9b-9ace-e9f500e510a2"
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
