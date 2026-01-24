import capa from './assets/1.png';
import detalhe1 from './assets/2.png';
import { description } from './description';
import { Product } from '../types';

export const bloconotas: Product = {
  id: 'bloco-notas',
  name: 'Bloco de notas',
  price: 15.00,
  category: 'notas',
  shortDescription: description.short,
  description: description.full,
  images: [capa, detalhe1],
};
