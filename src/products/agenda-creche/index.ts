import capa from './assets/0-capa-creche.jpg';
import detalhe1 from './assets/1-agenda-creche-a5.png';
import detalhe2 from './assets/2-agenda-creche-a5.png';
import detalhe3 from './assets/3-agenda-creche-a5.jpg';
import detalhe4 from './assets/4-agenda-creche-a5.jpg';
import detalhe5 from './assets/5-agenda-creche-a5.jpg';
import detalhe6 from './assets/6-agenda-creche-a5.jpg';
import detalhe7 from './assets/7-agenda-creche-a5.jpg';
import { description } from './description';
import { Product } from '../types';

export const agendacreche: Product = {
  id: 'agenda-creche',
  name: 'Agenda creche personalizada 2026',
  price: 55.00,
  category: 'agendas',
  shortDescription: description.short,
  description: description.full,
  images: [capa, detalhe1, detalhe2, detalhe3, detalhe4, detalhe5, detalhe6, detalhe7],
};
