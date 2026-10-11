import "./navbar.css"

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-10">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#home" className="text-xl font-semibold tracking-tight text-white transition-colors hover:text-[#56d2ff]">
          Madina.
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="link-animation relative text-white">
              {item.label}
            </a>
          ))}
        </div>
        <div>
          M
        </div>
      </nav>
    </header>
  );
}
