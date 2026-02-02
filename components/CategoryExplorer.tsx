
import React, { useState } from 'react';
import { UseCase } from '../types';
import { UseCaseCard } from './UseCaseCard';

interface CategoryExplorerProps {
  useCases: UseCase[];
  onTagClick: (tag: string) => void;
  onCategoryClick: (cat: string) => void;
}

export const CategoryExplorer: React.FC<CategoryExplorerProps> = ({ useCases, onTagClick, onCategoryClick }) => {
  const [expandedMajor, setExpandedMajor] = useState<string | null>(null);

  // Grouping logic - Fix: Explicitly define type as string[] to avoid 'unknown' inference in the map block
  const majorCategories: string[] = Array.from(
    new Set(useCases.map(uc => uc.categories[0]).filter((c): c is string => typeof c === 'string'))
  ).sort();

  const toggleMajor = (major: string) => {
    setExpandedMajor(expandedMajor === major ? null : major);
  };

  return (
    <div className="space-y-4">
      {majorCategories.map(major => {
        const itemsInMajor = useCases.filter(uc => uc.categories[0] === major);
        const isExpanded = expandedMajor === major;

        // Sub-grouping within this major category
        const subGroups: Record<string, UseCase[]> = {};
        const standaloneItems: UseCase[] = [];

        itemsInMajor.forEach(uc => {
          if (uc.categories.length > 1) {
            const sub = uc.categories[1];
            if (!subGroups[sub]) subGroups[sub] = [];
            subGroups[sub].push(uc);
          } else {
            standaloneItems.push(uc);
          }
        });

        const subNames = Object.keys(subGroups).sort();

        return (
          <div key={major} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button 
              onClick={() => toggleMajor(major)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isExpanded ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600'}`}>
                   <i className={`fa-solid ${isExpanded ? 'fa-folder-open' : 'fa-folder'}`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{major}</h3>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    {itemsInMajor.length} {itemsInMajor.length === 1 ? 'Use Case' : 'Use Cases'}
                  </p>
                </div>
              </div>
              <i className={`fa-solid fa-chevron-down text-slate-300 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-indigo-500' : ''}`}></i>
            </button>

            {isExpanded && (
              <div className="px-6 pb-6 pt-2 bg-slate-50/30 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
                
                {/* Render Sub-categories */}
                {subNames.length > 0 && (
                  <div className="space-y-8 mt-4">
                    {subNames.map(sub => (
                      <div key={sub} className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="h-px bg-slate-200 flex-grow"></div>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 bg-slate-100 rounded-full py-0.5">
                            {sub}
                          </span>
                          <div className="h-px bg-slate-200 flex-grow"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {subGroups[sub].map(uc => (
                            <UseCaseCard 
                              key={uc.id} 
                              useCase={uc} 
                              onTagClick={onTagClick} 
                              onCategoryClick={onCategoryClick} 
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Render items that don't have a sub-category */}
                {standaloneItems.length > 0 && (
                  <div className="mt-8 space-y-4">
                    {subNames.length > 0 && (
                       <div className="flex items-center gap-3">
                        <div className="h-px bg-slate-200 flex-grow"></div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 bg-slate-100 rounded-full py-0.5">
                          Other Use Cases
                        </span>
                        <div className="h-px bg-slate-200 flex-grow"></div>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {standaloneItems.map(uc => (
                        <UseCaseCard 
                          key={uc.id} 
                          useCase={uc} 
                          onTagClick={onTagClick} 
                          onCategoryClick={onCategoryClick} 
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
