import React from 'react';
import { Link } from 'umi';
import { Space } from 'antd';
import styles from './index.less';

export default (props: any) => {
  console.log('page_b_c', props);
  return (
    <div>
      <h1 className={styles.title}>欢迎来到支付宝</h1>
      <Space size="middle">
        <Link to="/">去首页</Link>
        <Link to="/github">去 github 页</Link>
        <Link to="/alibaba/taobao">去阿里巴巴-淘宝页</Link>
      </Space>
    </div>
  );
};
