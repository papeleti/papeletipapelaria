import capa from './assets/0-capa-escolar.jpg';
import detalhe1 from './assets/1-agenda-escolar.png';
import detalhe2 from './assets/2-agenda-escolar.png';
import detalhe3 from './assets/3-agenda-escolar-2pp.jpg';
import detalhe4 from './assets/4-agenda-escolar-2pp.jpg';
import detalhe5 from './assets/5-agenda-escolar-2pp.jpg';
import detalhe6 from './assets/6-agenda-escolar-2pp.jpg';
import detalhe7 from './assets/7-agenda-escolar-2pp.jpg';
import detalhe8 from './assets/8-agenda-escolar-2pp.jpg';
import detalhe9 from './assets/9-agenda-escolar-2pp.jpg';
import detalhe10 from './assets/10-agenda-escolar-2pp.jpg';
import detalhe11 from './assets/11-agenda-escolar-2pp.jpg';
import detalhe12 from './assets/12-agenda-escolar-2pp.jpg';
import { description } from './description';
import { Product } from '../types';

export const agendaescolar: Product = {
  id: 'agenda-escolar',
  name: 'Agenda escolar personalizada 2026 – 02 DIAS POR PÁGINA ',
  price: 45.00,
  category: 'agendas',
  shortDescription: description.short,
  description: description.full,
  images: [capa, detalhe1, detalhe2, detalhe3, detalhe4, detalhe5, detalhe6, detalhe7, detalhe8, detalhe9, detalhe10, detalhe11, detalhe12],
};
