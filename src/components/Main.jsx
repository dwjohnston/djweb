require('normalize.css/normalize.css');
require('styles/style.scss');

import React from 'react';
import BootstrapModule from 'components/modules/bootstrap';
import D3Module from 'components/modules/d3';
import OpenDataModule from 'components/modules/opendata';
import Module from 'components/Module';


import CssAnimationModule from 'components/modules/css-animation';
class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div id = "header">
          <h1>David Johnston</h1><span>Web developer</span>
          <p>
            This website is mobile friendly
          </p>
          <p>
            This project is on github. Follow it here: <a href="https://github.com/dwjohnston/djweb">https://github.com/dwjohnston/djweb</a>
        </p>

        <p>

          <strong> FAQ</strong>
          <ul>
            <li> Q. This website looks ugly! </li>
            <li> A. I'm prioritising functionality over looks. I'm putting this up as quick as I can yo. </li>
          </ul>
        </p>



      </div>

      <div id = "body">
        <div className = "module-container">

          <BootstrapModule/>
          <D3Module/>
          {/*<CssAnimationModule/>*/}
          <OpenDataModule />

        </div>
      </div>

      <div id ="footer">
        footer
      </div>
    </div>
  );
}
}

AppComponent.defaultProps = {
};

export default AppComponent;
