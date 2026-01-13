import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity < 1) return;
    addToCart(product, quantity);
    toast({
      title: "Adicionado ao carrinho! 🎉",
      description: `${quantity}x ${product.name}`,
    });
    setQuantity(0);
  };

  const handleQuantityChange = (e: React.MouseEvent, delta: number) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantity(prev => Math.max(0, prev + delta));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group"
    >
      <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 border border-border">
        <Link to={`/produto/${product.id}`}>
          <div className="aspect-square bg-secondary/50 relative overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Link>

        <div className="p-4 space-y-3">
          <Link to={`/produto/${product.id}`}>
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.shortDescription}
          </p>

          <p className="font-display text-xl font-bold text-primary">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </p>

          <div className="flex items-center gap-2 pt-2">
            <div className="flex items-center border border-border rounded-lg overflow-hidden">
              <button
                onClick={(e) => handleQuantityChange(e, -1)}
                className="p-2 hover:bg-secondary transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                {quantity}
              </span>
              <button
                onClick={(e) => handleQuantityChange(e, 1)}
                className="p-2 hover:bg-secondary transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <Button
              onClick={handleAddToCart}
              variant="accent"
              size="sm"
              className="flex-1"
              disabled={quantity < 1}
            >
              <ShoppingCart className="h-4 w-4" />
              Adicionar
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
