import React from 'react';
import { useFilterContext } from './ContextApi/FilterContext';

const AllFilters = () => {

   const {  filters: { text ,category }  , all_products , clearfitlers ,updateFilterValue ,filter_products , sorting } = useFilterContext();
   const getUniqueData = (data,property) => {

      let newval = data.map((curelem) => {
         return curelem[property];
      });

      return newval = [... new Set(newval)];
   }

    const categoryOnlyData = getUniqueData(all_products,"category");

    //  console.log(' category only data ',categoryOnlyData);

  return (
    <div>
          <div className = "all-filter-container">
                <h3>  Search by DropDown  </h3>

            <div className = "sort-selection"> 
                  <form action = "#">
                    <label htmlFor = 'sort'> </label>
                    <select name = "sort"
                       id = "sort"
                       className = 'sort-selection-style'
                       onClick = {sorting} >  
                      <option value = "lowest"> Price(lowest) </option>
                      <option value = "#" disabled> </option>
                      <option value = "highest"> Price(highest) </option>
                      <option value = "#" disabled> </option>
                      <option value = "a-z"> Price(a-z) </option>
                      <option value = "#" disabled> </option>
                      <option value = "z-a"> Price(z-a) </option>
                    </select>
                  </form>
            </div>

{/* 
               <h3> Search by Typing -  </h3>

              <div className = "filter-search">
                  <form onSubmit = {(e) => e.preventDefault()} >
                      <input type = "text" 
                      name = "text" 
                      value = {text} 
                      onChange = {updateFilterValue} />
                  </form>

              </div> */}

              <h3> Category  </h3>
              <div>  
                 {categoryOnlyData.map((curelem,index) => {
                   return (
                    <>
                        <button key = {index} 
                        type  = "button" 
                        name  = "category"
                        value =   {curelem} 
                        onClick = {updateFilterValue} >
                          {curelem}
                        </button>
                      </>
                   ) 
                 })}
              </div>

                 <h3> Clear here  </h3>
              <button className ='btn' onClick = {clearfitlers}>  Clear Button </button>
          </div>
    </div>
  )
}

export default AllFilters