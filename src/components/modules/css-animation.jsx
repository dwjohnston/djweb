import React from 'react';
require('styles/module/css-animation.scss');

class CssAnimationModule extends React.Component {

  render() {
    return <div className ="module" id = "css-animation">
      <div className ="header"> CSS Animations</div>

      <div className ="body">

        <div className ="animation-example fade-in"> Fade In </div>
        <div className ="animation-example fade-out"> Fade Out </div>
        <div className ="animation-example rotater">  </div>



      </div>
    </div>;
  }
}

export default CssAnimationModule;
