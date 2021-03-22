import * as T from './../types';
const defaultData: any = {
  fetching: false,
  data: {},
  error: '',
  done: false,
};
const defaultState: any = {
  authUser: {
    ...defaultData,
  },
  notification: { ...defaultData, data: [] },
};
export default (state = defaultState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case T.UPDATEPROFILEINPUTFIELDS:
      const updatedFiled = payload.field;
      const newValue = payload.value;
      state.authUser.data = {
        ...state.authUser.data,
        [updatedFiled]: newValue,
      };
      state.authUser.formData = {
        ...state.authUser.formData,
        [updatedFiled]: newValue,
      };
      return { ...state };
    case T.GETAUTHUSERDATAREQUEST:
      return {
        ...state,
        authUser: { ...state.authUser, fetching: true, error: null, done: false },
      };
    case T.GETAUTHUSERDATASUCCESS:
      const data = payload.data;
      const profileDetails = {
        ...data,
        ...data.profile,
      };
      const path = `/${data.school?.abbr?.toLowerCase()}/${data.username}`;
      profileDetails.userPath = path;
      return {
        ...state,
        authUser: { fetching: false, error: null, done: true, data: profileDetails },
      };
    case T.GETAUTHUSERDATAFAILURE:
      return {
        ...state,
        authUser: { fetching: false, error: action.error, done: true },
      };
    case T.GETAUTHUSERSETTINGSDATAREQUEST:
      return {
        ...state,
        userSettings: { ...state.userSettings, fetching: true, error: null, done: false },
      };
    case T.GETAUTHUSERSETTINGSDATASUCCESS:
      console.log({ Usersettings: payload });
      const _user = state.authUser;
      const formData = {
        ..._user.data,
        ...payload,
        ...payload.socialAccounts,
        ...payload.profile,
        ...payload.contact,
        ...payload.privacy,
      };
      return {
        ...state,
        authUser: { ...state.authUser, data: { ...state.authUser.data, ...payload }, formData },
        userSettings: { ...state.userSettings, fetching: false, error: null, done: true, data: payload },
      };
    case T.GETAUTHUSERSETTINGSDATAFAILURE:
      return {
        ...state,
        userSettings: { ...state.userSettings, fetching: false, error: action.error, done: true },
      };
    case T.UPDATEUSERPROFILEDETAILSREQUEST:
      return {
        ...state,
        updatingProfile: { ...state.updatingProfile, fetching: true, error: null, done: false },
      };
    case T.UPDATEUSERPROFILEDETAILSSUCCESS:
      return {
        ...state,
        updatingProfile: { ...state.updatingProfile, fetching: false, error: null, done: true },
      };
    case T.UPDATEUSERPROFILEDETAILSFAILURE:
      return {
        ...state,
        updatingProfile: { ...state.updatingProfile, fetching: false, error: action.error, done: true },
      };

    case T.GETNOTIFICATIONREQUEST:
      return {
        ...state,
        notification: { ...state.notification, fetching: true, error: null, done: false },
      };
    case T.GETNOTIFICATIONSUCCESS:
      const notifyData = {
        all: payload.data,
        total: payload?.data?.length > 9 ? '9+' : payload?.data?.length,
        read: 0,
        unread: 0,
      };
      return {
        ...state,
        notification: { ...state.notification, fetching: false, error: null, done: true, data: notifyData },
      };
    case T.GETNOTIFICATIONFAILURE:
      return {
        ...state,
        notification: { ...state.notification, fetching: false, error: payload, done: true },
      };
    case T.MARKALLNOTIFICATIONASREADREQUEST:
      return {
        ...state,
      };
    case T.MARKALLNOTIFICATIONASREADSUCCESS:
      const mark = {
        total: 0,
        unread: 0,
      };
      return {
        ...state,
        notification: {
          ...state.notification,
          fetching: false,
          error: null,
          done: true,
          data: {
            ...state.notification.data,
            ...mark,
          },
        },
      };
    case T.MARKALLNOTIFICATIONASREADFAILURE:
      return {
        ...state,
        notification: { ...state.notification, fetching: false, error: payload, done: true },
      };
    case T.USERLOGOUT:
      window.location.replace('/sign-in');
      return {
        ...state,
        authUser: defaultState.authUser,
      };
    case T.GETUSERBYUSERNAMEREQUEST:
      return {
        ...state,
      };
    case T.GETUSERBYUSERNAMESUCCESS:
      return {
        ...state,
        externalUser: payload.data,
      };
    case T.GETUSERBYUSERNAMEFAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
