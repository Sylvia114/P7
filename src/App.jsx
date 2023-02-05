import React from "react" 
import { Routes, Route } from "react-router-dom"
import '../src/App.css'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./components/Error"

import Home from "./pages/Home"
import Accomodation from "./pages/Accomodation"
import AboutUs from './pages/AboutUs'

function App() {
    return (
        <React.StrictMode>
            <div className="appStyle">
                <Header />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/accomodation/:id' element={<Accomodation/>}/>
                    <Route path='/aboutus' element={<AboutUs/>}/>
                    <Route path='*' element={<Error/>}/>                
                </Routes>  
                <Footer />              
            </div>            
        </React.StrictMode>
    )
}

export default App;
