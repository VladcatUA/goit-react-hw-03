//import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChangeValue }) {
  const idSearchInput = nanoid();

  return (
    <div className={css.searchBox}>
    
      <label htmlFor={idSearchInput}>Find contacts by name</label>
      <input
        id={idSearchInput}
        type="text"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </div>
  );
}