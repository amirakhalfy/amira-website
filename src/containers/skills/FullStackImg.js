import React, { Component } from "react";
import FullImage from './full_stack_development_about.svg';  // Adjust the path if needed

export default class FullStackImg extends Component {
  render() {
   
  
      return (
        <div>
          {/* Using the imported image */}
          <img src={FullImage} alt="Full stack" />
        </div>
      );
    }
  }