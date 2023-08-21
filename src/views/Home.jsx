import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import CreateVinoForm from '../components/CreateVinoForm/CreateVinoForm';

const Home = ()=>{
    return(

        <div>
            <div>
            <Navbar/> 
            </div>
            <CreateVinoForm/>
        </div>
    )
}

export default Home;