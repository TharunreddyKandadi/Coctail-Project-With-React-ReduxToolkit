import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchCocktails } from "../Redux/Features/CocktailSlice";

const SearchBox = () => {
  const ref1 = useRef();
  const dispatch = useDispatch();
  const HandleSubmit = (e) => {
    e.preventDefault();
  };
  const ValueSearch = () => {
    const SearchValue = ref1.current.value;
    dispatch(fetchSearchCocktails({ SearchValue }));
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center mt-4">
        <form onSubmit={HandleSubmit}>
          <input
            style={{ width: "350px" }}
            onChange={ValueSearch}
            placeholder="Search-Box"
            type="text"
            ref={ref1}
          />
        </form>
      </div>
    </>
  );
};
export default SearchBox;
