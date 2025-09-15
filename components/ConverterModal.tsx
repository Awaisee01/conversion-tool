'use client';

import { useState, useEffect } from 'react';
import { X, ArrowUpDown, Copy, Check } from 'lucide-react';
import { Converter, ConversionUnit } from '@/types/converter';
import { convertValue, formatNumber } from '@/lib/conversion-utils';

interface ConverterModalProps {
  converter: Converter;
  onClose: () => void;
}

export default function ConverterModal({ converter, onClose }: ConverterModalProps) {
  const [inputValue, setInputValue] = useState('1');
  const [fromUnit, setFromUnit] = useState(converter.units[0]);
  const [toUnit, setToUnit] = useState(converter.units[1] || converter.units[0]);
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue)) {
      const convertedValue = convertValue(numericValue, fromUnit, toUnit, converter.precision || 6);
      setResult(formatNumber(convertedValue, converter.precision || 6));
    } else {
      setResult('0');
    }
  }, [inputValue, fromUnit, toUnit, converter.precision]);

  const handleSwapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onKeyDown={handleKeyPress}
      tabIndex={-1}
    >
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{converter.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{converter.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Input Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">From</label>
              <div className="relative">
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-lg"
                  placeholder="Enter value"
                />
                <select
                  value={`${fromUnit.name}|${fromUnit.symbol}`}
                  onChange={(e) => {
                    const [name, symbol] = e.target.value.split('|');
                    const unit = converter.units.find(u => u.name === name && u.symbol === symbol);
                    if (unit) setFromUnit(unit);
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 border-0 text-sm rounded px-2 py-1 focus:ring-1 focus:ring-gray-400"
                >
                  {converter.units.map((unit) => (
                    <option key={`${unit.name}|${unit.symbol}`} value={`${unit.name}|${unit.symbol}`}>
                      {unit.symbol || unit.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">To</label>
              <div className="relative">
                <input
                  type="text"
                  value={result}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-lg font-mono"
                />
                <select
                  value={`${toUnit.name}|${toUnit.symbol}`}
                  onChange={(e) => {
                    const [name, symbol] = e.target.value.split('|');
                    const unit = converter.units.find(u => u.name === name && u.symbol === symbol);
                    if (unit) setToUnit(unit);
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 border-0 text-sm rounded px-2 py-1 focus:ring-1 focus:ring-gray-400"
                >
                  {converter.units.map((unit) => (
                    <option key={`${unit.name}|${unit.symbol}`} value={`${unit.name}|${unit.symbol}`}>
                      {unit.symbol || unit.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleSwapUnits}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ArrowUpDown className="h-4 w-4" />
              <span className="text-sm font-medium">Swap</span>
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              <span className="text-sm font-medium">{copied ? 'Copied!' : 'Copy Result'}</span>
            </button>
          </div>

          {/* Conversion Formula */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Conversion Formula</h3>
            <p className="text-sm text-gray-600 font-mono">
              {inputValue} {fromUnit.symbol} = {result} {toUnit.symbol}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              1 {fromUnit.symbol} = {formatNumber(convertValue(1, fromUnit, toUnit, converter.precision || 6), converter.precision || 6)} {toUnit.symbol}
            </p>
          </div>

          {/* Quick Conversions */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">Quick Conversions ({fromUnit.symbol} to {toUnit.symbol})</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              {[1, 5, 10, 25, 50, 100, 500, 1000].map((value) => {
                const converted = convertValue(value, fromUnit, toUnit, converter.precision || 6);
                return (
                  <div key={value} className="bg-white border rounded p-2 text-center">
                    <div className="font-medium text-gray-900">{value}</div>
                    <div className="text-gray-600">{formatNumber(converted, 4)}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* All Available Units */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">All Available Units</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
              {converter.units.map((unit) => (
                <div key={`${unit.name}|${unit.symbol}`} className="bg-white border rounded p-2">
                  <div className="font-medium text-gray-900">{unit.name}</div>
                  <div className="text-gray-600">{unit.symbol}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}