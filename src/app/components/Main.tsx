import { useState } from 'react';
import { characterOptions } from '../data/character-options';

export default function Main() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});

  const toggleSection = (label: string) => {
    setOpenSection(openSection === label ? null : label);
  };

  const toggleOption = (label: string, option: string) => {
    setSelectedOptions(prev => {
      const current = prev[label] || [];
      if (current.includes(option)) {
        return { ...prev, [label]: current.filter(item => item !== option) };
      } else {
        return { ...prev, [label]: [...current, option] };
      }
    });
  };

  const removeOption = (label: string, option: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [label]: prev[label].filter(item => item !== option)
    }));
  };

  return (
    <div className="space-y-4">
      {characterOptions.map((option) => (
        <div key={option.label} className="bg-gray-800 p-4 rounded-md text-white">
          <button
            onClick={() => toggleSection(option.label)}
            className="w-full text-left font-bold mb-2 flex justify-between items-center"
          >
            <span>{option.label}</span>
            <span>{openSection === option.label ? '▲' : '▼'}</span>
          </button>
          {openSection === option.label && (
            <div className="mt-2 space-y-2">
              {option.options.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleOption(option.label, item)}
                  className={`w-full text-left p-2 rounded transition-all ${
                    selectedOptions[option.label]?.includes(item)
                      ? 'bg-blue-600'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="mt-4">
        <h3 className="font-bold mb-2">Selected Options:</h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(selectedOptions).flatMap(([label, options]) =>
            options.map(option => (
              <div key={`${label}-${option}`} className="bg-blue-600 text-white px-3 py-1 rounded-full flex items-center">
                <span>{option}</span>
                <button
                  onClick={() => removeOption(label, option)}
                  className="ml-2 focus:outline-none"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="mt-6 space-x-4 w-60 m-auto">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Randomize
        </button>
        <button
          onClick={() => setSelectedOptions({})}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}