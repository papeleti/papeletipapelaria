import { useRef } from 'react';
import { Hero } from '@/components/Hero';
import { Catalog } from '@/components/Catalog';

const Index = () => {
  const catalogRef = useRef<HTMLElement>(null);

  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <Hero onScrollToCatalog={scrollToCatalog} />
      <Catalog ref={catalogRef} />
    </main>
  );
};

export default Index;
