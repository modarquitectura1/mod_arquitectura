"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import MetisMenu from "metismenujs";
import "metismenujs/sass";

export default function MobileMenuNavBar({ menuItems }) {
  const menuRef = useRef(null);

  useEffect(() => {
    new MetisMenu("#mobile-menu");
  }, []);

  return (
    <div className="mobile-nav-bar d-block col-sm-1 col-2 d-lg-none">
      <div className="mobile-nav-wrap">
        <div id="hamburger">
          <i className="las la-bars" />
        </div>

        {/* Mobile Responsive Menu */}
        <div className="mobile-nav">
          <button type="button" className="close-nav">
            <i className="las la-times-circle" />
          </button>
          <nav className="sidebar-nav">
            <ul className="metismenu" id="mobile-menu" ref={menuRef}>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={item.subMenu ? "has-arrow" : ""}
                  >
                    {item.label}
                  </Link>
                  {item.subMenu && (
                    <ul className="sub-menu">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link href={subItem.link}>{subItem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Action Bar */}
          <div className="action-bar">
            <a href="mailto:modarquitectura1@gmail.com">
              <i className="las la-envelope" /> modarquitectura1@gmail.com
            </a>
            <a href="tel:+573002814117">
              <i className="fal fa-phone" /> 3002814117
            </a>
            <Link href="/contacto" className="white-btn">
              Contactanos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
