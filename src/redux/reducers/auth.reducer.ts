import * as T from './../types';

const defaultData = {
  loading: false,
  done: false,
  data: null,
  error: null,
};
const defaultAuthState = {
  login: { ...defaultData },
  register: { ...defaultData },
  forgotPassword: { ...defaultData },
};
export default (state = defaultAuthState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case T.SIGNINREQUEST:
      return {
        ...state,
        login: { ...state.login, loading: true, done: false, data: null },
      };
    case T.SIGNINSUCCESS:
      return {
        ...state,
        login: { ...state.login, loading: false, done: true, data: payload },
      };
    case T.SIGNINFAILURE:
      return {
        ...state,
        login: { ...state.login, loading: false, done: true, error: payload },
      };
    case T.SIGNUPREQUEST:
      return {
        ...state,
        register: { ...state.register, loading: true, done: false, data: null },
        login: { ...state.login, loading: true, done: false, data: null },
      };
    case T.SIGNUPSUCCESS:
      return {
        ...state,
        register: { ...state.register, loading: false, done: true, data: payload },
        login: { ...state.login, loading: false, done: true, data: payload },
      };
    case T.SIGNUPFAILURE:
      return {
        ...state,
        register: { ...state.register, loading: false, done: true, error: payload },
        login: { ...state.login, loading: false, done: true, error: payload },
      };
    case T.LOGOUT:
      localStorage.clear();
      return {
        ...state,
        login: { loading: false, done: false, error: null, data: null },
        register: { loading: false, done: false, error: null, data: null },
      };
    case T.FORGOTPASSWORDREQUEST:
      return {
        ...state,
        forgotPassword: { loading: true, done: false, error: null, data: null },
      };
    case T.FORGOTPASSWORDSUCCESS:
      return {
        ...state,
        forgotPassword: { loading: false, done: true, error: null, data: payload },
      };
    case T.FORGOTPASSWORDFAILURE:
      return {
        ...state,
        forgotPassword: { loading: false, done: true, error: payload, data: null },
      };
    default:
      return state;
  }
};
