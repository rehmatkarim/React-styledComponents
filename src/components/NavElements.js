import Styled from "styled-components";

export const Navbar = Styled.div`
  display:flex;
  justify-content:space-between;
  padding:20px 5px;
  background:green;
`;

export const NavBarBrand = Styled.h4`
    font-size:1rem;
    color:#fff;
    font-weight:500;
    
`;

export const NavItems = Styled.div`
  display:flex;
  justify-content:space-between;
`;
export const NavLinks = Styled.a`
  color:#fff;
  cursor:pointer;
  margin: 0 5px;
`;
