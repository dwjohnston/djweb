import React from 'react';
import {Panel, ButtonToolbar, Button, DropdownButton, ButtonGroup, MenuItem, Tabs, Tab, FormGroup, HelpBlock, FormControl, ControlLabel, Checkbox, Radio} from 'react-bootstrap';
import Module from 'components/Module';


class BootstrapModule extends React.Component {

  constructor(){
    super();


    this.state = {
      form: this.getInitialForm(),
      validation: this.getInitialValidation(),
      output: {},
    };


  }


  getInitialForm() {
    return {
      aboutSelf:'',
      name: '',
      flavour: "chocolate",
      gender: null,
      music: [],
    };
  }

  /*ugh, hate this too*/
  getInitialValidation() {
    return {
      aboutSelf: null,
      name: null,
      flavour: null,
      gender: null,
      music: null
    };
  }


  getValidationState(id){
    return this.state.validation[id];
  }

  validateElement(id, validationType) {
    let  notEmpty = (value) => {
      let newState = Object.assign({}, this.state);
      newState.validation[id] = (value && value.length > 0) ?  null : "error";
      this.setState(newState);
    }

    switch (validationType) {
      case "not-empty": notEmpty(this.state.form[id]);
    }
  }

  validateForm() {
    //Hacky but,

    this.validateElement("name", "not-empty");
    this.validateElement("aboutSelf", "not-empty");
    this.validateElement("gender", "not-empty");

  }

  isFormValid() {

    for (let key in this.state.validation){
      if (this.state.validation[key]){
        return false;
      }
    }

    return true;
  }


  handleRadioChange(e, id) {

    let newState = Object.assign({}, this.state);


    if (e.target.value) {
      newState[groupId].push(music);
    }
    else {
      let index = newState[groupId].arrayOf(music);
      if (index > -1){
        newState[groupId].splice(index, 1);
      }
    }

    this.setState(newState);
  }

  //This is hacky as fuck, but I'm so over this.
  handleCheckboxChange(e, groupId, value) {
    let newState = Object.assign({}, this.state);
    if (e.target.value) {
      newState.form[groupId].push(value);
    }
    else {
      let index = newState[groupId].arrayOf(value);
      if (index > -1){
        newState.form[groupId].splice(index, 1);
      }
    }

    this.setState(newState);
  }

  handleChange(e, id){
    let newState = Object.assign({}, this.state);
    newState.form[id] = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.validateForm();
    if(this.isFormValid()){
      let newState = Object.assign({}, this.state);
      newState.output = Object.assign({}, this.state.form);
      this.setState(newState);
    }


  }

  handleReset(e) {
    let newState = Object.assign({}, this.state);
    newState.form = this.getInitialForm();
    newState.validation = this.getInitialValidation();
    newState.output = {};
    this.setState(newState);
  }

  render() {
    return <Module className ="module" id = "bootstrap" title = "bootstrap">

      <Panel bsStyle ="primary" header="My Nice Form">

        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Form">


            <form
              onSubmit = {(e) =>this.handleSubmit(e)}
              onReset = {(e) => this.handleReset(e)}

              >

              <FormGroup
                validationState={this.getValidationState("name", "not-empty")}
                >
                <ControlLabel> Name</ControlLabel>
                <FormControl type="text"
                  id ="name"
                  value = {this.state.form.name}
                  onChange = {(e) => this.handleChange(e, "name")}
                  onBlur = {(e) => this.validateElement("name", "not-empty")}
                  />

                <HelpBlock>Name may not be empty</HelpBlock>
              </FormGroup>

              <FormGroup

                >
                <ControlLabel> Favourite Flavour</ControlLabel>
                <FormControl componentClass="select"
                  id ="flavour"
                  value = {this.state.form.flavour}
                  onChange = {(e) => this.handleChange(e, "flavour")}
                  >
                  <option value="chocolate">Chocolate</option>
                  <option value="vanilla">Vanilla</option>
                  <option value="strawberry">Strawberry</option>
                </FormControl>
              </FormGroup>



              {/***
                Checkbox and radio groups really need their own container item, similar to FormControl
                */}
                <FormGroup>
                  <ControlLabel> Genres of music </ControlLabel>

                  <Checkbox inline
                    onChange = {(e) => this.handleCheckboxChange(e, "music", "rock")}
                    >
                    Rock
                  </Checkbox>
                  <Checkbox inline
                    onChange = {(e) => this.handleCheckboxChange(e, "music", "pop")}
                    >
                    Pop
                  </Checkbox>
                  <Checkbox inline
                    onChange = {(e) => this.handleCheckboxChange(e, "music", "dance")}
                    >
                    Dance
                  </Checkbox>
                  <Checkbox inline
                    onChange = {(e) => this.handleCheckboxChange(e, "music", "acoustic")}
                    >
                    Acoustic
                  </Checkbox>

                </FormGroup>

                <FormGroup
                  validationState={this.getValidationState("gender")}
                  >
                  <ControlLabel> Gender </ControlLabel>

                  <Radio inline name = "gender" value="male"     onChange = {(e) => {
                      this.handleChange(e, "gender");
                      this.validateElement("gender", "not-empty");
                    }}>Male
                  </Radio>
                  <Radio inline name = "gender" value="female"   onChange = {(e) => {
                      this.handleChange(e, "gender");
                      this.validateElement("gender", "not-empty");

                    }}> Female
                  </Radio>
                  <Radio inline name = "gender" value="non-binary"   onChange = {(e) => {
                      this.handleChange(e, "gender");
                      this.validateElement("gender", "not-empty");

                    }}>Non-binary
                  </Radio>
                  <HelpBlock> Please enter a gender</HelpBlock>
                </FormGroup>

                <FormGroup
                  validationState = {this.getValidationState("aboutSelf", "not-empty")}
                  >
                  <ControlLabel> Enter some text about yourself</ControlLabel>
                  <FormControl
                    componentClass="textarea"
                    id ="aboutSelf"
                    value = {this.state.form.aboutSelf}
                    onChange = {(e) => this.handleChange(e, "aboutSelf")}
                    onBlur = {(e) => this.validateElement("aboutSelf", "not-empty")}

                    />

                  <HelpBlock>Please enter something about yourself</HelpBlock>

                </FormGroup>

                <ButtonToolbar className ="pull-right">
                  <Button bsStyle="default" type = "reset">Cancel</Button>
                  <Button bsStyle="primary" type = "submit">Submit</Button>
                </ButtonToolbar>
              </form>


            </Tab>
            <Tab eventKey={2} title="About">

              <h2> About</h2>

              <p>
                I hope you're having a lovely day :)

              </p>

              <img className ="image-kitten"/>

            </Tab>
          </Tabs>




        </Panel>

        <code>
          Output:<br/>
        {JSON.stringify(this.state.output, null, 2)}

      </code>

    </Module>;
  }
}

export default BootstrapModule;
