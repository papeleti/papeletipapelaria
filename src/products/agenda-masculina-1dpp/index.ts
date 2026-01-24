import capa from './assets/0-miolo-masculina-1dpp.jpeg';
import detalhe1 from './assets/1-miolo-masculina-1dpp.jpg';
import detalhe2 from './assets/2-miolo-masculina-1dpp.jpg';
import detalhe3 from './assets/3-miolo-masculina-1dpp.jpg';
import detalhe4 from './assets/4-miolo-masculina-1dpp.jpg';
import detalhe5 from './assets/5-miolo-masculina-1dpp.jpg';
import detalhe6 from './assets/6-miolo-masculina-1dpp.jpg';
import detalhe7 from './assets/7-miolo-masculina-1dpp.jpg';
import detalhe8 from './assets/8-miolo-masculina-1dpp.jpg';
import detalhe9 from './assets/capa(01).png';
import detalhe10 from './assets/capa(02).png';
import detalhe11 from './assets/capa(03).png';
import detalhe12 from './assets/capa(04).png';
import detalhe13 from './assets/capa(05).png';
import detalhe14 from './assets/capa(06).png';
import detalhe15 from './assets/capa(07).png';
import detalhe16 from './assets/capa(08).png';
import { description } from './description';
import { Product } from '../types';

export const agendamasculina1dpp: Product = {
  id: 'agenda-masculina-1dpp',
  name: 'Agenda masculina personalizada 2026 – 01 DIA POR PÁGINA',
  price: 60.00,
  category: 'agendas',
  shortDescription: description.short,
  description: description.full,
  images: [capa, detalhe1, detalhe2, detalhe3, detalhe4, detalhe5, detalhe6, detalhe7, detalhe8, detalhe9, detalhe9, detalhe10, detalhe11, detalhe12, detalhe13, detalhe14, detalhe15, detalhe16],
};
