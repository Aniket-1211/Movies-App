import {Component} from 'react';

class Navbar extends Component{
    render (){
        return(
        <div style={{display:'flex',padding0:'.5rem',color:'blue'}}>
            <h1>Movies App</h1>
            <h2 style={{marginLeft:'2rem',marginTop:'.4rem'}}>Favourites</h2>
         </div> 
        )
    }
}
export default Navbar;
