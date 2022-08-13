//client/components/Searchbar.jsx
import React from 'react'; 
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

const Searchbar = props => {

    handleSubmit = () => {
        //fetch// lets use axios
    }
    //need second input section for Date? (maybe just month?)
  return (
    <div className="searchbar">
        <form onSubmit={handleSubmit}>
             <input className = "search-input" name="search-input" id="search-input" type="text" ></input>
             <input className = "search-btn" type="submit" value="Search"></input>
        </form>
    </div>
  )

}









export default Searchbar;