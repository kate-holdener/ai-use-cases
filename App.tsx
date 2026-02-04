
import React, { useState, useMemo } from 'react';
import { USE_CASES } from './data';
import { UseCaseCard } from './components/UseCaseCard';
import { Badge } from './components/Badge';
import { CategoryExplorer } from './components/CategoryExplorer';

type ViewMode = 'explorer' | 'grid';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('explorer');

  // Derived categories from data
  const categories = useMemo(() => {
    const cats = new Set<string>();
    USE_CASES.forEach(uc => uc.categories.forEach(c => cats.add(c)));
    return Array.from(cats).sort();
  }, []);

  // Filtering logic
  const filteredUseCases = useMemo(() => {
    return USE_CASES.filter(uc => {
      const matchesSearch = 
        uc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uc.faculty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uc.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory ? uc.categories.includes(selectedCategory) : true;
      const matchesTool = selectedTool ? uc.tools.includes(selectedTool) : true;

      return matchesSearch && matchesCategory && matchesTool;
    });
  }, [searchQuery, selectedCategory, selectedTool]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedTool(null);
  };

  const isFiltering = searchQuery || selectedCategory || selectedTool;

  console.log("here")
  return (
    <div className="min-h-screen pb-20 selection:bg-indigo-100">
      {/* Header Section */}
      <header className="bg-white border-b border-slate-200 pt-12 pb-20 relative overflow-hidden">
        {/* Decorative background - added pointer-events-none to prevent blocking clicks */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-50/50 skew-x-12 -mr-20 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              GenAI <span className="text-indigo-600"> in Higher Ed Case Studies</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Explore how educators are leveraging generative artificial intelligence to enhance curriculum design, personalize learning, and streamline administrative workflows.
            </p>
          </div>

          {/* Search and Filters Bar - Only visible in Search Grid mode */}
          {viewMode === 'grid' && (
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 flex flex-col md:flex-row items-center gap-4 max-w-5xl animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="relative flex-grow w-full">
                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <input 
                  type="text"
                  placeholder="Search by title, faculty, or content..."
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all text-slate-800 placeholder-slate-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2 w-full md:w-auto overflow-x-auto no-scrollbar py-2 md:py-0 px-2 md:px-0">
                 <select 
                  value={selectedCategory || ''}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                  className="bg-slate-50 border-none rounded-xl px-4 py-3 text-slate-700 text-sm focus:ring-2 focus:ring-indigo-500 min-w-[160px] cursor-pointer"
                 >
                   <option value="">All Categories</option>
                   {categories.map(cat => (
                     <option key={cat} value={cat}>{cat}</option>
                   ))}
                 </select>
              </div>

              {(isFiltering) && (
                <button 
                  onClick={resetFilters}
                  className="text-slate-500 hover:text-indigo-600 text-sm font-medium px-4 py-2 transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  <i className="fa-solid fa-rotate-left"></i>
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 -mt-10 relative z-20">
        
        {/* Active Filters Display */}
        {isFiltering && (
          <div className="flex flex-wrap items-center gap-3 mb-8 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-100 shadow-sm inline-flex">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider pl-2">Active Filters:</span>
            {selectedCategory && (
              <Badge variant="primary" onClick={() => setSelectedCategory(null)}>
                Category: {selectedCategory} <i className="fa-solid fa-xmark ml-1.5 opacity-60"></i>
              </Badge>
            )}
            {selectedTool && (
              <Badge variant="outline" onClick={() => setSelectedTool(null)}>
                Tool: {selectedTool} <i className="fa-solid fa-xmark ml-1.5 opacity-60"></i>
              </Badge>
            )}
            {searchQuery && (
              <Badge variant="secondary" onClick={() => setSearchQuery('')}>
                Search: "{searchQuery}" <i className="fa-solid fa-xmark ml-1.5 opacity-60"></i>
              </Badge>
            )}
          </div>
        )}

        {/* View Switcher and Results Counter */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 relative z-30">
          <p className="text-slate-500 font-medium bg-white/50 px-4 py-2 rounded-full border border-slate-100 backdrop-blur-sm">
            Showing <span className="text-slate-900 font-bold">{filteredUseCases.length}</span> results
          </p>
          
          <div className="bg-white p-1.5 rounded-2xl shadow-lg border border-slate-200 flex gap-1.5">
            <button 
              onClick={() => setViewMode('explorer')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${viewMode === 'explorer' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
            >
              <i className="fa-solid fa-layer-group"></i>
              Category Explorer
            </button>
            <button 
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${viewMode === 'grid' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
            >
              <i className="fa-solid fa-grip"></i>
              Search Grid
            </button>
          </div>
        </div>

        {/* Dynamic View Content */}
        <div className="relative z-10">
          {filteredUseCases.length > 0 ? (
            viewMode === 'explorer' ? (
              <CategoryExplorer 
                useCases={filteredUseCases} 
                onToolClick={(tool) => { setSelectedTool(tool); setViewMode('grid'); }}
                onCategoryClick={(cat) => { setSelectedCategory(cat); setViewMode('grid'); }}
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-in fade-in duration-500">
                {filteredUseCases.map((uc) => (
                  <UseCaseCard 
                    key={uc.id} 
                    useCase={uc} 
                    onToolClick={(tool) => setSelectedTool(tool)}
                    onCategoryClick={(cat) => setSelectedCategory(cat)}
                  />
                ))}
              </div>
            )
          ) : (
            <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 py-20 px-6 text-center max-w-xl mx-auto shadow-sm">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                <i className="fa-solid fa-face-sad-tear text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">No results found</h3>
              <p className="text-slate-500 mb-6">We couldn't find any use cases matching your current filters. Try adjusting your search terms or clearing categories.</p>
              <button 
                onClick={resetFilters}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-8 rounded-xl transition-all shadow-xl shadow-indigo-100 active:scale-95"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Stats / Footer Area */}
      <footer className="mt-20 border-t border-slate-200 py-16 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-5">
              <div className="bg-indigo-600 p-3 rounded-2xl shadow-lg shadow-indigo-100">
                <i className="fa-solid fa-brain text-white text-2xl"></i>
              </div>
              <div>
                <h4 className="font-extrabold text-xl text-slate-900">GenAI Education Collective</h4>
                <p className="text-slate-500">Empowering faculty through shared innovation.</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-10 md:gap-16">
               <div className="text-center">
                 <p className="text-3xl font-black text-indigo-600">{USE_CASES.length}</p>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Case Studies</p>
               </div>
               <div className="text-center">
                 <p className="text-3xl font-black text-indigo-600">{categories.length}</p>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Categories</p>
               </div>
               <div className="text-center">
                 <p className="text-3xl font-black text-indigo-600">{Array.from(new Set(USE_CASES.map(u => u.faculty))).length}</p>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Contributors</p>
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
