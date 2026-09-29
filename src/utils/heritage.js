import bellMetal from '../data/bellMetal.json';
import vasudev from '../data/vasudev.json';
import gauriFestival from '../data/gauriFestival.json';
import sagarGote from '../data/sagarGote.json';
export const heritages = [bellMetal, vasudev, gauriFestival, sagarGote];
export const getHeritage = (slug) => heritages.find((h) => h.slug === slug);
