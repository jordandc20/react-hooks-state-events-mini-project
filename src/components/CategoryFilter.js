import React, { useState } from "react";


function CategoryFilter({ categories, setCategory }) {

  const [selected, setSelected] = useState(false)

  function handleCategoryClick(e) {
    setCategory(e.target.innerText)
    setSelected(!selected)
  }



  const button = categories.map((category) => {
    return <button
      key={category}
      onClick={handleCategoryClick}
      className={selected ? ("selected") : null}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {button}
    </div>
  );
}

export default CategoryFilter;
