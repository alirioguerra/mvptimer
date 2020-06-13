const INITIAL_STATE = {
  mvps: [],
};

function insertItem(array, action) {
  const newArray = array.slice();
  newArray.splice(action, 0, action);
  return newArray;
}

function sortMvps(array) {
  const newArray = array;
  const filtered = newArray.sort((a, b) => a.name > b.name);
  return filtered;
}

function filterMvps(array, param) {
  const newArray = array;
  newArray.sort((a, b) => a.name - b.name);
  return newArray;
}

export default function mvpReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ALL_MVPS':
      return {
        ...state,
        mvps: action.mvps,
      };
    case 'SORT_MVPS':
      return {
        ...state,
        mvps: sortMvps(state.mvps),
      };
    case 'FILTER_MVP':
      return {
        ...state,
        mvps: filterMvps(state.mvps, action.param),
      };
    default:
      return state;
  }
}
