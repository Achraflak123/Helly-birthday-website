import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Countdown", href: "#countdown" },
    { name: "Gallery", href: "#gallery" },
    { name: "Guestbook", href: "#guestbook" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);

    // Disable scrolling when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <nav style={{ background: "#fff" }} className="fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-serif text-xl font-bold">
          <span className="bg-gradient-to-r from-birthday-pink to-birthday-purple bg-clip-text text-transparent">
            Helly's <span style={{ color: "purple" }} className="text-birthday-purple">2O</span><sup>TH</sup> Birthday
          </span>
        </div>

        {/* Desktop Menu */}
        <div style={{ gap: "3rem" }} className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-link font-medium transition-all duration-300 relative ${
                activeSection === item.href.substring(1)
                  ? "text-birthday-pink"
                  : "text-gray-700 hover:text-birthday-pink"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-birthday-pink transform origin-left transition-transform duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "scale-x-100"
                    : "scale-x-0"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
          style={{ zIndex: "5000000" }}
        >
          {mobileMenuOpen ? <X onClick={toggleMobileMenu} size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{ gap: "2rem", backgroundColor: "#fff" }} className="fixed inset-0 w-full bg-white flex flex-col items-center justify-center space-y-6 z-50">

          {navItems.map((item) => (
            <a
            style={{ textTransform: "uppercase" }}
              key={item.name}
              href={item.href}
              className={`text-lg font-medium ${
                activeSection === item.href.substring(1)
                  ? "text-birthday-pink"
                  : "text-gray-700"
              }`}
              onClick={toggleMobileMenu}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}



    </nav>
  );
};

export default Navbar;
