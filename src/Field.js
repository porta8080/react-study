import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class Field extends Component {

  constructor(props){
    super(props);
    this.state = {
      error: false
    };
  }

  addError(message){
    this.setState({
      error: message
    });
  }

  removeError(){
    this.setState({
      error: false
    });
  }

  getError(){
    return this.state.error;
  }

  save(input){
    var self = this;
    $.post(

    ).done(function(res){
      self.updateState();
    });
  }



  keyUpHandler(){
    var element = ReactDOM.findDOMNode(this.refs.input);
    if(element.value.length > 5) this.addError('Atenção! Apenas 5 caracteres são aceitos');
    else this.removeError();
  }

  render() {
    return (
      <FormGroup>
        { this.getError() ? ( <span className="text-error">{ this.getError() }</span> ) : null }
        <FormControl ref="input" type="text" onKeyUp={ this.keyUpHandler.bind(this) }></FormControl>
        { this.props.children }
      </FormGroup>
    );
  }
}

export default Field;
