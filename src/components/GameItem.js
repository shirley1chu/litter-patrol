import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  // typechecking 
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    updateScoreCallback: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      symbolClass: 'unspotted',
    };
  }

  addSymbols = () => {
    const addSymbolClass = this.props.type === 'litter' ? 'spotted-litter' : 'spotted-nature'
    this.setState({
      symbolClass: addSymbolClass
    })
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const iconCategory = this.props.type
    const icon = ItemIcons[iconCategory];

    const classes = `game-item ${this.state.symbolClass}`
    return (
      // THIS IS INLINE STYLING...WHATTTT
      <div className={classes} style={itemStyle} onClick = {() => {this.addSymbols(); this.props.updateScoreCallback(this.props)}}>
        <img 
         src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
