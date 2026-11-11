"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import MetisMenu from "metismenujs";
import "metismenujs/sass";
import Image from "next/image";
import igIcon from "@/assets/img/ig-icon.png";

const INSTAGRAM_URL = "https://www.instagram.com/mod_arquitectura/";

export function MobileNavPanel({ menuItems }) {
  const menuRef = useRef(null);

  useEffect(() => {
    new MetisMenu("#mobile-menu");
  }, []);

  return (
    <div className="mobile-nav">
      <button type="button" className="close-nav">
        <i className="las la-times-circle" />
      </button>
      <nav className="sidebar-nav">
        <ul className="metismenu" id="mobile-menu" ref={menuRef}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link} className={item.subMenu ? "has-arrow" : ""}>
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
  );
}

export default function MobileMenuNavBar() {
  return (
    <div className="mobile-nav-bar d-block d-lg-none">
        <div className="mobile-nav-wrap">
          <div className="mobile-nav-actions">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="header-ig-link"
              aria-label="Instagram de MOD Arquitectura"
            >
              <Image
                src={igIcon}
                alt="Instagram"
                width={32}
                height={32}
                unoptimized
              />
            </a>
            <div id="hamburger">
              <i className="las la-bars" />
            </div>
          </div>
        </div>
    </div>
  );
}
