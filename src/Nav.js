import React,{useEffect,useState}from 'react'
import './Nav.css'

function Nav() {
    const [show,handleShow] = useState(false)
    useEffect(() => {
    window.addEventListener("scroll", function listener(){
      if(window.scrollY > 100){
        handleShow(true)
      }else handleShow(false)
      
      return () => {
        window.removeEventListener("scroll",listener)
      }
    })
  },[])

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="netflix-logo"></img>
    </div>
  );
}

export default Nav;