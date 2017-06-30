import React from 'react';
import {Panel, ButtonToolbar, Button} from 'react-bootstrap';
require('styles/module/bootstrap.scss');

class BootstrapModule extends React.Component {

  render() {
    return <div className ="module" id = "bootstrap">
      <div className ="header"> Bootstrap</div>

      <div className ="body">

        <Panel bsStyle ="primary" header="My Nice Form">



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
