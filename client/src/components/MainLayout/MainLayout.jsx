import {Link, Outlet} from 'react-router-dom';
import React from 'react'
export default function MainLayout(){
    return(
        <>
            <div className="container">
                <header>
                    <h1>Welcome</h1>
                     <nav>
                        <Link to='/' className='btn'>register</Link>
                        <Link to='/login' className='btn'>login</Link>
                     </nav>
                </header>
                <div className='content'>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}