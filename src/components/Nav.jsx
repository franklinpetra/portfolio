import React from 'react';

const Nav = () => {
    return (
        <div>
            <nav className="justify-content-center navbar-expand-lg fixed-top" id="mainNav" style={{whiteSpace:"nowrap"}}>
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarResponsive"  style={{ marginBottom:"0", paddingBottom:"0"}}>
                        <ul className="navbar-nav text-uppercase h1">
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Purpose</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">Kingdom Come</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Time machine</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Playground</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Reach Out</a></li>
                        </ul>              
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
