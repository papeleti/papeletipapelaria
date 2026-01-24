import type { Product } from './types';

import { agendacreche } from './agenda-creche';
import { agendaescolar } from './agenda-escolar';
import { agendafeminina1dpp } from './agenda-feminina-1dpp';
import { agendafeminina2dpp } from './agenda-feminina-2dpp';
import { agendamasculina1dpp } from './agenda-masculina-1dpp';
import { agendamasculina2dpp } from './agenda-masculina-2dpp';
import { bloconotas } from './bloco-anotacoes-a6';
import { calendariomesa } from './calendario-de-mesa';
import { miniagenda } from './mini-agenda-1dpp';
import { plannerfeminino } from './planner-feminino-a5'

export const products: Product[] = [
  agendacreche,
  agendaescolar,
  agendafeminina1dpp,
  agendafeminina2dpp,
  agendamasculina1dpp,
  agendamasculina2dpp,
  bloconotas,
  calendariomesa,
  miniagenda,
  plannerfeminino,
];