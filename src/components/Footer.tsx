import { Link } from 'react-router-dom';
import { Heart, Instagram, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo-papeleti.png';

export function Footer() {
  const whatsappNumber = '5582981696694'; // Altere para o número real

  // Emoji por Unicode escape (não depende do encoding do arquivo)
  const EMOJI_SMILE = '\u{1F60A}'; // 😊

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
      // Mobile: abre o app (wa.me)
      window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
      return;
    }

    // Desktop: tenta abrir o WhatsApp Desktop
    window.location.href = `whatsapp://send?phone=${whatsappNumber}&text=${encoded}`;

    // Fallback: se não abrir o app, abre no WhatsApp Web
    setTimeout(() => {
      window.open(
        `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encoded}`,
        '_blank',
        'noopener,noreferrer'
      );
    }, 700);
  };

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Papeleti"
                className="h-12 w-12 rounded-lg object-cover"
              />
              <span className="font-display text-2xl font-semibold">Papeleti</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Papelaria personalizada feita com carinho. Cada peça é única, assim como você.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Navegação</h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/como-funciona"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Como funciona
              </Link>
              <Link
                to="/sobre"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Sobre a Papeleti
              </Link>
              <Link
                to="/carrinho"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Carrinho
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                onClick={handleOpenWhatsApp}
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/papeleti.papelaria/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @papeleti
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60 flex items-center justify-center gap-1">
            Feito com <Heart className="h-4 w-4 text-blush fill-blush" /> por Papeleti
          </p>
        </div>
      </div>
    </footer>
  );
}
