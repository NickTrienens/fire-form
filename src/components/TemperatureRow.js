import { List, Avatar, Skeleton } from 'antd';
import React from 'react';
export default class TemperatureRow extends React.Component {

render() {
  const { item } = this.props;

  return <List.Item >
  <Skeleton avatar title={false} loading={item.loading} active>
    <List.Item.Meta
      title={item.location}
      description={ item.sensors !== undefined && item.sensors.map( sensor => {
                var lastValue = <span></span>;
                if (sensor.lastValue !== undefined ){
                  lastValue = <span>{sensor.lastValue.value} @ {sensor.lastValue.created_at}</span>
                }
                return <div key={sensor.id} style={{flex: 1}}>{sensor.type} - {lastValue}</div>
              })}
    />
    </Skeleton>
  </List.Item>
}

}
