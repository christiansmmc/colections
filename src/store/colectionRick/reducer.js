const colectionRickReducer = (state = [], action) => {
  switch (action.type) {
    case "@rickPage/ADD":
      return action.page;
    default:
      return state;
  }
};

export default colectionRickReducer;
