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


  findImageOfPerson(id) {
    fetch(this.apiBase + "person/" + id + "/images?api_key=" + this.apiKey ).then(result => result.json())
    .then(json => {
      console.log(json);

      this.setState(Object.assign({}, {currentImg: [this.imgBase, this.apiConfig.images.profile_sizes[1], json.profiles[0].file_path].join('/')}));

    });
  }

  findImageOfMovie(id) {
    fetch(this.apiBase + "movie/" + id + "/images?api_key=" + this.apiKey ).then(result => result.json())
    .then(json => {
      console.log(json);

      this.setState(Object.assign({}, {currentImg: [this.imgBase, this.apiConfig.images.poster_sizes[1], json.posters[0].file_path].join('/')}));

      console.log(this.state);
    });
  }



  findPersonById(id) {

    console.log(id);

    fetch(this.apiBase + "person/" + id + "?api_key=" + this.apiKey ).then(result => result.json())
    .then(json => {
      console.log(json);

      this.setState(Object.assign({}, {currentPerson: json, currentMovie: null}));

      console.log(this.state);

      this.findCreditsOfPerson(id);
      this.findImageOfPerson(id);

    });
  }

  findCreditsOfPerson(id) {
    fetch(this.apiBase + "person/" + id + "/movie_credits"+"?api_key=" + this.apiKey ).then(result=> result.json())
    .then(json => {
      console.log(json);

      let newState = Object.assign({}, this.state);
      newState.currentPerson.cast = json.cast;
      newState.currentPerson.crew = json.crew;

      this.setState(Object.assign({}, newState));


    })
    ;


  }

  findCreditsOfMovie(id){
    fetch(this.apiBase + "movie/" + id + "/credits"+"?api_key=" + this.apiKey ).then(result=> result.json())
    .then(json => {
      console.log(json);

      let newState = Object.assign({}, this.state);
      newState.currentMovie.cast = json.cast;
      newState.currentMovie.crew = json.crew;

      this.setState(Object.assign({}, newState));


    })
    ;
  }

  findMovieById(id) {
    //console.log(apiKey);

    fetch("/movieApi/movie").then(result=> result.json())
    .then(json => {
      console.log(json)

      this.setState( {currentMovie: json, currentPerson: null});
      this.findCreditsOfMovie(id);
      this.findImageOfMovie(id);
    }
    );


  }




  constructor() {
    super();
    this.apiKey=""; //If you're here from github and looking for API keys, nice try :)
    this.apiBase ="https://api.themoviedb.org/3/";
    this.state = {currentMovie: {}};

    fetch(this.apiBase + "configuration" +  "?api_key=" + this.apiKey).then(result => result.json())
    .then (json => {
      this.imgBase = json.images.base_url;
      this.apiConfig = json;
    });

    //this.click();
    // let qParam = "farmer_id";
    // fetch(apiBase + "?farmer_id=3402").then(result=> result.json())
    // .then(json => console.log(json))
    // ;
  }

  click() {
    this.findMovieById(381288);
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


        {this.state.currentMovie &&   <Movie item = {this.state.currentMovie} findPersonById = {(id) => {this.findPersonById(id);}}/>}
        {this.state.currentPerson &&  <Actor item = {this.state.currentPerson} findMovieById = {(id) => {this.findMovieById(id);}}/>}
        </div>
        <div className = "img-container">
          {this.state.currentImg &&<img src ={this.state.currentImg}/>}
        </div>
      </div>
    </div>;
  }
}

export default OpenDataModule;
