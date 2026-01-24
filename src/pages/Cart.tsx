import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, MessageCircle, ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();
  const [observations, setObservations] = useState('');
  const navigate = useNavigate();

  const whatsappNumber = '5582981696694';

  const generateWhatsAppMessage = () => {
    let message = 'Oi, vim pelo site da Papeleti 😊\n\n';
    message += '*📦 Meu pedido:*\n\n';

    items.forEach((item) => {
      message += `- ${item.quantity}x ${item.product.name} - R$ ${(item.product.price * item.quantity)
        .toFixed(2)
        .replace('.', ',')}\n`;
    });

    message += `\n*💰 Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}*\n`;

    if (observations.trim()) {
      message += `\n*📝 Observações para personalização:*\n${observations}\n`;
    }

    message += '\nOs detalhes de personalização (arte, modelo e ajustes finais) podemos combinar por aqui no WhatsApp. 💕';

    return message;
  };

  // 🔥 Limpa o carrinho completamente
  const clearCartAfterCheckout = () => {
    const ids = items.map((item) => item.product.id);
    ids.forEach((id) => removeFromCart(id));
    setObservations('');
  };

  const handleFinishOrder = () => {
    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    } else {
      // Tenta WhatsApp Desktop
      window.location.href = `whatsapp://send?phone=${whatsappNumber}&text=${encoded}`;

      // Fallback WhatsApp Web
      setTimeout(() => {
        window.open(
          `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encoded}`,
          '_blank',
          'noopener,noreferrer'
        );
      }, 700);
    }

    // ✅ Limpa carrinho + redireciona para home
    setTimeout(() => {
      clearCartAfterCheckout();
      navigate('/');
    }, 300);
  };

  if (items.length === 0) {
    return (
      <main className="py-16 md:py-24">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-4">
              Seu carrinho está vazio
            </h1>
            <p className="text-muted-foreground mb-8">
              Explore nosso catálogo e adicione produtos personalizados ao seu carrinho!
            </p>
            <Link to="/">
              <Button variant="hero">Ver catálogo</Button>
            </Link>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="py-8 md:py-16">
      <div className="container">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Continuar comprando
            </Button>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Itens do carrinho */}
          <div className="lg:col-span-2 space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-2xl md:text-3xl font-bold mb-6"
            >
              Seu Carrinho
            </motion.h1>

            {items.map((item, index) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-4 shadow-card border border-border"
              >
                <div className="flex gap-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-secondary">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display font-semibold truncate">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      R$ {item.product.price.toFixed(2).replace('.', ',')} cada
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-secondary"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-secondary"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-display font-bold text-primary">
                          R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Resumo */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 shadow-card border border-border sticky top-24">
              <h2 className="font-display text-xl font-bold mb-6">Resumo do Pedido</h2>

              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span className="font-bold text-primary">
                  R$ {subtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <Textarea
                placeholder="Observações para personalização..."
                value={observations}
                onChange={(e) => setObservations(e.target.value)}
                rows={4}
                className="mb-4"
              />

              <Button variant="whatsapp" size="lg" onClick={handleFinishOrder} className="w-full">
                <MessageCircle className="h-5 w-5" />
                Finalizar pedido no WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
