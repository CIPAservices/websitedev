"use client"

export default function Ourstory() {
  return(
<section className="w-full  py-10 px-4">
  <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
    Our Story
  </h2>

  <div className="max-w-6xl mx-auto border border-amber-400 rounded-lg p-6 space-y-3">
    {/* Placeholder bars */}
    <div className="h-4 bg-gray-300 rounded"></div>
    <div className="h-4 bg-gray-300 rounded"></div>
    <div className="h-4 bg-gray-300 rounded"></div>
    <div className="h-4 bg-gray-300 rounded"></div>
    <div className="h-4 bg-gray-300 rounded"></div>
    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    <div className="h-4 bg-gray-300 rounded w-4/6"></div>
  </div>
</section>

  );
}