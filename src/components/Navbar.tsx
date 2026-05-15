import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-6 md:px-10 lg:px-20 border-b border-white/20 bg-white/40 backdrop-blur-xl sticky top-0 z-[100]">
      <div className="font-display font-bold text-xl text-primary uppercase tracking-wide flex items-center gap-2">
        <span className="text-2xl"></span> Prabhat Patel
      </div>
      <div className="hidden md:flex gap-8 text-sm font-bold text-on-surface-variant">
        <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
        <Link href="#expertise" className="hover:text-primary transition-colors">Expertise</Link>
        <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
        <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
      </div>
      <a href="https://linkedin.com/in/prabhat-patel-255432202" target="_blank" className="bg-primary/90 text-on-primary px-6 py-2.5 rounded-2xl font-bold shadow-lg hover:bg-primary transition-all backdrop-blur-sm">
        Resume
      </a>
    </nav>
  );
}
