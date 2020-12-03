import axios from "axios";

import { addColectionRick } from "./action";

export const colectionRickThunk = (url, setNextPage) => (dispatch, _) => {
  axios.get(url).then((res) => {
    let page = [...res.data.results];
    setNextPage({ next: res.data.info.next, previous: res.data.info.prev });
    dispatch(addColectionRick(page));
  });
};
