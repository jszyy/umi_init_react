import React from 'react';
import { Link } from 'umi';
import { Space } from 'antd';
import styles from './index.less';

export default (props: any) => {
  console.log('dashboard', props);
  return (
    <div>
      {/* 使用 css Modules 写法 */}
      <h1 className={styles.title}>首页</h1>
      <Space size='middle'>
        <Link to="/github">去github</Link>
        <Link to="/alibaba/taobao">去阿里巴巴</Link>
      </Space>
    </div>
  );
};
