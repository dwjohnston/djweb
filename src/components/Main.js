require('normalize.css/normalize.css');
require('styles/style.scss');

import React from 'react';
import BootstrapModule from 'components/modules/bootstrap';
import D3Module from 'components/modules/d3';
import OpenDataModule from 'components/modules/opendata';

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
        </div>

        <div id = "body">
          <div className = "module-container">

            <BootstrapModule/>

            <D3Module/>

            <CssAnimationModule/>
            <OpenDataModule />
            <div className = "module">
              <div className = "header">
                header
              </div>
              <div className ="body">

              body

              </div>
              foo
            </div>

            <div className = "module">
              <div className = "header">
                header
              </div>
              <div className ="body">

                body

              </div>
            </div>

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
