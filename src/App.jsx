import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./Hooks/currencyInfo";
import { ArrowUpDown } from "lucide-react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 to-blue-200 px-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-blue-200 hover:shadow-2xl transition">
        
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Currency Converter
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          <div className="flex justify-center my-4">
            <button
              type="button"
              onClick={swap}
              className="
                bg-white
                border border-blue-300
                text-blue-600
                p-2
                rounded-full
                shadow-sm
                hover:bg-blue-600
                hover:text-white
                hover:rotate-180
                transition
                duration-300
              "
              title="Swap currencies"
            >
              <ArrowUpDown size={18} />
            </button>
          </div>

          <div className="mb-5">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              bg-blue-600
              text-white
              px-4 py-3
              rounded-lg
              font-semibold
              shadow-md
              hover:bg-blue-700
              hover:shadow-lg
              transition
            "
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
