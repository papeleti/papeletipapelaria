import capa from './assets/1-calendario-mesa.avif';
import detalhe1 from './assets/2-calendario-mesa.jpg';
import detalhe2 from './assets/3-calendario-mesa.avif';
import { description } from './description';
import { Product } from '../types';

export const calendariomesa: Product = {
  id: 'calendario-mesa',
  name: 'Calendário de mesa',
  price: 20.00,
  category: 'calendario',
  shortDescription: description.short,
  description: description.full,
  images: [capa, detalhe1, detalhe2],
};
