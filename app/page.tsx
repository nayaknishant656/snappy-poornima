import Hero from '@/components/Hero/hero'
import Services from '@/components/Services/services'
import Gallery from '@/components/Gallery/gallery'
import Partner from '@/components/Partner/partner'
import Testimonials from '@/components/Testimonials/testimonials'
import Footer from '@/components/Footer/footer'
import './page.css'

export default function Home() {
  return (
    <div className="grand-parent-container-main">
      <div className="parent-container-main">
        <Hero />
        <Partner />
        <Gallery />
        <Services />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
