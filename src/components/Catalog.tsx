import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { products } from '@/products';
import { ProductCard } from './ProductCard';

export const Catalog = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nosso Catálogo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore nossa seleção de produtos personalizáveis. 
            Cada item pode ser adaptado ao seu gosto!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

Catalog.displayName = 'Catalog';
