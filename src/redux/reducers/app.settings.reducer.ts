import * as T from '../types';

const defaultState: any = {
  isSidebarOpened: false,
  profileSideBarOpened: false,
  modalState: {
    isOpened: false,
    data: null,
    component: null,
  },
};
export default (state = defaultState, action: any) => {
  const { type, payload, component } = action;
  switch (type) {
    case T.OPENMODAL:
      console.log({ component });
      return {
        ...state,
        modalState: {
          isOpened: true,
          data: payload,
          component: component,
        },
      };
    case T.CLOSEMODAL:
      return {
        ...state,
        modalState: {
          isOpened: false,
          data: null,
          component: null,
        },
      };
    case T.TOGGLESIDEBAR:
      return {
        ...state,
        isSidebarOpened: !state.isSidebarOpened,
      };
    case T.TOGGLEPROFILESETTINGSSIDEBAR:
      return {
        ...state,
        profileSideBarOpened: !state.profileSideBarOpened,
      };
    case T.LOGOUT:
      return defaultState;
    default:
      return state;
  }
};
