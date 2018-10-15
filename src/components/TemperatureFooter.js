import axios from 'axios';
import React from 'react';

export default class TemperatureFooter extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://graph.fuzzproductionswest.com/devices/7`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.deviceName}</li>)}
      </ul>
    )
  }
}
