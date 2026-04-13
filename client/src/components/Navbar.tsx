import { useState } from 'react';

const navLinks = ['Home', 'Menu', 'About', 'Contact'];

export default function Navbar() {
  const [active, setActive] = useState('Menu');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F9F5EE]/95 backdrop-blur-md border-b border-[#e0d8c8]">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1B4332] rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8 2 5 5.5 5 9c0 4 3 7 7 7s7-3 7-7c0-3.5-3-7-7-7z" fill="white" opacity="0.9" />
              <path d="M8 21h8M12 16v5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-serif text-[#1B4332] text-lg font-semibold tracking-wide">Unicuisine</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActive(link)}
              className={`text-sm font-medium transition-colors duration-200 ${
                active === link
                  ? 'text-[#1B4332] border-b-2 border-[#1B4332] pb-0.5'
                  : 'text-gray-500 hover:text-[#1B4332]'
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Phone CTA */}
        <button className="hidden md:flex items-center gap-2 border-2 border-[#1B4332] text-[#1B4332] px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[#1B4332] hover:text-white">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="currentColor" />
          </svg>
          (890) 555-0111
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#1B4332]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen
              ? <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              : <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F9F5EE] border-t border-[#e0d8c8] px-6 pb-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => { setActive(link); setMenuOpen(false); }}
              className={`block w-full text-left py-3 text-sm font-medium border-b border-[#e0d8c8] ${
                active === link ? 'text-[#1B4332]' : 'text-gray-500'
              }`}
            >
              {link}
            </button>
          ))}
          <button className="mt-4 w-full flex items-center justify-center gap-2 border-2 border-[#1B4332] text-[#1B4332] px-5 py-2 rounded-full text-sm font-medium">
            (890) 555-0111
          </button>
        </div>
      )}
    </nav>
  );
}
