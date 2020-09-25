import React, { Component } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Avatar, Tag } from 'antd';
import { Link, connect, Dispatch, ConnectProps } from 'umi';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { ConnectState } from '@/models/connect';
import styles from './index.less';

// interface LoginProps {
//   dispatch: Dispatch;
//   userLogin: StateType;
//   submitting?: boolean;
// }

export interface HomeProps extends Partial<ConnectProps> {
  dispatch: Dispatch;
  // currentUser?: CurrentUser;
  // fetchingNotices?: boolean;
  // onNoticeVisibleChange?: (visible: boolean) => void;
  // onNoticeClear?: (tabName?: string) => void;
}

class Home extends Component<HomeProps> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/getArticleList',
    });
  }

  render() {
    // const testArr = new Array(2).fill(0);
    const url =
      'https://developer.mozilla.org/zh-CN/docs/learn/JavaScript/%E5%BC%82%E6%AD%A5/Async_await';
    return (
      <div className={styles.home}>
        {[1, 2].map((item, index) => (
          <Card
            key={item}
            hoverable
            style={{ width: 300, margin: 15 }}
            // cover={
            //   <img
            //     alt='example'
            //     src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            //   />
            // }
            extra={
              <>
                <Tag color='#f50'>#f50</Tag>
                <Tag color='#2db7f5'>#2db7f5</Tag>
                <Tag color='#87d068'>#87d068</Tag>
                <Tag color='#108ee9'>#108ee9</Tag>
              </>
            }
            actions={[
              <EditOutlined key='edit' onClick={() => console.log('edit')} />,
              <EllipsisOutlined key='ellipsis' onClick={() => console.log('ellipsis')} />,
            ]}
          >
            <Card.Meta
              style={{ paddingBottom: 20 }}
              avatar={
                <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
              }
              description='小程序工程化探索'
            />
            <a href={url} target='_blank' rel='noopener noreferrer'>
              {`${url.substring(0, 40)}...`}
            </a>
          </Card>
        ))}
      </div>
    );
  }
}
export default connect(({ home, loading }: ConnectState) => ({
  ...home,
  // submitting: loading.effects['login/login'],
}))(Home);

// export default connect(
//   ({
//     dashboardAndmonitor,
//     loading,
//   }: {
//     dashboardAndmonitor: StateType;
//     loading: {
//       models: { [key: string]: boolean };
//     };
//   }) => ({
//     dashboardAndmonitor,
//     loading: loading.models.dashboardAndmonitor,
//   }),
// )(Monitor);
