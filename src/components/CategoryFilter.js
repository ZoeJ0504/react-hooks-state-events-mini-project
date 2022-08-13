import React from "react";

function CategoryFilter({categories, handleFilter}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button 
      key={category}
      name={category} 
      onClick={handleFilter}
      className=""
      >
        {category}
        </button>)}
    </div>
  );
}

export default CategoryFilter;
