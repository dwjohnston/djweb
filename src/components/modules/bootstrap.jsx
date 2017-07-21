import React from 'react';
import {Panel, ButtonToolbar, Button, DropdownButton, ButtonGroup, MenuItem, Tabs, Tab} from 'react-bootstrap';
require('styles/module/bootstrap.scss');

class BootstrapModule extends React.Component {

  render() {
    return <div className ="module" id = "bootstrap">
      <div className ="header"> Bootstrap</div>

      <div className ="body">

        <Panel bsStyle ="primary" header="My Nice Form">

          <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Tab 1">


              <DropdownButton title="Flavour" id="bg-vertical-dropdown-1">
                <MenuItem eventKey="1">Chocolate</MenuItem>
                <MenuItem eventKey="2">Vanilla</MenuItem>
                <MenuItem eventKey="3">Strawberry</MenuItem>
              </DropdownButton>



            </Tab>
            <Tab eventKey={2} title="Tab 2">
              <p>
                Lorem ipsum dolor sit amet, at quaestio consetetur pro. Qui doming graecis an, mazim fierent at est. An brute ullum eos, libris fuisset duo et, et duo vide ornatus detraxit. Ex facer paulo facilisi sit, posse minimum cu vim, vel animal delenit suscipiantur ex. Ut mediocrem principes definitionem sit, ne dicant possim assueverit mel. Veri idque appetere usu an, possit equidem neglegentur in duo, vidit commodo eos no. Modus habemus conceptam his at.
              </p>

            </Tab>
          </Tabs>



          <ButtonToolbar className ="pull-right">
            <Button bsStyle="default">Cancel</Button>
            <Button bsStyle="primary">Submit</Button>
          </ButtonToolbar>
        </Panel>

      </div>
    </div>;
  }
}

export default BootstrapModule;
