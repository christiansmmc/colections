import { Input } from "antd";
import "antd/dist/antd.css";
import { Div } from "../../style/search";

const Search = (props) => {
  const { Search } = Input;

  return (
    <Div>
      <Search
        onChange={props.onChange}
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={props.function}
      />
    </Div>
  );
};

export default Search;
