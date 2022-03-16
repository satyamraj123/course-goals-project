import React from "react";

//CSS MODULES
import styles from "./Button.module.css";
//import like this, and change css file name to name.module.css
//css modules are better than styled components
//it keeps the css code seperate
//and we can choose which style or class to choose from which css file
//here in import, styles is an object
//and all classes as there as properties of that object
//so it solves the problem and keeps the css code seperate


//STYLED COMPONENTS
//import styledComponents from "styled-components";
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
// const Button = styledComponents.button`

// width: 100%;
// @media(min-width:768px){
// width:auto;
// }
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;


// &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }

// `;

const Button = props => {
  //styles.className
  //if another css file imported also, then styles1.className similarly
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
