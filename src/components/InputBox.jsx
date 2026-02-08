import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl flex justify-between items-center gap-4">
      
      <div className="flex flex-col w-full">
        <label className="text-sm text-gray-600 mb-1 font-medium">
          {label}
        </label>

        <input
          type="number"
          className="
            w-full
            bg-white
            border border-blue-300
            rounded-lg
            px-3 py-2
            text-gray-800
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
            transition
          "
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className="flex flex-col min-w-[90px\]">
        <label className="text-sm text-gray-600 mb-1 font-medium">
          Currency
        </label>

        <select
          className="
            bg-white
            border border-blue-300
            rounded-lg
            px-2 py-2
            text-gray-800
            cursor-pointer
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            transition
          "
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
