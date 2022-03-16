import React from "react";
import styledComponents from "styled-components";
import "./Button.css";
//to install styled components package
//npm install --save styled-components
//used to create components with its own css code.
//in case of big code base, names of css classes can be same
//and those undesired styles will be applied just by importing the css file
//to avoid this problem, this package was made
//it creates unique css classes behind the scenes- (inspect element to see this)
//const Button=styledComponents.button``;
//button`` is like a function. similarly div, p and all present
//syntax to create a styled component and css code goes between commas
//adding media querries - styling based on device size
const Button = styledComponents.button`

width: 100%;
@media(min-width:768px){
width:auto;
}
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;


&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}

`;

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
