import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';

export class SLFTextField extends Component {
  static displayName = SLFTextField.name;
  static category = "Test";

  constructor(props) {
    super(props);
    this.state = { value: props.value, category: props.category };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.onChange( event.target.value ,this.state.category);
    //console.log(event.target.value )
  }

  render() {
    return (
      <div>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                {this.state.category}: 
              </InputAdornment>
            ),
          }}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div> {this.state.value}</div>
      </div>
    );
  }
}
