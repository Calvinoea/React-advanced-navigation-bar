import React from 'react';

import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';


function App() {
    return ( < Navbar > < NavItem icon = "😊" / > < NavItem icon = "😊" / > < NavItem icon = "😊" / >
        <
        NavItem icon = "😊" >
        <
        DropdownMenu > < /DropdownMenu> < /
        NavItem >


        <
        /Navbar > );
    }

    function DropdownMenu() {

        const [activeMenu, setActiveMenu] = useState('main');

        function DropdownItem(props) {
            return ( <
                a href = "#"
                className = "menu-item"
                onclick = {
                    () => props.goToMenu && setActiveMenu(props.goToMenu)
                } > < span className = "icon-button" > { props.leftIcon } < /span> { props.children } <
                span className = "icon-right" > { props.rightIcon } < /span> < /
                a >



            );


        }


        return ( <
            div className = "dropdown" >
            <
            CSSTransition in = { activeMenu === 'main' }
            unmountOnExit timeout = { 500 }
            classNames = "menu-primary" >
            <
            div className = "menu" >
            <
            DropdownItem > My Profile < /DropdownItem> <
            DropdownItem leftIcon = "😊"
            rightIcon = "😊" > My Inbox < /DropdownItem> < /
            div >

            <
            /
            CSSTransition >

            <
            CSSTransition in = { activeMenu === 'inbox' }
            unmountOnExit timeout = { 500 }
            classNames = "menu-secondary" >
            <
            div className = "menu" >
            <
            DropdownItem > My Profile < /DropdownItem> <
            DropdownItem leftIcon = "😊"
            rightIcon = "😊" > My Inbox < /DropdownItem> < /
            div >

            <
            /
            CSSTransition >




            <
            /div>



        );
    }




    function Navbar(props) {
        return ( <
            nav className = "navbar" >
            <
            ul className = "navbar-nav" > { props.children } < /ul> < /
            nav >
        );
    }

    function NavItem(props) {

        const [open, setOpen] = useState(false);

        return (

            <
            li className = "nav-item" >
            <
            a href = "#"
            className = "icon-button"
            onClick = {
                () => setOpen(!open)
            } > { props.icon } < /a>

            { open && props.children }


            <
            /
            li >


        );
    }


    export default App;