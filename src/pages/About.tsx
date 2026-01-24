import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-papeleti.png';

const About = () => {
  const whatsappNumber = '5582981696694';

  // Emojis via Unicode escapes (não dependem do encoding do arquivo)
  const EMOJI_SMILE = '\u{1F60A}'; // 😊
  const EMOJI_PAINT = '\u{1F3A8}'; // 🎨
  const EMOJI_GIFT_HEART = '\u{1F49D}'; // 💝
  const EMOJI_HANDSHAKE = '\u{1F91D}'; // 🤝

  const buildWhatsAppMessage = () => {
    return `Oi! Vim pelo site da Papeleti ${EMOJI_SMILE}`;
  };

  const handleOpenWhatsApp = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const message = buildWhatsAppMessage();
    const encoded = encodeURIComponent(message);

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encoded}`,
        '_blank',
        'noopener,noreferrer'
      );
      return;
    }

    // Desktop: tenta abrir o WhatsApp Desktop
    window.location.href = `whatsapp://send?phone=${whatsappNumber}&text=${encoded}`;

    // Fallback para WhatsApp Web
    setTimeout(() => {
      window.open(
        `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encoded}`,
        '_blank',
        'noopener,noreferrer'
      );
    }, 700);
  };

  return (
    <main className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <img
              src={logo}
              alt="Papeleti"
              className="w-28 h-28 rounded-2xl shadow-hover mx-auto mb-6 object-cover"
            />
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sobre a Papeleti
            </h1>
            <div className="flex items-center justify-center gap-2 text-primary">
              <Sparkles className="h-5 w-5" />
              <span className="font-medium">Papelaria Personalizada</span>
              <Sparkles className="h-5 w-5" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p className="text-lg">
              A <strong className="text-foreground">Papeleti</strong> nasceu do amor pela papelaria
              e pela vontade de criar peças únicas e especiais para cada cliente.
              Acreditamos que os pequenos detalhes fazem toda a diferença!
            </p>

            <p>
              Cada produto que criamos carrega um pouquinho de carinho e dedicação.
              Desde a escolha do papel até o acabamento final, trabalhamos para que
              você receba algo verdadeiramente especial.
            </p>

            <div className="bg-secondary/50 rounded-xl p-6 my-8">
              <div className="flex items-start gap-4">
                <Heart className="h-6 w-6 text-blush-dark flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    Feito com amor, pensado em você
                  </h3>
                  <p className="text-sm">
                    Aqui na Papeleti, você não é só mais um pedido. Cada projeto é tratado
                    com atenção e cuidado, porque entendemos que por trás de cada encomenda
                    existe uma história, uma comemoração, um momento especial.
                  </p>
                </div>
              </div>
            </div>

            <p>
              Nosso processo é simples e transparente: você escolhe os produtos,
              conta suas ideias de personalização, e nós transformamos tudo em realidade.
              A comunicação acontece pelo WhatsApp, onde você acompanha cada etapa e
              aprova a arte antes da produção.
            </p>

            <p>
              Seja para uso pessoal, presentear alguém querido, ou organizar uma festa
              inesquecível, a Papeleti está aqui para ajudar a tornar esses momentos
              ainda mais especiais.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-6 my-12"
          >
            {[
              { emoji: EMOJI_PAINT, title: 'Criatividade', desc: 'Cada peça é única e personalizada' },
              { emoji: EMOJI_GIFT_HEART, title: 'Carinho', desc: 'Atenção aos detalhes em cada projeto' },
              { emoji: EMOJI_HANDSHAKE, title: 'Proximidade', desc: 'Atendimento próximo e acolhedor' },
            ].map((value, index) => (
              <div key={index} className="text-center p-4">
                <span className="text-4xl mb-3 block">{value.emoji}</span>
                <h4 className="font-display font-semibold text-foreground mb-1">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/">
              <Button variant="hero" size="lg">
                Ver catálogo
              </Button>
            </Link>

            {/* Em vez de href direto, abrimos via handler (robusto p/ emoji e desktop) */}
            <a href="#" onClick={handleOpenWhatsApp}>
              <Button variant="whatsapp" size="lg">
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default About;
