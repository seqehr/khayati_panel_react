import { useState } from "react";

// Hooks

import useTheme from "../../../hooks/useTheme";

// Components
import BuySellButton from "./BuySellButton";

// MUI
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Icons
import { BiBitcoin } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";

const cryptocurrencieSymbolsData = {
  bitcoin: "BTC",
  ethereum: "ETH",
};

const BuySell = (props) => {
  const { theme } = useTheme();
  const [buyOrSell, setBuyOrSell] = useState("buy");
  const [selectedCryptocurrency, setSelectedCryptocurrency] =
    useState("bitcoin");

  return (
    <div className="mb-6">
      {/* ————— B U Y / S E L L ————— */}
      <div className="grid grid-cols-2">
        <BuySellButton
          text={`خرید فروش`}
          active={buyOrSell === "buy"}
          onClickF={() => setBuyOrSell("buy")}
        />
        <BuySellButton
          text={`خرید فروش`}
          active={buyOrSell === "sell"}
          onClickF={() => setBuyOrSell("sell")}
        />
      </div>
      {/* ————— F O R M ————— */}
      <div className="p-5 bg-background2-light dark:bg-background2-dark rounded-br-2xl rounded-bl-2xl">
        <div className="mb-4">
          {/* ——— Select Crypto ——— */}
          <Select
            value={selectedCryptocurrency}
            onChange={(e) => setSelectedCryptocurrency(e.target.value)}
            variant="outlined"
            dir="ltr"
            fullWidth
            sx={{
              "&:hover": {
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(140, 140, 146, 0.8)",
                },
              },
              ".MuiSelect-select": {
                paddingTop: "0.5rem",
                paddingLeft: "0.75rem",
                paddingBottom: "0.5rem",
              },
              ".MuiSvgIcon-root": {
                fill: theme === "light" ? "#060620" : "#FEFEFF",
              },
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(140, 140, 146, 0.3)",
              },
            }}
            className="text-black dark:text-white"
          >
            <MenuItem value="bitcoin">
              <div className="flex items-center gap-2 py-3">
                <i className="rounded-full bg-bitcoin-dark text-white p-0.5">
                  <BiBitcoin />
                </i>
                <span>Bitcoin</span>
                <span className="text-xs">
                  {cryptocurrencieSymbolsData["bitcoin"]}
                </span>
              </div>
            </MenuItem>
            <MenuItem value="ethereum">
              <div className="flex items-center gap-2 py-3">
                <i className="rounded-full bg-ethereum-dark text-white p-0.5">
                  <FaEthereum />
                </i>
                <span>Ethereum</span>
                <span className="text-xs">
                  {cryptocurrencieSymbolsData["ethereum"]}
                </span>
              </div>
            </MenuItem>
          </Select>
        </div>
        {/* ——— Amount USD ——— */}
        <div className="mb-4 text-black dark:text-white">
          <TextField
            label="USD"
            variant="outlined"
            type="number"
            fullWidth
            sx={{
              "&:hover": {
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(140, 140, 146, 0.8)",
                },
              },
              // Label
              ".MuiInputLabel-root": {
                color: theme === "light" ? "black" : "white",
                "&.Mui-focused": {
                  color: theme === "light" ? "black" : "white",
                },
              },
              ".MuiOutlinedInput-root": {
                // Input
                ".MuiOutlinedInput-input": {
                  color: theme === "light" ? "black" : "white",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(140, 140, 146, 0.3)",
                },
              },
            }}
          />
        </div>
        {/* ——— Amount Cryptocurrency ——— */}
        <div className="mb-4">
          <TextField
            label={`${cryptocurrencieSymbolsData[selectedCryptocurrency]}`}
            variant="outlined"
            type="number"
            fullWidth
            sx={{
              "&:hover": {
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(140, 140, 146, 0.8)",
                },
              },
              // Label
              ".MuiInputLabel-root": {
                color: theme === "light" ? "black" : "white",
                "&.Mui-focused": {
                  color: theme === "light" ? "black" : "white",
                },
              },
              ".MuiOutlinedInput-root": {
                // Input
                ".MuiOutlinedInput-input": {
                  color: theme === "light" ? "black" : "white",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(140, 140, 146, 0.3)",
                },
              },
            }}
          />
        </div>
        {/* ——— Buy/Sell Button ——— */}
        <div>
          <button className="w-full py-4 font-medium text-white capitalize bg-blue-light dark:bg-blue-dark rounded-2xl">
            {`خرید`}&nbsp;
            {cryptocurrencieSymbolsData[selectedCryptocurrency]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuySell;
