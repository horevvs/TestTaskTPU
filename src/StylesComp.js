
import styled from "styled-components";

export const Container = styled.div`
padding-top: 22px;
justify-content: center;
 display:flex;
 flex-wrap: wrap;
//  background-color: black
`;


export const FlexContainer = styled.div`
    padding: 12px;
    height:200px;
    width: 200px;
    background: red;
    margin: 5px;
`;

export const Btn = styled.button` 
  color: black; 
  border: 2px solid #f44336;
  border: none;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
    &:hover {
   background-color: #f44336;
   color: white;
   }
`;



export const Img = styled.div`
    padding: 10px;
    margin: 5px;
   text-align: center;
   font-size:15px;
   border: 2px solid black;
`;


export const Headercss = styled.div`
    padding: 20px;
   text-align: center;
   font-size:25px
`;

export const Textcss = styled.p`
    padding: 1px;
`;


export const Cartcontainer = styled.div`
  text-align: center
`;

