import React from 'react';
import { Link, history } from 'umi';
import { Button, Space } from 'antd';
import styles from './index.less';

export default (props: any) => {
  console.log('github', props);
  return (
    <div>
      <h1 className={styles.title}>github 页</h1>
      <Space size="middle">
        <Button type="primary" onClick={() => props.history.push('/')}>
          去首页（props.history）
        </Button>
        <Link to="/alibaba/taobao?params=test">去阿里巴巴-淘宝页(带参数)</Link>
        <Button
          type="primary"
          onClick={() =>
            history.push({
              pathname: '/alibaba/alipay',
              query: {
                a: 'b',
              },
            })
          }
        >
          去阿里巴巴-支付宝页（history 带参数）
        </Button>
      </Space>
    </div>
  );
};
