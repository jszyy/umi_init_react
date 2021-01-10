import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import services from './../services/index';

export interface IndexModelState {
  name: string;
  typeInfo: any[];
}

export interface IndexModelType {
  namespace: 'index';
  state: IndexModelState;
  effects: {
    getTypeInfo: Effect;
  };
  reducers: {
    setTypeInfo: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

const initialState: IndexModelState = {
  name: 'test name',
  typeInfo: [],
};

const IndexModel: IndexModelType = {
  namespace: 'index',

  state: initialState,

  effects: {
    *getTypeInfo({ payload }, { call, put }) {
      try {
        const res = yield call(services.getTypeInfo);
        yield put({
          type: 'setTypeInfo',
          payload: {
            typeInfo: res.data.data,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  reducers: {
    setTypeInfo(state, action) {
      state = { ...state, ...action.payload };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'getTypeInfo',
          });
        }
      });
    },
  },
};

export default IndexModel;
