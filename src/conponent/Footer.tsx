import React from "react";

const Footer: React.FC = ()=>{
    return(
        <footer>
            <div className="footer-warp">
                <div className="f-title">
                    <a href="index.html"><img src="./img/logo-b.png" alt=""/></a> 
                </div>
                <div className="f-sm">
                    <span><a href="#">about us</a></span>
                    <span><a href="#">terms</a></span>
                    <span><a href="#">privacy policy</a></span>
                    <span><a href="#">customer sercive</a></span>
                </div>
                <div className="f-dt">
                    COMPANY : 케이투코리아(주) I 대표 : 정영훈<br/>
                    서울특별시 강남구 자곡로 174-14, 901호(자곡동) I 02-1644-7781(유료) I 080-468-7782 (수신자부담)<br/>
                    사업자등록번호 : 137-81-14921 I 통신판매업신고번호 : 제2019-서울강남-02482호 
                </div>
                <div className="sns">
                    <span>follow us!</span>
                    <p>
                        <a href="#">
                            <img src="./img/insta.png" alt=""/>
                        </a>
                    </p>
                </div>
                <p>COPYRIGHT © 2020. ALL RIGHTS RESERVED</p>
            </div>
        </footer>
    );
}

export default Footer;