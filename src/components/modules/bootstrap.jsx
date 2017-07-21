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
   <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
   <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
   <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
 </Tabs>






  <DropdownButton title="Flavour" id="bg-vertical-dropdown-1">
    <MenuItem eventKey="1">Chocolate</MenuItem>
    <MenuItem eventKey="2">Vanilla</MenuItem>
    <MenuItem eventKey="3">Strawberry</MenuItem>
  </DropdownButton>


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
