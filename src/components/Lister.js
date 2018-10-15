import React from 'react';
//import { Badge } from 'antd';

export default class Lister extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
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
    const { items, rowMaker } = this.props;

    var rows = "";
    var count = 0;
    if( items !== undefined ) {
      rows = items.map((item) => {
          count++;
          return rowMaker(item, count)
      });
    }

    return <div className="list" >
      <ul>
        {rows}
      </ul>
    </div>

  };
}
