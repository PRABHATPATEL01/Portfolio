export default function Footer() {
  return (
    <footer id="contact" className="px-6 md:px-10 lg:px-20 py-12 bg-surface-container-low border-t border-outline-variant/20 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="font-display font-bold text-on-surface mb-2 text-lg">Prabhat Patel</div>
          <div className="text-sm text-on-surface-variant font-medium">Delhi, India</div>
          <div className="text-sm text-on-surface-variant font-medium mt-1">© 2024 Prabhat Patel. Built with Next.js & Tailwind.</div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-on-surface-variant">
          <a href="mailto:prabhatpatel301@gmail.com" className="hover:text-primary border-b-2 border-transparent hover:border-primary transition-all pb-1">Email</a>
          <a href="https://linkedin.com/in/prabhat-patel-255432202" target="_blank" className="hover:text-primary border-b-2 border-transparent hover:border-primary transition-all pb-1">LinkedIn</a>
          <a href="#" className="hover:text-primary border-b-2 border-transparent hover:border-primary transition-all pb-1">Back to Top</a>
        </div>
      </div>
    </footer>
  );
}
