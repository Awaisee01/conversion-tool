import React, { useState, useEffect } from "react";

interface UnitData {
  factor?: number;
  symbol: string;
}

interface CategoryData {
  baseUnit: string;
  units: Record<string, UnitData>;
}

interface ConversionData {
  [key: string]: CategoryData;
}

// Conversion data structure - moved outside component to prevent re-renders
const conversionData: ConversionData = {
  Length: {
    baseUnit: "meter",
    units: {
      Meter: { factor: 1, symbol: "m" },
      Kilometer: { factor: 1000, symbol: "km" },
      Centimeter: { factor: 0.01, symbol: "cm" },
      Millimeter: { factor: 0.001, symbol: "mm" },
      Micrometer: { factor: 0.000001, symbol: "μm" },
      Nanometer: { factor: 0.000000001, symbol: "nm" },
      Mile: { factor: 1609.344, symbol: "mi" },
      Yard: { factor: 0.9144, symbol: "yd" },
      Foot: { factor: 0.3048, symbol: "ft" },
      Inch: { factor: 0.0254, symbol: "in" },
      "Light Year": { factor: 9.461e15, symbol: "ly" },
    },
  },
  Temperature: {
    baseUnit: "celsius",
    units: {
      Celsius: { symbol: "°C" },
      Fahrenheit: { symbol: "°F" },
      Kelvin: { symbol: "K" },
    },
  },
  Area: {
    baseUnit: "square meter",
    units: {
      "Square Meter": { factor: 1, symbol: "m²" },
      "Square Kilometer": { factor: 1000000, symbol: "km²" },
      "Square Centimeter": { factor: 0.0001, symbol: "cm²" },
      "Square Millimeter": { factor: 0.000001, symbol: "mm²" },
      "Square Inch": { factor: 0.00064516, symbol: "in²" },
      "Square Foot": { factor: 0.092903, symbol: "ft²" },
      "Square Yard": { factor: 0.836127, symbol: "yd²" },
      Acre: { factor: 4046.86, symbol: "ac" },
      Hectare: { factor: 10000, symbol: "ha" },
    },
  },
  Volume: {
    baseUnit: "liter",
    units: {
      Liter: { factor: 1, symbol: "L" },
      Milliliter: { factor: 0.001, symbol: "mL" },
      "Cubic Meter": { factor: 1000, symbol: "m³" },
      "Cubic Centimeter": { factor: 0.001, symbol: "cm³" },
      "Gallon (US)": { factor: 3.78541, symbol: "gal" },
      "Quart (US)": { factor: 0.946353, symbol: "qt" },
      "Pint (US)": { factor: 0.473176, symbol: "pt" },
      "Cup (US)": { factor: 0.236588, symbol: "cup" },
      "Fluid Ounce (US)": { factor: 0.0295735, symbol: "fl oz" },
    },
  },
  Weight: {
    baseUnit: "kilogram",
    units: {
      Kilogram: { factor: 1, symbol: "kg" },
      Gram: { factor: 0.001, symbol: "g" },
      Milligram: { factor: 0.000001, symbol: "mg" },
      Pound: { factor: 0.453592, symbol: "lb" },
      Ounce: { factor: 0.0283495, symbol: "oz" },
      Stone: { factor: 6.35029, symbol: "st" },
      "Ton (Metric)": { factor: 1000, symbol: "t" },
      "Ton (US)": { factor: 907.185, symbol: "ton" },
    },
  },
  Time: {
    baseUnit: "second",
    units: {
      Second: { factor: 1, symbol: "s" },
      Minute: { factor: 60, symbol: "min" },
      Hour: { factor: 3600, symbol: "h" },
      Day: { factor: 86400, symbol: "d" },
      Week: { factor: 604800, symbol: "wk" },
      Month: { factor: 2629746, symbol: "mo" },
      Year: { factor: 31556952, symbol: "yr" },
      Millisecond: { factor: 0.001, symbol: "ms" },
      Microsecond: { factor: 0.000001, symbol: "μs" },
    },
  },
};

