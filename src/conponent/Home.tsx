import React from "react";

const Home: React.FC= ()=>{
    return(
        <main>
            <div className="slide-1">
                <p className="s1-nav">
                    <span>01</span>
                    <span><span></span></span>
                    <span>03</span>
                </p>
                <p className="more">
                    <a href="#">view more</a>
                </p>
                <div className="s1-img">
                    <img src="./img/main/main1-1.jpg" alt=""/>
                </div>
            </div>
            <div className="slide-2">
                <div className="s2-img">
                    <img src="./img/main/main2-1.jpg" alt=""/>
                </div>
                <p className="s2-nav"><span></span></p>
            </div>
        </main>
    );
}

export default Home;