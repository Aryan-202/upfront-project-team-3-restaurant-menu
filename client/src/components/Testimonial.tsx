const testimonialImages = [
  { src: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=200&h=140&fit=crop', style: 'w-[140px] h-[100px] mt-10' },
  { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=200&h=160&fit=crop', style: 'w-[140px] h-[120px]' },
  { src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200&h=160&fit=crop', style: 'w-[140px] h-[130px]' },
  { src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=200&h=140&fit=crop', style: 'w-[140px] h-[100px]' },
];

export default function Testimonial() {
  return (
    <section className="bg-[#E07B2A] py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left: Quote */}
        <div className="flex-1">
          <div className="text-white/40 text-6xl font-serif leading-none mb-3">"</div>
          <p className="font-serif text-[#fff4e8] text-lg md:text-xl leading-relaxed mb-7">
            I love Unicuisine because it allows me to show my daughters how to reduce our environmental
            footprint. I love getting them involved in selecting our products so that they can see how we
            can reduce waste. Every order is a source of pride, and the savings are extraordinary!
          </p>

          {/* User + Controls */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/40 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
                alt="Brooklyn Simmons"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-white text-sm">Brooklyn Simmons</p>
              <p className="text-white/60 text-xs">Phoenix, AZ 85044</p>
            </div>
            <div className="ml-3 flex gap-2">
              <button className="w-8 h-8 rounded-full bg-white/20 border border-white/30 text-white text-base flex items-center justify-center hover:bg-white/30 transition-colors duration-150">
                ‹
              </button>
              <button className="w-8 h-8 rounded-full bg-[#1B4332] text-white text-base flex items-center justify-center hover:bg-[#2D6A4F] transition-colors duration-150">
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Right: Photo collage */}
        <div className="hidden md:flex gap-3 flex-shrink-0">
          <div className="flex flex-col gap-3">
            <img src={testimonialImages[0].src} alt="Food" className={`${testimonialImages[0].style} rounded-2xl object-cover`} />
            <img src={testimonialImages[1].src} alt="Food" className={`${testimonialImages[1].style} rounded-2xl object-cover`} />
          </div>
          <div className="flex flex-col gap-3">
            <img src={testimonialImages[2].src} alt="Food" className={`${testimonialImages[2].style} rounded-2xl object-cover`} />
            <img src={testimonialImages[3].src} alt="Food" className={`${testimonialImages[3].style} rounded-2xl object-cover`} />
          </div>
        </div>
      </div>
    </section>
  );
}
