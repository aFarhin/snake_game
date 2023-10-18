import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../Header/header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
          <Link to='/' style={{fontWeight:'bolder',color:'black', textDecoration: 'none'}}>Snake Game</Link>
      </div>
    )
  }
}