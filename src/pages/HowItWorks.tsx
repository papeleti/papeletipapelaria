import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, MessageSquare, Palette, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: ShoppingCart,
    title: "1. Escolha seus produtos",
    description: "Navegue pelo catálogo da Papeleti e selecione os itens que deseja personalizar."
  },
  {
    icon: Package,
    title: "2. Monte seu carrinho",
    description: "Ajuste as quantidades de cada produto e adicione ao carrinho."
  },
  {
    icon: Palette,
    title: "3. Descreva sua personalização",
    description: "No carrinho, use o campo de observações para informar nomes, cores, temas, frases ou qualquer detalhe especial."
  },
  {
    icon: MessageSquare,
    title: "4. Finalize pelo WhatsApp",
    description: "Clique em 'Finalizar pedido' e combine os detalhes finais diretamente com nosso atendimento pelo WhatsApp."
  }
];

const HowItWorks = () => {
  return (
    <main className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como Funciona
          </h1>
          <p className="text-muted-foreground text-lg">
            Fazer seu pedido personalizado na Papeleti é simples e rápido! 
            Siga os passos abaixo:
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-secondary/50 rounded-2xl p-8 max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            Informações Importantes
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">📅 Prazo de produção</h4>
              <p className="text-sm text-muted-foreground">
                Em média 2 a 5 dias úteis, dependendo do produto e quantidade. 
                Prazos podem variar conforme demanda.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">💳 Formas de pagamento</h4>
              <p className="text-sm text-muted-foreground">
                PIX, transferência bancária e cartão (via link de pagamento). 
                Condições combinadas no WhatsApp.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">🚚 Entrega</h4>
              <p className="text-sm text-muted-foreground">
                Enviamos para todo o Brasil via Correios ou transportadora. 
                Frete calculado conforme endereço.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">✨ Personalização</h4>
              <p className="text-sm text-muted-foreground">
                Arte e ajustes finais são combinados pelo WhatsApp. 
                Enviamos prévia para aprovação antes da produção.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link to="/#catalogo">
            <Button variant="hero" size="xl">
              Começar meu pedido
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default HowItWorks;
