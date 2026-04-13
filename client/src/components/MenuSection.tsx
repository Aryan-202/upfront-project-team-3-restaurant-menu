import MenuCard from './MenuCard';

export default function MenuSection({ title, icon, items, bg }) {
  const leftItems  = items.slice(0, 4);
  const rightItems = items.slice(4, 8);

  return (
    <section className={`${bg} py-16`}>
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-3xl mb-2">{icon}</div>
          <h2 className="font-serif text-[#1B4332] text-3xl md:text-4xl">{title}</h2>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          {/* Left column */}
          <div>
            {leftItems.map((item, i) => (
              <div key={item.id}>
                {i > 0 && <hr className="border-0 border-t-[1.5px] border-dotted border-[#c8bfad]" />}
                <MenuCard item={item} />
              </div>
            ))}
          </div>

          {/* Right column */}
          <div>
            {rightItems.map((item, i) => (
              <div key={item.id}>
                {i > 0 && <hr className="border-0 border-t-[1.5px] border-dotted border-[#c8bfad]" />}
                <MenuCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-7 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[#2D6A4F] hover:-translate-y-0.5 active:scale-95">
            Book a Table
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M8 2v3M16 2v3M3 8h18M5 4h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
