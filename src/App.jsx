import React, { Component } from 'react';
import { mock1, mock2 } from './mock';

const wrapStyle = {
  display: 'flex'
}

export default class App extends Component {
  state = {
    isChanged: false
  }

  handleChange = () => {
    this.setState(({ isChanged }) => ({ isChanged: !isChanged }))
  }

  render() {
    const { isChanged } = this.state
    const mock = isChanged ? mock2 : mock1
    return (
      <div>
        <h2>react example</h2>
        <div style={wrapStyle}>
          {mock.map((item, id) => <app-card title={item.title} key={`item-${id}`}></app-card>)}
        </div>
        <button type="button" onClick={this.handleChange}>change data</button>
      </div>
    )
  }
}
