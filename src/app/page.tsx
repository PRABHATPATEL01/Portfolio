import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedWork from '@/components/FeaturedWork';
import CaseStudy from '@/components/CaseStudy';
import Expertise from '@/components/Expertise';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-surface min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedWork />
      <CaseStudy />
      <Expertise />
      <Footer />
    </div>
  );
}
