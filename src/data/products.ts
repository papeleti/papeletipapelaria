import cadernoImg from '@/assets/products/caderno.jpg';
import kitEscolarImg from '@/assets/products/kit-escolar.jpg';
import plannerImg from '@/assets/products/planner.jpg';
import etiquetasImg from '@/assets/products/etiquetas.jpg';
import agendaImg from '@/assets/products/agenda.jpg';
import convitesImg from '@/assets/products/convites.jpg';
import tagsImg from '@/assets/products/tags.jpg';
import blocoNotasImg from '@/assets/products/bloco-notas.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  images: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Caderno Personalizado",
    price: 45.00,
    shortDescription: "Caderno com capa dura e nome personalizado",
    description: "Caderno com capa dura personalizada, costura artesanal e 100 folhas de papel offset 90g. Escolha o tema, cores e adicione o nome que desejar. Perfeito para presentes ou para uso pessoal.",
    images: [cadernoImg],
    category: "Cadernos"
  },
  {
    id: "2",
    name: "Kit Papelaria Escolar",
    price: 89.00,
    shortDescription: "Kit completo com itens personalizados",
    description: "Kit completo com etiquetas, caderno, agenda e pasta personalizada. Ideal para volta às aulas com muito estilo e organização. Todos os itens seguem o mesmo tema escolhido.",
    images: [kitEscolarImg],
    category: "Kits"
  },
  {
    id: "3",
    name: "Planner Anual",
    price: 75.00,
    shortDescription: "Planner completo para organizar seu ano",
    description: "Planner anual com páginas mensais, semanais, listas de metas e espaço para anotações. Capa dura personalizada com seu nome e tema favorito. Inclui adesivos decorativos.",
    images: [plannerImg],
    category: "Planners"
  },
  {
    id: "4",
    name: "Etiquetas Escolares",
    price: 25.00,
    shortDescription: "Pacote com 50 etiquetas personalizadas",
    description: "Pacote com 50 etiquetas adesivas resistentes à água, personalizadas com nome e tema escolhido. Perfeitas para identificar materiais escolares, potes e objetos pessoais.",
    images: [etiquetasImg],
    category: "Etiquetas"
  },
  {
    id: "5",
    name: "Agenda 2025",
    price: 65.00,
    shortDescription: "Agenda completa para o ano todo",
    description: "Agenda 2025 com capa personalizada, páginas de planejamento mensal e diário, espaço para metas e listas. Acabamento premium com costura artesanal.",
    images: [agendaImg],
    category: "Agendas"
  },
  {
    id: "6",
    name: "Convites Personalizados",
    price: 35.00,
    shortDescription: "Pacote com 10 convites temáticos",
    description: "Pacote com 10 convites personalizados para aniversário, chá de bebê, batizado ou qualquer ocasião especial. Impressos em papel especial 250g com acabamento fosco ou brilho.",
    images: [convitesImg],
    category: "Convites"
  },
  {
    id: "7",
    name: "Tags para Lembrancinhas",
    price: 18.00,
    shortDescription: "Pacote com 30 tags personalizadas",
    description: "Pacote com 30 tags em papel especial para lembrancinhas de festa. Personalizadas com nome, data e tema da comemoração. Acompanha furo e cordão de sisal.",
    images: [tagsImg],
    category: "Festas"
  },
  {
    id: "8",
    name: "Bloco de Notas",
    price: 22.00,
    shortDescription: "Bloco personalizado com 100 folhas",
    description: "Bloco de notas personalizado com 100 folhas destacáveis. Ideal para recados, listas e anotações do dia a dia. Capa em papel especial com laminação.",
    images: [blocoNotasImg],
    category: "Blocos"
  }
];

export const categories = [...new Set(products.map(p => p.category))];
