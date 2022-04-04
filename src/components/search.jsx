import React from "react";
import { useDispatch } from "react-redux";
import { FILTER_DATA } from "../redux/actionTypes";

const Search = ({ setSearchKey, searchKey }) => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchKey(e.target.value);
    const userData = [...JSON.parse(localStorage.getItem("userData"))];
    const filterData = userData.filter(
      (el) =>
        el.name.toLowerCase().includes(searchKey.trim()) ||
        el.role.toLowerCase().includes(searchKey.trim()) ||
        el.email.toLowerCase().includes(searchKey.trim())
    );
    dispatch({
      type: FILTER_DATA,
      payload: filterData,
    });
  };
  return (
    <div className="container">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="filter by name,email and role..."
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Search;
