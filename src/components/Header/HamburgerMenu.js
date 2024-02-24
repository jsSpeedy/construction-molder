import React, { useState } from "react";
import styled from "styled-components";

const HeaderBar = styled.div`
  position: relative;
  width: 31px;
  height: 20px;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }

  span {
    position: absolute;
    width: 100%;
    height: 2px;
    display: inline-block;
    transition: all 0.3s;
    left: 0;
    background: var(--white);

    &:first-child {
      top: 0;
    }

    &:nth-child(2) {
      top: 44%;
    }

    &:last-child {
      bottom: 0;
    }
  }

  &.active span:first-child {
    transform: rotate(45deg) translate(3px, 9px);
  }

  &.active span:nth-child(2) {
    opacity: 0;
  }

  &.active span:last-child {
    transform: rotate(-45deg) translate(3px, -9px);
  }
`;

const Menu = styled.div`
  position: fixed;
  top: 54px;
  width: 100%;
  left: 0;
  margin-top: 20px;
  z-index: 999;
  padding: 15px;
  transition: all 0.4s;
  transform-origin: top;
  max-height: calc(100vh - 130px);
  background: var(--subtitle);
  overflow-y: auto;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  cursor: pointer;
`;

const MenuItem = styled.div`
  width: 100%;
  border-radius: 2px;
  border-bottom: 1px solid rgba(170, 181, 200, 0.5);
  transition: all 0.4s;
  position: relative;
`;

const MenuItemButton = styled.a`
  display: block;
  color: var(--white);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  text-transform: uppercase;
  padding: 16px 2px;

  &:hover {
    color: var(--base);
  }
`;

const menuData = [
  "Anasayfa",
  "Hakkımızda",
  "Faaliyetlerimiz",
  "Hizmetlerimiz",
  "İletişim",
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderBar className={isOpen ? "active" : ""} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </HeaderBar>
      <Menu isOpen={isOpen}>
        {menuData.map((item, index) => (
          <MenuItem key={index}>
            <MenuItemButton>{item}</MenuItemButton>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default HamburgerMenu;
