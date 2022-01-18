import React, { useState, useReducer, useRef } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import * as BsIcons from 'react-icons/bs';
import './Navbar.css';
/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from 'react-icons';
import Express from '../pages/Express';
import Order from '../pages/Order';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [display, setDisplay] = useState()
  const [closeBtn , setCloseBtn] = useState(false)

  const btn =(index) =>{
    setCloseBtn(false)
    setDisplay(index)
  }
  const btn2 =()=>{
    
  const result = [];
  var i;
  for(i=0; i<=SidebarData.length; i++){
      result.push(SidebarData[i].title);
      return <div className="navbar">
      <Link to="/express" className="menu-bars" style={{ color : "white", display : "flex", marginLeft : "300px"}}>
            <BsIcons.BsPersonBoundingBox />{SidebarData[0].title}  <Link to="" className="menu-bars"> <AiIcons.AiOutlineClose onClick={()=>setCloseBtn(true)} /></Link>
      </Link>
      <Link to="/order" className="menu-bars" style={{ color : "white", display : "flex"}}>
            <BsIcons.BsPersonBoundingBox />{SidebarData[1].title}  <Link to="" className="menu-bars"> <AiIcons.AiOutlineClose onClick={()=>setCloseBtn(true)} /></Link>
      </Link>
    </div>
  }
 
  }

  const sss = () =>{ 

    switch(display){
      case 0 : return  <>
      <div className="navbar">
        <Link to="/express" className="menu-bars" style={{ color : "white", display : "flex", marginLeft : "300px"}}>
              <BsIcons.BsPersonBoundingBox />특송
           <Link to="" className="menu-bars"> <AiIcons.AiOutlineClose onClick={()=>setCloseBtn(true)} /></Link>
        </Link>
        
      </div>
      <Express />
       </>
      ;
      case 1 : return  <>
      <div className="navbar">
        <Link to="/order" className="menu-bars" style={{ color : "white", display : "flex", marginLeft : "300px"}}>
              <BsIcons.BsPersonBoundingBox />주문
           <Link to="" className="menu-bars"> <AiIcons.AiOutlineClose onClick={()=>setCloseBtn(true)} /></Link>
        </Link>
      </div>
      <Order/>
       </>
      ;

      default:
      return <></>
    }
  }

  return (
    <>

      {/* 아이콘 컬러 전체 변경 기능 */}
      <IconContext.Provider value={{ color: '#fff' }}>
        {/* 네비게이션 토글 코드*/}   
            {display >= 0  && !closeBtn ?  btn2() : <><div className="navbar"></div></>}
         {/* <div className='navbar'>
         <Link to="/express" className="menu-bars" style={{ color : "white", display : "flex", marginLeft : "300px"}}>
            <BsIcons.BsPersonBoundingBox />{SidebarData[0].title}  <Link to="" className="menu-bars"> <AiIcons.AiOutlineClose onClick={()=>setCloseBtn(true)} /></Link>
          </Link>
        <Link to="/order" className="menu-bars" style={{ color : "white", display : "flex"}}>
            <BsIcons.BsPersonBoundingBox />{SidebarData[1].title}  <Link to="" className="menu-bars"> <AiIcons.AiOutlineClose onClick={()=>setCloseBtn(true)} /></Link>
          </Link>
        </div>
             */}

        <nav className= 'nav-menu active'>
          <ul className="nav-menu-items">

    
            
            {/* SidebarData를 순서대로 담기*/}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} >
                    {item.icon}
                    <span style={{color: "white" , cursor:"pointer" }} onClick={()=>btn(index)} 
                    >{item.title}</span>
                 </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;