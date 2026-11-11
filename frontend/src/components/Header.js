"use client";

import Link from "next/link";
import { menuItems } from "@/data/menu";
import MobileMenuNavBar from "@/components/MobileMenuNavBar";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/img/logo_mod.jpg";
import igIcon from "@/assets/img/ig-icon.png";

const INSTAGRAM_URL = "https://www.instagram.com/mod_arquitectura/";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 400) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header-area">
      <div className={isSticky ? "header-sticky" : ""} id="header-sticky">
        <div className="navigation">
          <div className="container">
            <div className="header-inner-box">
              {/* Logo */}
              <Link href="/" className="logo">
                <Image src={logo} alt="logo" width={200} />
              </Link>

              {/* Desktop Menu */}
              <div className="main-menu d-none d-lg-block">
                <ul>
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className={item.subMenu ? "has-submenu" : ""}
                    >
                      <Link href={item.link} className="navlink">
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
              </div>

              {/* Header Right: Instagram + Menu Trigger */}
              <div className="header-right">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-ig-link d-none d-lg-inline-flex"
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
                <div className="header-btn">
                  <div className="menu-trigger">
                    <span className="lines" />
                    <span className="lines" />
                    <span className="lines" />
                  </div>
                </div>
              </div>

              {/* Mobile Menu */}
              <MobileMenuNavBar menuItems={menuItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
