import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-5 px-6 md:px-10 lg:px-20 border-b border-white/20 bg-white/40 backdrop-blur-xl sticky top-0 z-[100] w-full">
      <div className="font-display font-bold text-xl text-primary uppercase tracking-wide flex items-center gap-2 shrink-0">
        <span className="text-2xl"></span> <span className="hidden sm:inline">Prabhat Patel</span>
      </div>
      
      <div className="flex gap-4 md:gap-8 text-[11px] md:text-sm font-bold text-on-surface-variant overflow-x-auto no-scrollbar py-2">
        <Link href="#projects" className="hover:text-primary transition-colors whitespace-nowrap">Projects</Link>
        <Link href="#expertise" className="hover:text-primary transition-colors whitespace-nowrap">Expertise</Link>
        <Link href="#experience" className="hover:text-primary transition-colors whitespace-nowrap">Experience</Link>
        <Link href="#contact" className="hover:text-primary transition-colors whitespace-nowrap">Contact</Link>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <a href="https://linkedin.com/in/prabhat-patel-255432202" target="_blank" className="bg-primary/90 text-on-primary px-4 md:px-6 py-2 md:py-2.5 rounded-2xl font-bold shadow-lg hover:bg-primary transition-all backdrop-blur-sm text-xs md:text-sm whitespace-nowrap">
          Resume
        </a>
      </div>
    </nav>
  );
}
