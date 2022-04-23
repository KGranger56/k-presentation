import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #052be9;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  @media screen and (max-width: 576px) {
    height: 20px;
    justify-content: flex-start;
  }
`;

export const NavLink = styled(Link)`
  color: #c6ddfe;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #c6cbfe;
    @media screen and (max-width: 576px) {
      align-items: flex-start;
      padding-left: 0px;
      padding-right: 0px;
    }
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #c6ddfe;
  @media screen and (max-width: 576px) {
    display: block;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 576px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;
