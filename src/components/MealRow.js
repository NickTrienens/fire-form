
import { List, Avatar, Skeleton } from 'antd';
import React from 'react';
export default class MealRow extends React.Component {

render() {
  const { item } = this.props;

  return <List.Item actions={[<a>edit</a>, <a>more</a>]}>
  <Skeleton avatar title={false} loading={item.loading} active>
    <List.Item.Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={<a href="https://ant.design">{item.name}</a>}
      description={item.description}
    />
    </Skeleton>
  </List.Item>
}

}
