'use client';

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { ChevronDown, Menu, X, Mail, Globe, Type, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import sparkPointLogo from 'figma:asset/35bb889d1f4d0b05ae6753439b58199640858447.png';

interface DropdownItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const menuItems: MenuItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Mission', href: '/mission' },
  { label: 'Stories', href: '/stories' },
  { label: 'Impact', href: '/impact' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 50;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  // Filter links for Desktop Center Nav (Option A)
  const desktopCenterLinks = menuItems.filter(item => 
    ['Mission', 'Stories', 'Impact'].includes(item.label)
  );

  return (
    <>
      {/* Desktop Header (lg+) */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.45, 0, 0.55, 1] }}
        className="fixed top-0 left-0 right-0 z-50 hidden lg:block"
        style={{
          background: 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(24px)',
          boxShadow: isScrolled ? '0px 4px 8px rgba(0, 0, 0, 0.08)' : '0px 1px 2px rgba(0, 0, 0, 0.05)',
          borderBottom: isScrolled ? '1px solid rgba(224, 54, 148, 0.15)' : '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 250ms ease-in-out',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
          {/* Left: Logo (Scaled down ~20%) */}
          <Link
            to="/"
            className="flex items-center transition-opacity hover:opacity-80 shrink-0"
          >
            <img
              src={sparkPointLogo}
              alt="SparkPoint"
              className="h-14 w-auto" 
            />
          </Link>

          {/* Center: Curated Links */}
          <nav className="hidden xl:flex items-center gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {desktopCenterLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href!}
                className="relative group py-2"
                style={{
                  color: '#1a1a1a',
                  fontSize: '15px',
                  fontWeight: '600',
                  letterSpacing: '0.01em',
                }}
              >
                {item.label}
                <span
                  className="absolute left-0 bottom-0 h-0.5 transition-all duration-300 ease-in-out"
                  style={{
                    background: 'linear-gradient(90deg, #E03694 0%, #FDB515 100%)',
                    width: location.pathname === item.href ? '100%' : '0',
                    opacity: location.pathname === item.href ? 1 : 0,
                  }}
                />
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#E03694]/50 group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>

          {/* Right: Donate + Utilities + Menu */}
          <div className="flex items-center gap-4">
            <Button
              size="sm"
              className="px-6 rounded-full transition-all hover:brightness-105 hover:scale-105 shadow-md hover:shadow-lg"
              style={{
                backgroundColor: '#E03694',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600',
              }}
              onClick={() => {
                window.location.href = 'https://www.yoursparkpoint.org/donations';
              }}
            >
              Donate
            </Button>

            <div className="h-6 w-px bg-gray-300 mx-1 hidden xl:block" />

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 text-gray-600 hover:text-[#E03694] hover:bg-[#E03694]/10 rounded-full"
                onClick={() => {
                  window.location.href = 'https://www.yoursparkpoint.org/newsletter';
                }}
              >
                <Mail size={18} />
              </Button>

              <button
                onClick={() => setLanguage(language === 'EN' ? 'ES' : 'EN')}
                className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 hover:text-[#E03694] hover:bg-[#E03694]/10 transition-colors font-bold text-xs"
              >
                {language}
              </button>

              <button
                className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 hover:text-[#E03694] hover:bg-[#E03694]/10 transition-colors"
                aria-label="Accessibility settings"
              >
                <Type size={18} />
              </button>
            </div>

            <Button
              variant="ghost"
              className="ml-2 gap-2 pl-3 pr-4 py-2 h-auto rounded-full hover:bg-black/5 text-gray-800"
              onClick={() => setMobileOpen(true)}
            >
              <div className="flex flex-col gap-1 items-end justify-center w-5">
                <span className="w-5 h-0.5 bg-current rounded-full" />
                <span className="w-3 h-0.5 bg-current rounded-full" />
                <span className="w-5 h-0.5 bg-current rounded-full" />
              </div>
              <span className="font-semibold text-sm tracking-wide">Menu</span>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Header (lg-) */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.45, 0, 0.55, 1] }}
        className="fixed top-0 left-0 right-0 z-50 lg:hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(20px)',
          boxShadow: isScrolled ? '0px 4px 8px rgba(0, 0, 0, 0.12), 0px 2px 0px rgba(224, 54, 148, 0.3)' : '0px 4px 8px rgba(0, 0, 0, 0.12)',
          borderBottom: isScrolled ? '2px solid rgba(224, 54, 148, 0.2)' : 'none',
          transition: 'all 250ms ease-in-out',
        }}
      >
        <div className="px-6 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center"
            onClick={handleLinkClick}
          >
            <img
              src={sparkPointLogo}
              alt="SparkPoint"
              className="h-14 w-auto"
            />
          </Link>

          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-white/20"
            style={{ color: '#E03694' }}
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={28} />
          </Button>
        </div>
      </motion.header>

      {/* Unified Menu Drawer */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="right"
          className="w-full sm:w-[480px] p-0 border-0"
          style={{
            background: 'linear-gradient(180deg, rgba(224, 54, 148, 0.98) 0%, rgba(158, 80, 159, 0.98) 100%)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Main navigation menu
          </SheetDescription>
          
          <div className="h-full flex flex-col">
            <div className="p-6 flex justify-end">
              <Button 
                 variant="ghost" 
                 onClick={() => setMobileOpen(false)}
                 className="text-white hover:bg-white/20 rounded-full p-2 h-auto"
              >
                 <X size={24} />
                 <span className="sr-only">Close</span>
              </Button>
            </div>

            {/* Mobile View (Preserved Layout) */}
            <div className="lg:hidden flex-1 flex flex-col overflow-hidden">
                <nav className="flex-1 overflow-y-auto px-6 pb-6">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                        ease: [0.45, 0, 0.55, 1],
                      }}
                      className="mb-6"
                    >
                      <Link
                        to={item.href!}
                        onClick={handleLinkClick}
                        className="block text-white py-2"
                        style={{ fontSize: '20px', fontWeight: '600' }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="border-t border-white/20 p-6 space-y-4">
                  <Link 
                    to="/trust"
                    className="block group"
                    onClick={handleLinkClick}
                  >
                     <div className="flex items-center justify-between text-white">
                        <span className="font-bold text-lg">Trust & Accountability</span>
                        <ChevronDown className="rotate-[-90deg] opacity-50" size={16} />
                     </div>
                     <p className="text-white/60 text-sm mt-1 font-medium">Transparency, privacy, and fair pay</p>
                  </Link>

                  <div className="h-px bg-white/10 w-full my-2" />

                  <Button
                    className="w-full transition-all hover:brightness-105"
                    style={{
                      backgroundColor: 'white',
                      color: '#E03694',
                      fontSize: '16px',
                      fontWeight: '700',
                    }}
                    onClick={() => window.location.href = 'https://www.yoursparkpoint.org/donations'}
                  >
                    Donate
                  </Button>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="flex-1 border-white border-2 text-white hover:bg-white/10"
                      onClick={() => window.location.href = 'https://www.yoursparkpoint.org/newsletter'}
                    >
                      <Mail size={18} className="mr-2" />
                      Newsletter
                    </Button>

                    <button
                      onClick={() => setLanguage(language === 'EN' ? 'ES' : 'EN')}
                      className="px-4 py-2 rounded-md text-white border-2 border-white hover:bg-white/10 transition-colors font-semibold text-sm"
                    >
                      <Globe size={18} className="inline mr-1" />
                      {language}
                    </button>
                  </div>
                </div>
            </div>

            {/* Desktop View (Grouped Layout) */}
            <div className="hidden lg:flex flex-1 flex-col overflow-y-auto px-10 pb-10">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.1 }}
                 className="space-y-12"
               >
                 {/* Group 1: Explore */}
                 <div>
                   <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-6">Explore</h3>
                   <div className="grid gap-4">
                     {['Mission', 'Stories', 'Impact'].map(label => {
                        const item = menuItems.find(i => i.label === label);
                        return item ? (
                          <Link
                            key={label}
                            to={item.href!}
                            onClick={handleLinkClick}
                            className="text-white text-3xl font-bold hover:translate-x-2 transition-transform inline-block"
                          >
                            {label}
                          </Link>
                        ) : null;
                     })}
                   </div>
                 </div>

                 {/* Group 2: Get Involved */}
                 <div>
                   <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-6">Get Involved</h3>
                   <div className="grid gap-4">
                      <Link to="/get-involved" onClick={handleLinkClick} className="text-white text-2xl font-bold hover:translate-x-2 transition-transform">Get Involved</Link>
                      <a href="https://www.yoursparkpoint.org/donations" className="text-white text-2xl font-bold hover:translate-x-2 transition-transform">Donate</a>
                      <a href="https://www.yoursparkpoint.org/newsletter" className="text-white text-2xl font-bold hover:translate-x-2 transition-transform">Newsletter</a>
                   </div>
                 </div>

                 {/* Group 3: About & Trust */}
                 <div>
                   <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-6">About SparkPoint</h3>
                   <div className="grid gap-4">
                      <Link to="/about" onClick={handleLinkClick} className="text-white text-xl font-semibold hover:text-white/80 transition-colors">About Us</Link>
                      <Link to="/contact" onClick={handleLinkClick} className="text-white text-xl font-semibold hover:text-white/80 transition-colors">Contact</Link>
                      
                      <Link 
                        to="/trust" 
                        onClick={handleLinkClick}
                        className="flex items-center gap-3 mt-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10 group"
                      >
                         <div className="p-2 rounded-full bg-white/20 text-white group-hover:scale-110 transition-transform">
                            <Shield size={20} />
                         </div>
                         <div>
                            <div className="text-white font-bold text-lg">Trust & Accountability</div>
                            <div className="text-white/70 text-sm">Transparency, privacy, and stewardship</div>
                         </div>
                      </Link>
                   </div>
                 </div>
               </motion.div>
            </div>

          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
