import React from "react";

const Header: React.FC = ()=>{
    return(
        <header>
            <div className="header-wrap">
                <BugerMenu/>
                <HeaderTitle/>
                <div className="header-icon">
                    <HeaderCart/>
                    <HeaderSearch/>
                </div>
            </div>
        </header>
    );
}

export default Header;

const BugerMenu: React.FC = ()=>{
    return(
        <>
            <div className="bugermenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className="menu">
                <p className="bg"></p>
                <div className="mobile-menu">
                    <div className="x">
                        <span></span>
                        <span></span>
                    </div>
                    <p className="s-title">
                        <a href="/"><img src="./img/logo-w.png" alt=""/></a>
                    </p>
                    <div className="m-wrap">
                        <ul className="m-list">
                            <li><a href="goodslist.html">new collection</a></li>
                            <li><a href="goodslist.html">outers</a></li>
                            <li><a href="goodslist.html">hrefps</a></li>
                            <li><a href="goodslist.html">bothrefms</a></li>
                            <li><a href="goodslist.html">acc</a></li>
                            <li><a href="goodslist.html">outlet</a></li>
                        </ul>
                        <ul className="s-list">
                            <li><a href="#">event</a></li>
                            <li><a href="#">special</a></li>
                            <li><a href="#">lookbook</a></li>
                            <li><a href="#">cs center</a></li>
                        </ul>
                        <ul className="my">
                            <li><a href="login.html">login</a></li>
                            <li><a href="#">join</a></li>
                            <li><a href="#">cart</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

const HeaderTitle: React.FC = ()=>{
    return(
        <p className="title">
            <a href="/">
                <img src="./img/logo.png" alt="로고"/>
            </a>
        </p>
    );
}

const HeaderCart: React.FC = ()=>{
    return(
        <span>
            <a href="cart.html">
                <span>0</span><img src="./img/icon-cart.png" alt="장바구니"/>
            </a>
        </span>
    );
}

const HeaderSearch: React.FC = ()=>{
    return(
        <span>
            <a href="#">
                <img src="./img/icon-search.png" alt="검색"/>
            </a>
        </span>
    );
}