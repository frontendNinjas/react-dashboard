import React from 'react';

const ThemeList = (props) => {
  return (
     <li>
       <img className="themeImages" src={props.detail.sample}/>
       {props.detail.name}
    </li>
  )
}

export default ThemeList