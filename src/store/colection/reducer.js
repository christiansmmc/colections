const colectionReducer = (state = [], action) => {
  switch (action.type) {
    case "@page/ADD":
      return action.page;
    default:
      return state;
  }
};

export default colectionReducer;
