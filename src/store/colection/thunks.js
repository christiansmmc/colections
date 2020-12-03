import axios from "axios";

import { addColection } from "./action";

export const colectionThunk = (url, setNextPage) => (dispatch, _) => {
  axios.get(url).then((res) => {
    let page = [...res.data.results];
    setNextPage({ next: res.data.next, previous: res.data.previous });
    dispatch(addColection(page));
  });
};
