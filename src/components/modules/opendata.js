import React from 'react';


class OpenDataModule extends React.Component {





  constructor() {
    super();

    let apiBase = "https://data.ct.gov/resource/y6p2-px98.json";
    let qParam = "farmer_id";

    fetch(apiBase + "?farmer_id=3402").then(result=> result.json())
    .then(json => console.log(json))
    ;
  }

  render() {
    return <div className ="module" id = "bootstrap">
      <div className ="header"> Open Data</div>

      <div className ="body">
      open data

      </div>
    </div>;
  }
}

export default OpenDataModule;
