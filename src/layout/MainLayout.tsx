import React from 'react';
import {Link, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <h3><Link to={'/pokemon'}>pokemon</Link></h3>
            <h3><Link to={'/favorite'}>favorite</Link></h3>
            <h3><Link to={'/search'}>search</Link></h3>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;