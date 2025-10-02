import React from "react";

interface Feature {
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  features: Feature[];
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  const getBgColor = (index: number) => {
    const colors = [
      "bg-orange-100", 
      "bg-pink-100",   
      "bg-blue-100",   
      "bg-cyan-100"    
    ];
    return colors[index % colors.length];
  };

  const getMarginTop = (index: number) => {
    if (index % 2 === 0) return "mt-0";
    return "mt-12 lg:mt-16";
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${getMarginTop(index)} transition-all duration-300`}
          >
            <div
              className={`${getBgColor(index)} p-8 rounded-3xl min-h-[340px] relative overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 group`}
            >
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-gray-900 text-base font-semibold leading-tight mb-6 transform -rotate-1">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed opacity-80">
                  {feature.description}
                </p>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}