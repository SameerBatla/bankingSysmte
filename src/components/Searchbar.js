import React, { Component } from 'react';

export class Searchbar extends Component {
  render() {
    return (
      <div>
        <select name="Cities">
          <option value="MUMBAI">Mumbai</option>
          <option value="DELHI">Delhi</option>
          <option value="INDORE">Indore</option>
          <option value="PUNE">Pune</option>
          <option value="MYSORE">Mysore</option>
        </select>
        <input type="text" placeholder="Search Banks" />
      </div>
    );
  }
}

export default Searchbar;
