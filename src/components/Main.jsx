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
        <header>

          <div>
            <h1>David Johnston</h1><span className ="sub-title">Web developer</span>
            <p>
              HTML/CSS/Javascript/React/Redux
            </p>
            <p>
              NodeJs/Java
            </p>
            <p>
              <a href ="/cv/cv.html" target ="blank">Curriculum Vitae</a>
            </p>

          </div>

          <div id = "github-link">
            <a href = "https://github.com/dwjohnston/djweb"> <img className ="icon icon-github icon-large"/></a>



          </div>




        </header>

        <div id = "body">
          <div className = "module-container">

            <BootstrapModule/>
            <D3Module/>
            {/*<CssAnimationModule/>*/}
            <OpenDataModule />

          </div>
        </div>

        <footer>

          <div className ="badges">
            <a href = "https://www.youracclaim.com/badges/84a550b9-3a71-4c15-813d-a7a52259e1dc/public_url" target ="_blank">
              <img className ="badge badge-oracle" alt ="Oracle Certified Associate, Java SE 8 Programmer"/>
            </a>
          </div>


          <table className= "contact-details">

            <tr>
              <td><img className="icon icon-phone"/></td>
              <td>+64 22 473 8301 </td>
            </tr>

            <tr>
              <td><img className="icon icon-email"/> </td>
              <td><a href ="mailto:david@blacksheepcode.com">david@blacksheepcode.com</a> </td>
            </tr>

            <tr>
              <td><img className="icon icon-github"/> </td>
              <td><a href = "https://github.com/dwjohnston" target ="_blank"> https://github.com/dwjohnston</a> </td>
            </tr>
            <tr>

              <td><img className="icon icon-stackoverflow"/> </td>
              <td><a href ="https://stackoverflow.com/users/1068446/dwjohnston" target ="_blank">https://stackoverflow.com/users/1068446/dwjohnston</a> </td>
            </tr>
            <tr>

              <td><img className="icon icon-linkedin"/> </td>
              <td><a href ="www.linkedin.com/in/davidjohnstonwebdevelope" target ="_blank">www.linkedin.com/in/davidjohnstonwebdeveloper</a></td>
            </tr>
          </table>



        </footer>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
