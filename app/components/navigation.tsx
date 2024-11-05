"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // AnimatePresence を追加
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import Image from "next/image";

const NAV_ITEMS = [
  { href: "/about", label: "ABOUT" },
  {
    href: "/works",
    label: "WORKS",
    subItems: [
      { href: "/works/3d-modeling", label: "3Dモデリング" },
      { href: "/works/vr-furniture", label: "VR家具配置システム" },
      { href: "/works/360-content", label: "360°コンテンツ" },
      { href: "/works/other-works", label: "その他" },
    ],
  },
  { href: "/news", label: "NEWS" },
  { href: "/teams", label: "TEAMS" },
];

const navMotion = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { duration: 0.5 },
};

const Nav = styled(motion.nav)`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s;
  backdrop-filter: blur(10px);
`;

const NavList = styled.div`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.div`
  position: relative;
  
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
    &:hover {
      color: #00b4d8;
    }
  }
  
  &:hover > div {
    display: block;
  }
`;

const SubMenu = styled(motion.div)`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background-color: rgba(15, 15, 15, 0.9);
  border: 1px solid #00b4d8;
  border-radius: 8px;
  padding: 1rem;
  z-index: 1000;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const SubMenuItem = styled(Link)`
  display: block;
  padding: 0.5rem 0;
  color: white;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #00b4d8;
  }
`;

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav
      className={`${isScrolled || pathname !== "/" ? "bg-black/80" : "bg-black/50"}`}
      initial={navMotion.initial}
      animate={navMotion.animate}
      transition={navMotion.transition}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-4xl font-bold text-white">
            <Image src="/logo.png" alt="COLAPIS Logo" width={250} height={250} />
          </Link>
          <NavList className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.href}>
                <Link href={item.href} className={`${pathname === item.href ? "text-blue-500" : "text-white"} relative hover:text-blue-500 transition-colors`}>
                  {item.label}
                </Link>
                {item.subItems && (
                  <AnimatePresence>
                    <SubMenu
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {item.subItems.map((subItem) => (
                        <SubMenuItem key={subItem.href} href={subItem.href}>
                          {subItem.label}
                        </SubMenuItem>
                      ))}
                    </SubMenu>
                  </AnimatePresence>
                )}
              </NavItem>
            ))}
          </NavList>
        </div>
      </div>
    </Nav>
  );
}