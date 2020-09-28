import { stringify } from 'querystring';
import { history, Reducer, Effect } from 'umi';

import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { getArticleList } from './service';
import { ArticleListType } from './data.d';

export interface HomeStateType {
  listData: ArticleListType[];
  // status: 'ok' | 'error';
  // type?: string;
  // currentAuthority?: 'user' | 'guest' | 'admin';
}
export interface HomeModelType {
  namespace: string;
  state: HomeStateType;
  effects: {
    // login: Effect;
    getArticleList: Effect;
  };
  reducers: {
    updateState: Reducer<HomeStateType>;
    resetState: Reducer<HomeStateType>;
  };
}

const InitState = {
  listData: [],
};
const Model: HomeModelType = {
  namespace: 'home',

  state: InitState,

  effects: {
    *getArticleList({ payload }, { call, put }) {
      const listData = yield call(getArticleList, payload);
      yield put({
        type: 'updateState',
        payload: { listData },
      });
      // Login successfully
      // if (response.status === 'ok') {
      //   const urlParams = new URL(window.location.href);
      //   const params = getPageQuery();
      //   let { redirect } = params as { redirect: string };
      //   if (redirect) {
      //     const redirectUrlParams = new URL(redirect);
      //     if (redirectUrlParams.origin === urlParams.origin) {
      //       redirect = redirect.substr(urlParams.origin.length);
      //       if (redirect.match(/^\/.*#/)) {
      //         redirect = redirect.substr(redirect.indexOf('#') + 1);
      //       }
      //     } else {
      //       window.location.href = '/';
      //       return;
      //     }
      //   }
      //   history.replace(redirect || '/');
      // }
    },
  },

  reducers: {
    updateState(state, { payload }) {
      // setAuthority(payload.currentAuthority);
      return {
        ...state,
        ...payload,
      };
    },
    resetState(state, { pauload }) {
      return InitState;
    },
  },
};

export default Model;
