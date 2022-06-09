import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// conponent
import Header from './conponent/Header';
import Footer from './conponent/Footer';
import Home from './conponent/Home';
// css
import './css/index.css';

const App: React.FC = ()=>{
  function getPagename():void{
    
  }
  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;

// 메뉴와 메인의 구조
// App -> Header -> HeaderMenu에서 메뉴명, url 가져오기(리덕스 적용?)
// main에 브라우저 라우터로 컨포넌트 페이지 호출!