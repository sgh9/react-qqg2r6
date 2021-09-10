import Items from '../Items';

const reducer = (state, action) => {
  let items = [];
  switch (action.type) {
    case 'ADD_ITEM':
      Items = [action.payload.item, ...state];
      return Items;
    default:
      return state;
  }
};
export default reducer;
