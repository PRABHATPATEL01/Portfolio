import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-6 md:px-10 lg:px-20 border-b border-outline-variant/30 bg-surface sticky top-0 z-50">
      <div className="font-display font-bold text-xl text-primary uppercase tracking-wide">Prabhat Patel</div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-on-surface-variant">
        <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
        <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
        <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
        <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
      </div>
      <a href="https://linkedin.com/in/prabhat-patel-255432202" target="_blank" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-semibold shadow-subtle hover:bg-primary-container transition-all">
        Resume
      </a>
    </nav>
  );
}
