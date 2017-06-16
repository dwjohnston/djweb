import React from 'react';
//import '!style!css!bootstrap/dist/css/bootstrap.min.css';


class BootstrapModule extends React.Component {

  render() {
    return <div className ="module" id = "bootstrap">
      <div className ="header"> Bootstrap</div>

      <div className ="body">
        <button className ="btn btn-primary" value = "foo">foo</button>

        aaa
      </div>
    </div>;
  }
}

export default BootstrapModule;
