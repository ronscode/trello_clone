import { lists as defaultLists } from '../normalized-state';

const listsReducer = (lists = defaultLists, action) => {
  console.log("the lists are " + lists + "list-reducer.js[4]")
  console.log("the action is " + action + "list-reducer.js[5]")
  console.log("hello list reducer")

  return lists;
};

export default listsReducer;