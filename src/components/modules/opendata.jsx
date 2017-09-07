import React from 'react';
require('styles/module/opendata.scss');

class Movie extends React.Component {
  constructor(){
    super();
  }

  render() {

console.log(this.props.item);

    return (<div className = "movie">

<table>


{this.props.item && <tbody>
{this.props.item.title &&  <tr>
    <td> Title</td>
    <td> {this.props.item.title}</td>

  </tr>}
{this.props.item.genres &&  <tr>
    <td> Genres</td>
    <td> {this.props.item.genres.map((v)=> v.name+ ", ")}</td>

  </tr>}
  {this.props.item.tagline &&  <tr>
      <td> Tagline</td>
      <td> {this.props.item.tagline}</td>

    </tr>}
    {this.props.item.overview &&  <tr>
        <td> Summary</td>
        <td> {this.props.item.overview}</td>

      </tr>}
      {this.props.item.release_date &&  <tr>
          <td> Release Date</td>
          <td> {this.props.item.release_date}</td>

        </tr>}

        {this.props.item.cast &&  <tr>
            <td> Cast (top five)</td>
            <td> <ul>  {this.props.item.cast.slice(0, 5).map((v,i) => {
                return <li key = {"cast-" + i}> <a href = "#" onClick = {() => {
                    this.props.findPersonById(v.id)}}>{v.name}</a>{" as " +  v.character}</li>;
              })}
                </ul>
            </td>


          </tr>}

          {this.props.item.crew &&  <tr>
              <td> Crew (top five)</td>
              <td> <ul>  {this.props.item.crew.slice(0, 5).map((v,i) => {
                  return <li key = {"crew-" + i}> <a href = "#" onClick = {() => {
                      this.props.findPersonById(v.id)}}>{v.name}</a>  {" - " +  v.job}</li>;
                })}
                  </ul>
              </td>


            </tr>}
</tbody>}
  </table>

  </div>);
  }
}

class Actor extends React.Component {
  constructor(){
    super();
  }

  render() {

    console.log(this.props.item);

    return (<div className = "person">

    <table>
    {this.props.item &&  <tbody>
      {this.props.item.name &&
        <tr>
          <td> Name</td>
          <td> {this.props.item.name}</td>
        </tr>
      }
      {this.props.item.birthday &&
        <tr>
          <td>Birthday</td>
          <td>{this.props.item.birthday}</td>
        </tr>
      }
      {this.props.item.biography &&
        <tr>
          <td> Biography</td>
          <td> {this.props.item.biography}</td>
        </tr>
      }

      {this.props.item.cast && this.props.item.cast.length > 0 &&
        <tr>
          <td> Cast credits (five most recent)</td>
          <td>
            <ul>
            {this.props.item.cast.slice(-6, -1).map((v,i) => {
              return <li key ={"role-" + i}> {v.character + " in "} <a href= "#" onClick = {() => {
                  this.props.findMovieById(v.id)}}> {v.original_title}{v.release_date && " (" + v.release_date.split("-")[0] + ")"} </a></li>
            })}
            </ul>
          </td>
        </tr>
      }

      {this.props.item.crew && this.props.item.crew.length > 0 &&
        <tr>
          <td> Crew credits (five most recent)</td>
          <td>
            <ul>
              {this.props.item.crew.slice(-6, -1).map((v,i) => {
                return <li key = {"job-" +i}> {v.job + " for "}<a href= "#" onClick = {() => {
                    this.props.findMovieById(v.id)}}> {v.original_title}{v.release_date && " (" + v.release_date.split("-")[0] + ")"} </a></li>;
              })}

            </ul>
          </td>
        </tr>
      }




      </tbody>      }
    </table>


  </div>);
  }
}

class OpenDataModule extends React.Component {




  getMovie(id) {
    fetch("/movieApi/movie/" + id).then(result=> result.json())
    .then(json => {

      this.setState( {currentMovie: json, currentPerson: null});

    }
    );



  }

  getPerson(id) {
    fetch("/movieApi/person/" + id).then(result=> result.json())
    .then(json => {

      this.setState( {currentMovie: null, currentPerson: json});

    });
  }




  constructor() {
    super();
    this.state = {currentMovie: {}};

  }

  click() {
    this.getMovie(381288);
  }

  click2() {
    fetch("/api/users")
    .then (res => res.json())
    .then (users => {
      console.log(users);
    });

    }


  render() {
    return <div className ="module" id = "opendata">
      <div className ="header"> Open Data</div>

      <div className ="body">
        <div> <button onClick = {()=>{
            this.click();
          }}> click me</button>

          <button onClick = {()=>{
              this.click2();
            }}> click me</button>


        {this.state.currentMovie &&   <Movie item = {this.state.currentMovie} findPersonById = {(id) => {this.getPerson(id);}}/>}
        {this.state.currentPerson &&  <Actor item = {this.state.currentPerson} findMovieById = {(id) => {this.getMovie(id);}}/>}
        </div>
        <div className = "img-container">
          {this.state.currentMovie && <img src ={this.state.currentMovie.currentImg}/>}
          {this.state.currentPerson && <img src ={this.state.currentPerson.currentImg}/>}
        </div>
      </div>
    </div>;
  }
}

export default OpenDataModule;