const UnitConverter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Length");
  const [fromValue, setFromValue] = useState<string>("");
  const [toValue, setToValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<string>("");
  const [toUnit, setToUnit] = useState<string>("");

  const tabs: string[] = Object.keys(conversionData);

  // Initialize units when tab changes
  useEffect(() => {
    const units: string[] = Object.keys(conversionData[activeTab]?.units || {});
    setFromUnit(units[0] || "");
    setToUnit(units[1] || units[0] || "");
    setFromValue("");
    setToValue("");
  }, [activeTab]);

  // Temperature conversion functions
  const convertTemperature = (
    value: number,
    from: string,
    to: string
  ): number => {
    if (from === to) return value;

    let celsius: number;
    // Convert to Celsius first
    switch (from) {
      case "Celsius":
        celsius = value;
        break;
      case "Fahrenheit":
        celsius = ((value - 32) * 5) / 9;
        break;
      case "Kelvin":
        celsius = value - 273.15;
        break;
      default:
        return value;
    }

    // Convert from Celsius to target
    switch (to) {
      case "Celsius":
        return celsius;
      case "Fahrenheit":
        return (celsius * 9) / 5 + 32;
      case "Kelvin":
        return celsius + 273.15;
      default:
        return celsius;
    }
  };

  // General unit conversion
  const convertUnits = (
    value: string,
    fromUnit: string,
    toUnit: string,
    category: string
  ): string => {
    if (!value || isNaN(Number(value))) return "";

    const numValue: number = parseFloat(value);

    if (category === "Temperature") {
      return convertTemperature(numValue, fromUnit, toUnit)
        .toFixed(6)
        .replace(/\.?0+$/, "");
    }

    const units = conversionData[category]?.units;
    if (!units) return "";

    const fromFactor: number = units[fromUnit]?.factor || 1;
    const toFactor: number = units[toUnit]?.factor || 1;

    const baseValue: number = numValue * fromFactor;
    const convertedValue: number = baseValue / toFactor;

    return convertedValue.toFixed(6).replace(/\.?0+$/, "");
  };

  // Handle input changes
  const handleFromValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: string = e.target.value;
    setFromValue(value);

    if (value && !isNaN(Number(value))) {
      const converted: string = convertUnits(
        value,
        fromUnit,
        toUnit,
        activeTab
      );
      setToValue(converted);
    } else {
      setToValue("");
    }
  };

  const handleToValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: string = e.target.value;
    setToValue(value);

    if (value && !isNaN(Number(value))) {
      const converted: string = convertUnits(
        value,
        toUnit,
        fromUnit,
        activeTab
      );
      setFromValue(converted);
    } else {
      setFromValue("");
    }
  };

  // Handle unit changes
  const handleFromUnitChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setFromUnit(e.target.value);
    if (fromValue) {
      const converted: string = convertUnits(
        fromValue,
        e.target.value,
        toUnit,
        activeTab
      );
      setToValue(converted);
    }
  };

  const handleToUnitChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setToUnit(e.target.value);
    if (fromValue) {
      const converted: string = convertUnits(
        fromValue,
        fromUnit,
        e.target.value,
        activeTab
      );
      setToValue(converted);
    }
  };

  const currentUnits: string[] = Object.keys(
    conversionData[activeTab]?.units || {}
  );

  return (
    <div className="max-w-full sm:max-w-[700px] mx-auto bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-white p-3 sm:p-4 border-b border-gray-300">
        <h1 className="text-lg sm:text-xl font-semibold text-black flex items-center gap-2">
          Unit Converter Express Version
        </h1>
      </div>

      {/* Tabs */}
      <div className="w-full overflow-x-auto border-b border-gray-300 bg-gray-50">
        <div className="flex flex-nowrap">
          {tabs.map((tab: string) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap sm:px-5 sm:py-3 px-3 py-2 text-[11px] sm:text-sm font-medium  transition-colors ${
                activeTab === tab
                  ? "bg-black text-white border-b-2 border-black"
                  : "bg-gray-200 text-black hover:bg-gray-300 border border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Converter Interface */}
      <div className="p-4 sm:p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* From Section */}
          <div>
            <label className="block text-black font-medium mb-1 sm:mb-2 text-sm sm:text-base">
              From:
            </label>
            <input
              type="number"
              value={fromValue}
              onChange={handleFromValueChange}
              placeholder="Enter value"
              className="w-full p-2 sm:p-3 border border-gray-300 rounded bg-white text-black mb-2 sm:mb-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <select
              value={fromUnit}
              onChange={handleFromUnitChange}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded bg-white text-black text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            >
              {currentUnits.map((unit: string) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>

          {/* To Section */}
          <div>
            <label className="block text-black font-medium mb-1 sm:mb-2 text-sm sm:text-base">
              To:
            </label>
            <input
              type="number"
              value={toValue}
              onChange={handleToValueChange}
              placeholder="Converted value"
              className="w-full p-2 sm:p-3 border border-gray-300 rounded bg-white text-black mb-2 sm:mb-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <select
              value={toUnit}
              onChange={handleToUnitChange}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded bg-white text-black text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            >
              {currentUnits.map((unit: string) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Conversion Info */}
        {fromValue && toValue && (
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white border border-gray-300 rounded">
            <p className="text-black text-sm sm:text-base">
              <span className="font-semibold">
                {fromValue} {fromUnit}
              </span>{" "}
              =
              <span className="font-semibold text-black">
                {" "}
                {toValue} {toUnit}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnitConverter;
