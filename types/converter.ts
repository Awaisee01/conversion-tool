export interface ConversionUnit {
  name: string;
  symbol: string;
  factor: number; // Conversion factor to base unit
  offset?: number; // For temperature conversions
}

export interface Converter {
  id: string;
  name: string;
  description: string;
  category: string;
  baseUnit: string;
  units: ConversionUnit[];
  precision?: number;
}

export interface ConversionResult {
  value: number;
  unit: ConversionUnit;
  formatted: string;
}