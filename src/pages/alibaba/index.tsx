import React from 'react';
import { Button, Space } from 'antd';
import { Link } from 'umi';
import styles from './index.less';

export default (props: any) => {
  console.log('淘宝页', props);
  /**
   * 路由组件可通过 props 获取到以下属性，
   * match，当前路由和 url match 后的对象，包含 params、path、url 和 isExact 属性
   * location，表示应用当前处于哪个位置，包含 pathname、search、query 等属性
   * history，同 api#history 接口
   * route，当前路由配置，包含 path、exact、component、routes 等
   * routes，全部路由信息
   */
  const LinkParams = props.location.query || ''; // 带过来的参数
  // const HistoryParams = props.match.params || '';
  console.log(LinkParams);
  return (
    <div>
      <h1 className={styles.title}>淘宝页</h1>
      <Space size="middle">
        <Link to="/">去首页</Link>
        <Link to="/github">去 github 页</Link>
        <Button
          type="primary"
          onClick={() => props.history.push('/alibaba/alipay')}
        >
          去阿里巴巴-支付宝页
        </Button>
      </Space>
    </div>
  );
};
