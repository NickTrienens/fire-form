import axios from 'axios';
import React from 'react';
import { List } from 'antd';
import TemperatureRow from './TemperatureRow.js';

export default class TemperatureFooter extends React.Component {
  state = {
    devices: [],
  }

  componentDidMount() {
    setInterval( () => {
        axios.get(`http://graph.fuzzproductionswest.com/api/devices/latest/all`)
          .then(res => {
            let devices = res.data.data;
            console.log(devices);
            devices = devices.sort(function(a, b){
              return a.location < b.location
            });
            this.setState({ devices });
          })
    }, 3000)
  }

  render() {
    const {devices} = this.state
    // return (<div>
    //     { this.state.devices !== undefined && .map(device => {
    //         return <div><br/><h4>{device.location}</h4>
    //           { device.sensors !== undefined && device.sensors.map( sensor => {
    //           var lastValue = <span></span>;
    //           if (sensor.lastValue !== undefined ){
    //             lastValue = <span>{sensor.lastValue.value} @ {sensor.lastValue.created_at}</span>
    //           }
    //           return <div key={sensor.id} style={{flex: 1}}>{sensor.type} - {lastValue}</div>
    //         })
    //       }
    //       </div>
    //     })
    //   }
    //   </div>
    // )

    return <List className="demo-loadmore-list"
           itemLayout="horizontal"
           dataSource={devices}
           renderItem={item => (
             <TemperatureRow item={item} />
           )}
         />


  }
}
