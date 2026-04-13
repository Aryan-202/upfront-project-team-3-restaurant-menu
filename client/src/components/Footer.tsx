const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="#6b9e7b" />
  </svg>
);
const MapIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#6b9e7b" />
  </svg>
);
const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#6b9e7b" />
  </svg>
);

const FooterLink = ({ children }) => (
  <a href="#" className="text-[#a8c5b0] text-sm hover:text-white transition-colors duration-150">
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] pt-14 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-[15px] mb-5">Contact</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#a8c5b0] text-sm">
                <PhoneIcon />
                602-774-4735
              </div>
              <div className="flex items-start gap-2 text-[#a8c5b0] text-sm">
                <MapIcon />
                <span>11022 South 51st Street Suite 105, Phoenix, AZ 85044</span>
              </div>
              <div className="flex items-center gap-2 text-[#a8c5b0] text-sm">
                <MailIcon />
                hi@unicuisine.co
              </div>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-white font-semibold text-[15px] mb-5">Navigate</p>
            <div className="flex flex-col gap-3">
              {['Home', 'Menu', 'About', 'Contact', 'Book Now'].map((item) => (
                <FooterLink key={item}>{item}</FooterLink>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <p className="text-white font-semibold text-[15px] mb-5">Menu</p>
            <div className="flex flex-col gap-3">
              {['Breakfast', 'Lunch', 'Dinner'].map((item) => (
                <FooterLink key={item}>{item}</FooterLink>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-white font-semibold text-[15px] mb-5">Follow Us</p>
            <div className="flex flex-col gap-3">
              {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map((item) => (
                <FooterLink key={item}>{item}</FooterLink>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#6b9e7b] text-xs">©2025 Unicuisine. All rights reserved.</p>
          <div className="flex gap-6">
            {['License', 'Changelog', 'Style Guide'].map((item) => (
              <a key={item} href="#" className="text-[#6b9e7b] text-xs hover:text-white transition-colors duration-150">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
