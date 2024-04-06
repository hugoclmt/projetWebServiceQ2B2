import Header from "./Components/Header"
import Product from "./Components/Product";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderCartButton from "./Components/HeaderCartButton";

function App() {
    return(
        <React.Fragment>
            <Header/>
            <HeaderCartButton/>
            <Product/>
        </React.Fragment>
    );
}
export default App
