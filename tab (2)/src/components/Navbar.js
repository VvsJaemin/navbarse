import React, { useState, useReducer, useRef } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import * as BsIcons from "react-icons/bs";
import "./Navbar.css";
/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from "react-icons";
import Express from "../pages/Express";
import Order from "../pages/Order";

function Navbar() {

  const [navbarView, setNavbarView] = useState([]);

  // push Func
  const handleClick = (item) => {
    const isDup = navbarView.filter((val) => val.id === item.id);
    if (isDup.length === 0) {
      setNavbarView((prev) => [...prev, item]);
    }
  };
  // delete Func
  const handleDelete = (id) => {
    const filteredItem = navbarView.filter((item) => item.id !== id);
    setNavbarView(filteredItem);
  };

  // view variable
  const navbar = navbarView.map((item) => {
    console.log("item", item);
    return (
      <div className="menu-bars" key={item.id} style={{ color: "white" }}>
      <Link to={item.path} style={{color :"white"}}>
        {item.icon}
        {item.title}
      </Link>  
      <Link to="" style={{marginLeft : "5px"}}>
        <AiIcons.AiOutlineClose onClick={() => handleDelete(item.id)} />
      </Link>
      </div>
    );
    
  });
  console.log("navbarView" ,navbarView[0]?.path);

  return (
    <>
      {/* 아이콘 컬러 전체 변경 기능 */}
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* 네비게이션 토글 코드*/}
        <div className="navbar" style={{ marginLeft: "250px" }}>
          {navbarView.length > 0 ? navbar : <div className="navbar"></div>}
        </div>
        <nav className="nav-menu active">
          <ul className="nav-menu-items">
            {/* SidebarData를 순서대로 담기*/}
            {SidebarData.map((item) => {
              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path} onClick={() => handleClick(item)}>
                  {item.icon}
                  <span style={{ color: "white", cursor: "pointer" }}>
                    {item.title}
                  </span>
                  </Link>
                </li>
                
              );
            })}

          </ul>
        </nav>
      </IconContext.Provider>
      {/* <div style={{display :"none"}}> <Order style={{ marginLeft : "500px"}}/> </div> */}

      {SidebarData[0].id ==1 ? <Express style={{ marginLeft : "500px"}}/> :<></>}
     {SidebarData[1].id ==2 ? <Order style={{ marginLeft : "500px"}}/>  :<></>}



            


    </>
  );
}

export default Navbar;