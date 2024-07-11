import Header from '../components/Header';
import Footer from '../components/Footer';
import Feature from '../components/Feature';
import Testimonial from '../components/Testimonial';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CallToAction from '@/components/CTA';
import Team from '@/components/Team';
import Solutions from '@/components/Solutions';
import Services from '@/components/Services';
import Stories from '@/components/Stories';
import CTA3 from '@/components/CTA3';
import CTA2 from '@/components/CTA2';
export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Feature />
        <Team />
        <Services />
        <Testimonial />
        <CTA2 />
        {/* <CTA3 /> */}
      </main>
    </div>    
  );
}
