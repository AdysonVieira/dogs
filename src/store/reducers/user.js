import createAsyncSlice from "../helper/createAsyncSlice";
import { USER_GET } from "../../api";
import { fetchToken, tokenLogout } from "./token";

const user = createAsyncSlice({
  name: 'user',
  initialState: {
    isLogged: false,
  },
  reducers: {
    fetchSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      state.isLogged = true;
    },
    userLogout(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
      state.isLogged = false;
    }
  },
  fetchConfig: (token) => USER_GET(token)
});

export const fetchUser = user.asyncAction;
export const { userLogout } = user.actions;

export const login = (user) => async (dispatch, setState) => {
  try {
    const { payload } = await dispatch(fetchToken(user))
    if (payload.token) return await dispatch(fetchUser(payload.token))
  } catch {

  }
}

export const autoLogin = () => async (dispatch, getState) => {
  try {
    const state = getState()
    const { token } = state.token.data;
    if (token) return dispatch(fetchUser(token))
  } catch {

  }
}

export const logout = () => async (dispatch) => {
  dispatch(tokenLogout())
  dispatch(userLogout())
  window.localStorage.removeItem('token')
}

export default user.reducer