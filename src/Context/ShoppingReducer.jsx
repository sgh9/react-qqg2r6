import Items from '../Items';

const reducer = (state, action) => {
  let items = [];
  switch (action.type) {
    case 'ADD_ITEM':
      Items = [action.payload.item, ...state];
      return Items;
    case 'INCREMENT_COUNT':
      let newItems = [...state].map(item => {
        if (item.name === action.payload) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      return newItems;
    default:
      return state;
  }
};
export default reducer;
