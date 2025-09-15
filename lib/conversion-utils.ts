import { ConversionUnit } from '@/types/converter';

export function convertValue(value: number, fromUnit: ConversionUnit, toUnit: ConversionUnit, precision: number = 6): number {
  // Special handling for temperature conversions
  if (fromUnit.offset !== undefined || toUnit.offset !== undefined) {
    return convertTemperature(value, fromUnit, toUnit);
  }
  
  // Standard conversion using factors
  const baseValue = value * fromUnit.factor;
  const convertedValue = baseValue / toUnit.factor;
  
  return parseFloat(convertedValue.toPrecision(precision));
}

function convertTemperature(value: number, fromUnit: ConversionUnit, toUnit: ConversionUnit): number {
  // Convert to Celsius first
  let celsius: number;
  
  if (fromUnit.symbol === '°C') {
    celsius = value;
  } else if (fromUnit.symbol === '°F') {
    celsius = (value - 32) / 1.8;
  } else if (fromUnit.symbol === 'K') {
    celsius = value - 273.15;
  } else if (fromUnit.symbol === '°R') {
    celsius = (value - 491.67) / 1.8;
  } else {
    celsius = value;
  }
  
  // Convert from Celsius to target unit
  if (toUnit.symbol === '°C') {
    return celsius;
  } else if (toUnit.symbol === '°F') {
    return celsius * 1.8 + 32;
  } else if (toUnit.symbol === 'K') {
    return celsius + 273.15;
  } else if (toUnit.symbol === '°R') {
    return (celsius + 273.15) * 1.8;
  } else {
    return celsius;
  }
}

export function formatNumber(value: number, precision: number = 6): string {
  // Handle very small numbers
  if (Math.abs(value) < Math.pow(10, -precision)) {
    return value.toExponential(2);
  }
  
  // Handle very large numbers
  if (Math.abs(value) >= Math.pow(10, precision + 3)) {
    return value.toExponential(2);
  }
  
  // Remove trailing zeros and unnecessary decimal point
  const fixed = parseFloat(value.toPrecision(precision));
  
  // Format with appropriate decimal places
  if (fixed === Math.floor(fixed)) {
    return fixed.toString();
  } else {
    return fixed.toString();
  }
}

// Special conversion functions for complex units
export function convertNumberBase(value: string, fromBase: number, toBase: number): string {
  try {
    const decimalValue = parseInt(value, fromBase);
    if (isNaN(decimalValue)) return '0';
    return decimalValue.toString(toBase).toUpperCase();
  } catch {
    return '0';
  }
}

export function convertCase(text: string, caseType: string): string {
  switch (caseType) {
    case 'UPPER':
      return text.toUpperCase();
    case 'lower':
      return text.toLowerCase();
    case 'Title':
      return text.replace(/\w\S*/g, (txt) => 
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
    case 'Sentence':
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    case 'camel':
      return text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
        index === 0 ? word.toLowerCase() : word.toUpperCase()
      ).replace(/\s+/g, '');
    case 'Pascal':
      return text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => 
        word.toUpperCase()
      ).replace(/\s+/g, '');
    case 'snake':
      return text.replace(/\W+/g, ' ')
        .split(/ |\B(?=[A-Z])/)
        .map(word => word.toLowerCase())
        .join('_');
    case 'kebab':
      return text.replace(/\W+/g, ' ')
        .split(/ |\B(?=[A-Z])/)
        .map(word => word.toLowerCase())
        .join('-');
    default:
      return text;
  }
}