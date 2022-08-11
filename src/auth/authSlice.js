import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  userType: {
    isAdmin: false,
    isBrandAdmin: false,
    isBranchAdmin: false,
    isSales: false,
    isClient: false
  },
  currentUser: {},
  currentBrand: undefined,
  currentBranch: undefined,
  routes: []
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
      state.isLogin = true;
    },
    setLogin(state, action) {
      state.isLogin = action.payload;
    },
    setCurrentBrand(state, action) {
      state.currentBrand = action.payload;
    },
    setCurrentBranch(state, action) {
      state.currentBranch = action.payload;
    },
    setUserType(state, action) {
      switch (action.payload) {
        // ADMIN
        case "62255abf045b1c5795a6028a":
          state.userType.isAdmin = true;
          break;
        // BRAND MANAGER
        case "621c677d6329a6c34f9e9aa5":
          state.userType.isBrandAdmin = true;
          break;
        // BRANCH MANAGER
        case "621c67956329a6c34f9e9ab2":
          state.userType.isBranchAdmin = true;
          break;
        // SALES
        case "621c7b93e49d8d94cdf082aa":
          state.userType.isSales = true;
          break;
        // CLIENT
        case "6232733976bd9ac409606de3":
          state.userType.isClient = true;
          break;
        default:
          break;
      }
    },
    resetUserType(state, action) {
      state.userType.isAdmin = false;
      state.userType.isBrandAdmin = false;
      state.userType.isBranchAdmin = false;
      state.userType.isSales = false;
      state.userType.isClient = false;
    }
  },
});

export const { setCurrentUser, setLogin, setCurrentBrand, setCurrentBranch, setUserType, resetUserType } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
