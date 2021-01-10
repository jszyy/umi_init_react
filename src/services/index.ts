import { request } from './request';

const services = {
  getTypeInfo: async (payload: any) => {
    return await request(
      'https://server.zhangyuyin.com/default/getTypeInfo',
      payload,
    );
  },
};

export default services;
