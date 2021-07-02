import React from 'react';
import Logocontainer from '../../molecules/logocontainer/Logocontainer';
import Navlinks from '../../molecules/navlinks/Navlinks';
import Searchbar from '../../molecules/searchbar/searchbar';
import Signin from '../../molecules/signin/Signin';
import './style.css';

export default function Header() {
    return (
        
            <div className="header-container">
            <Logocontainer />
           <Navlinks />
           <Searchbar />
           <Signin />
            </div>
           
       
    )
}
