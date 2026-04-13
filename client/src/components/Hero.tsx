const heroImages = [
  { src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200&h=140&fit=crop', size: 'small', zIndex: 'z-10' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=220&h=150&fit=crop', size: 'medium', zIndex: 'z-20' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=280&h=200&fit=crop', size: 'large', zIndex: 'z-30' },
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=220&h=150&fit=crop', size: 'medium', zIndex: 'z-20' },
  { src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=200&h=140&fit=crop', size: 'small', zIndex: 'z-10' },
];

const sizeMap = {
  small:  { width: 'w-[130px]', height: 'h-[90px]' },
  medium: { width: 'w-[155px]', height: 'h-[105px]' },
  large:  { width: 'w-[220px]', height: 'h-[150px]' },
};

export default function Hero() {
  return (
    <section className="text-center pt-14 pb-10 px-6">
      <p className="text-xs tracking-[3px] text-[#1B4332] uppercase font-medium mb-4">
        Welcome to Unicuisine
      </p>
      <h1 className="font-serif text-[#1B4332] text-4xl md:text-5xl lg:text-6xl leading-tight max-w-xl mx-auto mb-14">
        Dive Into Delicious<br />Meal Dishes
      </h1>

      {/* Gallery */}
      <div className="flex items-center justify-center max-w-4xl mx-auto">
        {heroImages.map((img, i) => {
          const { width, height } = sizeMap[img.size];
          const overlap = i > 0 ? '-ml-3' : '';
          return (
            <div
              key={i}
              className={`relative ${img.zIndex} ${overlap} transition-transform duration-300 hover:scale-105 hover:z-40`}
            >
              <img
                src={img.src}
                alt={`Food ${i + 1}`}
                className={`${width} ${height} rounded-2xl object-cover shadow-lg`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
