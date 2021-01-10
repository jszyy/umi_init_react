import React, { useState, useEffect } from 'react';
import { IndexModelState, ConnectRC, Loading, connect, Link } from 'umi';
import { Space } from 'antd';
// import axios from 'axios';
import styles from './index.less';

interface PageProps {
  index: IndexModelState;
  loading: boolean;
}

const IndexPage: ConnectRC<PageProps> = ({ index, dispatch }) => {
  console.log('dashboard', index);
  const { name, typeInfo } = index;

  useEffect(() => {
    // axios('https://server.zhangyuyin.com/default/getTypeInfo').then(res => {
    //   console.log('res', res.data)
    // })
    dispatch({ type: 'index/getTypeInfo' });
  }, []);

  return (
    <div>
      {/* 使用 css Modules 写法 */}
      <h1 className={styles.title}>首页</h1>
      <h1 className={styles.title}>Hello {name}</h1>
      {(typeInfo || []).map((typeItem: any) => {
        return (
          <>
            <div>id: {typeItem.id}</div>
            <div>typeName: {typeItem.typeName}</div>
            <div>orderNum: {typeItem.orderNum}</div>
            <div>icon: {typeItem.icon}</div>
          </>
        );
      })}
      <Space size="middle">
        <Link to="/github">去github</Link>
        <Link to="/alibaba/taobao">去阿里巴巴</Link>
      </Space>
    </div>
  );
};

export default connect(
  ({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
    index,
    loading: loading.models.index,
  }),
)(IndexPage);
