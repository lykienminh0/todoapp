import React from "react";
import FilterLink from '../containers/FilterLink'
import './css/FilterToolbar.css'

const FilterToolbar = () => {
  return (
    <div className="tab-group-root">
      <FilterLink filter='SHOW_ALL'> All </FilterLink>
      <FilterLink filter='SHOW_ACTIVE'> Not done </FilterLink>
      <FilterLink filter='SHOW_COMPLETED'> Done </FilterLink>
    </div>
  );
};

export default FilterToolbar;