import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="py-20 md:py-32">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <span className="text-8xl mb-6 block">🔍</span>
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Página não encontrada
          </h1>
          <p className="text-muted-foreground mb-8">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>
          <Link to="/">
            <Button variant="hero">
              Voltar para o início
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
