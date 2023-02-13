import React from 'react';
import { useFilterContext } from './ContextApi/FilterContext';

const AllFilters = () => {

   const {  filters : { text } ,  filter_products , sorting ,updateFilterValue  } = useFilterContext();
   console.log(' filter_prod is ',filter_products);

  return (
    <div>
          <div className = "allfilter-container">
                <span>  Search by DropDown  </span>

            <div className="sort-selection"> 
                  <form action = "#">
                    <label htmlFor='sort'> </label>
                    <select name = "sort"
                    id = "sort"
                    className='sort-selection-style'
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

               <span> Search by Typing -  </span>
              <div className = "filter-search">
                  <form onSubmit = {(e) => e.preventDefault()} >
                      <input type = "text"  
                       name = "text"        
                       value = {text}           
                       onChange = {updateFilterValue} />  
                  </form>
              </div>
          </div>
    </div>
  )
}

export default AllFilters