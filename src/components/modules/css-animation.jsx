import React from 'react';
require('styles/module/css-animation.scss');

class CssAnimationModule extends React.Component {

  render() {
    return <div className ="module" id = "css-animation">
      <div className ="header"> CSS Animations</div>

      <div className ="body">

        <p>
          Mouse over to see the animations
        </p>

        <div className ="animation-example fade-in"> Fade In </div>
        <div className ="animation-example slide-down">
          <span> Slide in</span>

          <div className = "inner">
              <button> Click me</button>


              <div className = "bottom"/> 

          </div>
        </div>

      </div>
    </div>;
  }
}

export default CssAnimationModule;
