'use client';

import { useState } from 'react';
import { Search, Calculator, Zap, Thermometer, Ruler, Droplets, ArrowUpDown } from 'lucide-react';
import { converters } from '@/lib/converters';
import ConverterModal from '@/components/ConverterModal';
import { Converter } from '@/types/converter';
import Footer from './Footer';
import Header from './Header';
import UnitConverter from './Unit';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedConverter, setSelectedConverter] = useState<Converter | null>(null);

  const categories = [
    { id: 'all', name: 'All Tools', icon: Calculator },
    { id: 'common', name: 'Common', icon: ArrowUpDown },
    { id: 'engineering', name: 'Engineering', icon: Zap },
    { id: 'heat', name: 'Heat & Thermal', icon: Thermometer },
    { id: 'fluids', name: 'Fluids', icon: Droplets },
    { id: 'light', name: 'Light', icon: Zap },
    { id: 'electricity', name: 'Electricity', icon: Zap },
    { id: 'magnetism', name: 'Magnetism', icon: Zap },
    { id: 'radiology', name: 'Radiology', icon: Zap },
    { id: 'other', name: 'Other', icon: Calculator },
  ];

  const filteredConverters = converters.filter(converter => {
    const matchesSearch =
      converter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      converter.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || converter.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'common': return Ruler;
      case 'engineering': return Zap;
      case 'heat': return Thermometer;
      case 'fluids': return Droplets;
      case 'light': return Zap;
      case 'electricity': return Zap;
      case 'magnetism': return Zap;
      case 'radiology': return Zap;
      case 'other': return Calculator;
      default: return Calculator;
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header */}
       <Header/>

          <div className='mt-32 px-4'>

       <UnitConverter/>

       </div>
        {/* Main content */}
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search + Filters */}
          <div className="mb-8">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search converters..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white text-gray-900"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Converter Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredConverters.map((converter) => {
              const Icon = getIconForCategory(converter.category);
              return (
                <div
                  key={converter.id}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all cursor-pointer group"
                  onClick={() => setSelectedConverter(converter)}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-900 group-hover:text-white transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">{converter.name}</h3>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">{converter.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {converter.category.replace('-', ' ')}
                    </span>
                    <ArrowUpDown className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>

          {filteredConverters.length === 0 && (
            <div className="text-center py-12">
              <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No converters found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          )}

         
        </main>

      <Footer/>
      </div>

      {/* Converter Modal */}
      {selectedConverter && (
        <ConverterModal
          converter={selectedConverter}
          onClose={() => setSelectedConverter(null)}
        />
      )}
    </>
  );
}
