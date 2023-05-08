import { PHOTOS_GET } from "../../api";
import createAsyncSlice from "../helper/createAsyncSlice";

const feed = createAsyncSlice({
  name: 'feed',
  initialState: {
    pages: 1,
    data: [],
    stop: false,
  },
  reducers: {
    fetchSuccess(state, action) {
      state.data = [ ...state.data, ...action.payload ];
      if (action.payload.length === 0) {
        state.stop = true;
        state.loading = false;
      };
    },
    addPages(state) {
      state.pages++;
    },

    clearState(state) {
      state.loading = false;
      state.data = [];
      state.pages = 1;
      state.stop = false;
      state.error = null;
    },
  },
  fetchConfig: ({pages, total, user}) => PHOTOS_GET({pages, total, user})
})

export const { addPages, clearState } = feed.actions;
export const fetchAsyncAction = feed.asyncAction;


export const fetchFeed = ({total, user}) => async (dispatch, getState) => {
  const { feed } = getState()
  const { pages, stop } = feed
  if (stop) return
  const { payload } = await dispatch(fetchAsyncAction({ pages, total, user }))
  dispatch(addPages())
  
}

export default feed.reducer