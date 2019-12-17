import React, { Component } from "react";

//TODO: FishTable has many FishTableRows

class FishTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.fish.name}
        <img src={this.props.fish.image} alt="x" />
        {this.props.fish.description}
      </div>
    );
  }
}

// const FishTableRow = props => {
//   //   if (props.fishes.length === 0) {
//   //     return null;
//   //   }

//   return (
//     <div>
//       {props.fish.name}
//       <img src={props.fish.image} alt="x" />
//       {props.fish.description}
//     </div>
//   );
// };

export default FishTableRow;
