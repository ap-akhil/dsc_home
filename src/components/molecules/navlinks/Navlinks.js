import React from 'react';
import Link from '../../atoms/link/link';

export default function Navlinks() {
    return (
        <div className="main-nav-links">
            <Link className="link-nav" href="#" content="Home" type="nav"/>
            <Link className="link-nav" href="#" content="Explore" type="nav"/>
            <Link className="link-nav" href="#" content="Kids" type="nav"/>
            <Link className="link-nav" href="#" content="Shorts" type="nav"/>
            <Link className="link-nav" href="#" content="Premium" type="nav"/>
        </div>
    )
}
