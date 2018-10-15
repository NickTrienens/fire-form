import React from 'react';
import StoryRow from './StoryRow.js';
import EditableField from './EditableField.js';
import { Badge } from 'antd';

export default class Lister extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }
  componentWillReceiveProps(nextProps) {
      //this.setState({ content: content });
  }

  componentWillUnmount() {

  }

  componentDidMount() {
    this.setState({didMount: true });
  }

  render() {
    const { items, rowComponent } = this.props;

    var rows = "";
    var count = 0;
    if( items !== undefined ) {
      rows = items.map((story) => {
          count++;
          return <div>
      });
    }

    return (
      <div className="list" >
          <div className="container">

          </div>
      </div>
    );
  }
}
