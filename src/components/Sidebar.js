import React, { useState, useEffect } from "react";
import './Sidebar.css';
import firebase from 'firebase/app';
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars , faHome , faShoppingBag , faTruck , faHeart , faUserCircle , faEnvelope } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import { Link } from "react-router-dom";

function Sidebar(){

    const [isOpen, setIsOpen] = useState(false);
    const [isSignin, setIsSignin] = useState(false);

    const menuItems = [
        { title: "Home", icon: faHome, to: "/" },
        { title: "Cart", icon: faShoppingBag, to: "/cart" },
        { title: "My Orders", icon: faTruck, to: "/orders" },
        { title: "Wish List", icon: faHeart, to: "/wish" },
        { title: "Account", icon: faUserCircle, to: isSignin ? "/account" : '/login' },
        { title: "Constact us", icon: faEnvelope, to: "/contact" }
    ];

    const userState = ()=>{
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setIsSignin(true);
            } else {
                setIsSignin(false);
            }
        });
    }

    useEffect(()=>{
        userState()
    },[isSignin])

    return (
        <div className={cx("sidebar", { "sidebar-closed": !isOpen })}>
            <button className={"toggle_button"} onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faBars} style={{height:"20px"}} />
            </button>
            <ul >
                {menuItems.map(item => (
                
                    <li key={item.title} className="sidebar_buttons" >
                        <Link to={item.to} className="link" >
                            <div className={"sidebar__listItem"}>
                                <div className={"sidebar__icon"} >
                                    <FontAwesomeIcon style={{height:"20px"}} icon={item.icon} />
                                </div>
                                <CSSTransition
                                    in={isOpen}
                                    timeout={200}
                                    classNames={"fade"}
                                    unmountOnExit
                                >
                                    <span>{item.title}</span>
                                </CSSTransition>
                            </div>
                        </Link>
                    </li>
                
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;