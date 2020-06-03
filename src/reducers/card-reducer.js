import { cards as defaultCards } from '../normalized-state';

const cardReducer = (cards = defaultCards, action) => {
  console.log("card-reducer.js [4]")

  return cards;
}

export default cardReducer;


