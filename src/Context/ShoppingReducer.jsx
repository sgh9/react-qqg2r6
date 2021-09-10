import Items from '../Items';

const reducer = (state, action) => {
  let items = [];
  switch (action.type) {
    case 'ADD_ITEM':
      Items = [action.payload.item, ...state];
      return Items;
    case 'INCREMENT_COUNT':
      console.log(action.payload.name, 'item name After incrementCount');
      items = [...state].map(item => {
        if (item.name === action.payload.name) {
          return { ...item, count: item.count + 1 };
        }
      });
      console.log(items, 'items  After incrementCount');
      return Items;
    default:
      return state;
  }
};
export default reducer;
