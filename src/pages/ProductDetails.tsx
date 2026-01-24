import { useParams, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, Minus, ShoppingCart } from 'lucide-react';
import { products } from '@/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = useMemo(() => products.find((p) => p.id === id), [id]);

  // ✅ Hooks sempre antes de returns condicionais
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string>('');

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-2xl font-semibold mb-4">
          Produto não encontrado
        </h1>
        <Button onClick={() => navigate('/')}>Voltar para o catálogo</Button>
      </div>
    );
  }

  const mainImage = selectedImage || product.images[0];

  const goPrev = () => {
    const currentIndex = product.images.indexOf(mainImage);
    const prevIndex = currentIndex <= 0 ? product.images.length - 1 : currentIndex - 1;
    setSelectedImage(product.images[prevIndex]);
  };

  const goNext = () => {
    const currentIndex = product.images.indexOf(mainImage);
    const nextIndex = currentIndex >= product.images.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(product.images[nextIndex]);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: 'Adicionado ao carrinho! 🎉',
      description: `${quantity}x ${product.name}`,
    });
  };

  return (
    <main className="py-8 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button variant="ghost" onClick={() => navigate('/')} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar para o catálogo
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Galeria de Imagens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-3">
              {/* Imagem principal + setas */}
              <div className="relative aspect-square bg-secondary rounded-2xl overflow-hidden shadow-card">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {product.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Foto anterior"
                      onClick={goPrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-background/80 backdrop-blur border border-border shadow flex items-center justify-center hover:bg-background transition"
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      aria-label="Próxima foto"
                      onClick={goNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-background/80 backdrop-blur border border-border shadow flex items-center justify-center hover:bg-background transition"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Miniaturas */}
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImage(img)}
                      className={`shrink-0 rounded-xl overflow-hidden border transition-all ${
                        mainImage === img ? 'ring-2 ring-primary' : 'border-border'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${idx + 1}`}
                        className="w-20 h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Informações */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                {product.name}
              </h1>
            </div>

            <p className="font-display text-3xl font-bold text-primary">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </p>

            {/* ✅ Quebra de linha na descrição */}
            <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {product.description}
            </div>

            <div className="border-t border-border pt-6 space-y-4">
              <label className="text-sm font-medium text-foreground">
                Quantidade
              </label>

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Minus className="h-5 w-5" />
                  </button>

                  <span className="px-6 py-3 font-semibold min-w-[4rem] text-center text-lg">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleAddToCart}
                variant="accent"
                size="lg"
                className="flex-1 gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Adicionar ao carrinho
              </Button>
            </div>

            <div className="bg-secondary/50 rounded-xl p-4 mt-6">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Dica:</strong> Após adicionar ao carrinho, você poderá
                informar suas preferências de personalização (cores, nomes, temas)
                e finalizar o pedido pelo WhatsApp.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
