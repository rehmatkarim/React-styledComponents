import Styled from "styled-components";
import bg from "../public/images/contact.jpg";

export const Wrapper = Styled.div`
 background-image : url(${bg});
 background-size:cover;
 background-position:center;
 background-repeat:no-repeat;
 padding:258px 0;


`;
export const Title = Styled.h1`
  font-size:2.5rem;
  text-align:center;
  font-weight:800;
  color:#fff;
`;

export const ButtonWrapper = Styled.div`
  display:flex;
  justify-content:center;
  

`;

export const Button = Styled.button`
  background:${(props) => (props.primary ? "green" : "white")};
  color:${(props) => (props.primary ? "white" : "green")};
  border:2px solid green;
  border-radius:3px;
  margin:1em;
  font-size:1em;
  padding: 0.25em 1em;
  cursor:pointer;
`;
