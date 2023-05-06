import createAsyncSlice from "../helper/createAsyncSlice";
import { TOKEN_POST } from "../../api";

const getLocalStorage = (key, initalState) => {
  const data = window.localStorage.getItem(key)
  return data ? data : initalState
}

const token = createAsyncSlice({
  name: 'token',
  initialState: {
    data: {
      token: getLocalStorage('token', null),
    }
  },
  reducers: {
    fetchSuccess: {
      reducer(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      prepare(payload) {
        return {
          payload,
          meta: {
            localStorage: {
              key: 'token',
              value: payload.token,
            },
          },
        };
      },
    },
    tokenLogout(state) {
      state.loading = false;
      state.data.token = null;
      state.error = null;
    }
  },
  fetchConfig: (body) => TOKEN_POST(body)
});

export const fetchToken = token.asyncAction;
export const { tokenLogout } = token.actions

export default token.reducer;