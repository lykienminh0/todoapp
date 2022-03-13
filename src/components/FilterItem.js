import React from 'react'
import './css/FilterItem.css'

const FilterItem = ({ active, children, onClick }) => (
  <li className="tab-item-root" data-active={active}>
    <button
      type="button"
      className="tab-item-main"
      onClick={onClick}
      disabled={active}
      pressed={active ? 'true' : 'false'}
    >
      {children}
    </button>
  </li>
)

export default FilterItem
