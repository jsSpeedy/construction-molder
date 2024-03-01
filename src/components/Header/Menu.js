"use client";
import styled from "styled-components";

const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const HeaderMenuItems = styled.li`
  transition: all 0.4s;
  position: relative;
`;

const HeaderMenuItem = styled.a`
  color: var(--white);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  text-transform: uppercase;
  padding: 40px 29px;
  cursor: pointer;

  &:hover {
    color: var(--base);
  }

  @media (max-width: 1535px) {
    font-size: 16px;
    padding: 16px;
  }

  @media (max-width: 1280px) {
    font-size: 14px;
    padding: 16px 10px;
  }
`;

const menuItem = [
  "Anasayfa",
  "Hakkımızda",
  "Faaliyetlerimiz",
  "Hizmetlerimiz",
  "İletişim",
];

const Menu = () => {
  return (
    <HeaderMenu>
      <HeaderMenuItems>
        {menuItem.map((item, index) => (
          <HeaderMenuItem key={index}>{item}</HeaderMenuItem>
        ))}
      </HeaderMenuItems>
    </HeaderMenu>
  );
};

export default Menu;
