import React from 'react';

interface ExternalResource {
  title: string;
  description: string;
  url: string;
  source: string;
}

const RESOURCES: ExternalResource[] = [
  {
    title: "ACM GenAI Task Force - Approaches",
    description: "A collection of tools and use cases for teaching computer science with the help of GenAI, maintained by the ACM task force on GenAI and Student Programming Assessment.",
    url: "https://acm-education-genai-task-force.github.io/approaches.html",
    source: "ACM"
  }
];

export const ExternalResources: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-12 relative z-10">
      {/* Section Divider/Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px bg-slate-200 flex-grow"></div>
        <h2 className="text-2xl font-bold text-slate-800 text-center">External Collections & Resources</h2>
        <div className="h-px bg-slate-200 flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {RESOURCES.map((resource, index) => (
          <a 
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
                {resource.source}
              </span>
              <i className="fa-solid fa-arrow-up-right-from-square text-slate-400 group-hover:text-indigo-500 transition-colors"></i>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
              {resource.title}
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              {resource.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};
