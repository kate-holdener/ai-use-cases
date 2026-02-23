
import React from 'react';
import { UseCase } from '../types';
import { Badge } from './Badge';

interface UseCaseCardProps {
  useCase: UseCase;
  onToolClick: (tool: string) => void;
  onCategoryClick: (cat: string) => void;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({ useCase, onToolClick, onCategoryClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-wrap gap-2">
            {useCase.categories.map(cat => (
              <Badge key={cat} variant="primary" onClick={() => onCategoryClick(cat)}>
                {cat}
              </Badge>
            ))}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
          {useCase.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {useCase.description}
        </p>
      </div>
      
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {useCase.tools.map(tool => (
            <Badge key={tool} variant="outline" onClick={() => onToolClick(tool)}>
              #{tool}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
