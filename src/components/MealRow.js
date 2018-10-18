
import { List, Avatar, Skeleton } from 'antd';
import React from 'react';
export default class MealRow extends React.Component {

render() {
  const { item } = this.props;

  return <List.Item actions={[<a>edit</a>]}>
  <Skeleton avatar title={false} loading={item.loading} active>
    <List.Item.Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={item.name}
      description={item.description}
    />
    </Skeleton>
  </List.Item>
}

}
