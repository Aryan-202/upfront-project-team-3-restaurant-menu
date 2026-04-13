const cultureImages = [
  { src: 'https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=300&h=220&fit=crop', w: 'w-[200px]' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=220&fit=crop', w: 'w-[240px]' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=220&fit=crop', w: 'w-[180px]' },
  { src: 'https://images.unsplash.com/photo-1607877361964-83b9c2f52b6a?w=300&h=220&fit=crop', w: 'w-[260px]' },
  { src: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=300&h=220&fit=crop', w: 'w-[200px]' },
  { src: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=300&h=220&fit=crop', w: 'w-[180px]' },
];

export default function Culture() {
  return (
    <section className="py-16 bg-[#F9F5EE]">
      <div className="text-center mb-10 px-6">
        <h2 className="font-serif text-[#1B4332] text-3xl md:text-4xl">Our Culture</h2>
        <p className="text-gray-400 text-sm mt-2">Behind every dish, a story of passion</p>
      </div>

      {/* Scrollable gallery */}
      <div className="flex gap-3 overflow-x-auto px-6 pb-2 max-w-6xl mx-auto scrollbar-hide"
           style={{ scrollbarWidth: 'none' }}>
        {cultureImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`Culture ${i + 1}`}
            className={`${img.w} h-[150px] flex-shrink-0 rounded-2xl object-cover transition-transform duration-300 hover:scale-[1.03] cursor-pointer`}
          />
        ))}
      </div>
    </section>
  );
}
