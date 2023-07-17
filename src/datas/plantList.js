import monstera from '../assets/monstera.jpg';
import basil from '../assets/basil.jpg';
import cactus from '../assets/cactus.jpg';
import calathea from '../assets/calathea.jpg';
import lyrata from '../assets/lyrata.jpg';
import mint from '../assets/mint.jpg';
import olivier from '../assets/olivier.jpg';
import pothos from '../assets/pothos.jpg';
import succulent from '../assets/succulent.jpg';

export const plantList = [
	{
	  name: 'monstera',
	  category: 'classique',
	  id: '1ed',
	  isBestSale: true,
	  light: 2,
	  water: 3,
	  cover: monstera,
	  price: 16
	},
	{
	  name: 'ficus lyrata',
	  category: 'classique',
	  id: '2ab',
	  light: 3,
	  water: 1,
	  cover: lyrata,
	  price: 10
	},
	{
	  name: 'pothos argenté',
	  category: 'classique',
	  id: '3sd',
	  isSpecialOffer: true,
	  light: 1,
	  water: 2,
	  cover: pothos,
	  price: 7
	},
	{
	  name: 'yucca',
	  category: 'classique',
	  id: '4kk',
	  light: 3,
	  water: 1,
	  cover: cactus,
	  price: 9
	},
	{
	  name: 'olivier',
	  category: 'extérieur',
	  id: '5pl',
	  light: 3,
	  water: 1,
	  cover: olivier,
	  price: 13
	},
	{
	  name: 'géranium',
	  category: 'extérieur',
	  id: '6uo',
	  light: 2,
	  water: 2,
	  cover: mint,
	  price: 11
	},
	{
	  name: 'basilique',
	  category: 'extérieur',
	  id: '7ie',
	  isBestSale: true,
	  isSpecialOffer: true,
	  light: 2,
	  water: 3,
	  cover: basil,
	  price: 18
	},
	{
	  name: 'aloe',
	  category: 'plante grasse',
	  id: '8fp',
	  isSpecialOffer: true,
	  light: 2,
	  water: 1,
	  cover: calathea,
	  price: 6
	},
	{
	  name: 'succulente',
	  category: 'plante grasse',
	  id: '9vn',
	  light: 2,
	  water: 1,
	  cover: succulent,
	  price: 14
	}
];
