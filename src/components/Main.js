require('normalize.css/normalize.css');
require('styles/style.scss');

import React from 'react';

import BootstrapModule from 'components/modules/bootstrap';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div id = "header">
          <h1>David Johnston</h1><span>Web developer</span>
          <p>
            This website is mobile friendly
          </p>
        </div>

        <div className = "module-container">

          <BootstrapModule/> 

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
