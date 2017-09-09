'use strict';

import React from 'react';
import PropTypes from 'prop-types';


let Module = (props) => (
  <section className={'module ' + props.className} id = {props.id}>

    <div className = "module-title"> <h2>{props.title}</h2></div>
    <div className = "module-body">
      {props.children}
    </div>
  </section>
);

Module.displayName = 'Module';

// Uncomment properties you need
Module.propTypes = {
  title: PropTypes.string,
  id : PropTypes.string,
  className: PropTypes.string,
};
// ModuleContainerComponent.defaultProps = {};

export default Module;
