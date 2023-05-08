import createAsyncSlice from "../helper/createAsyncSlice";

const photo = createAsyncSlice({
  name: 'fetchPhoto',
  reducers: {
    clearState(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
    }
  },
  fetchConfig(id) {
    return {
      url: `https://dogsapi.origamid.dev/json/api/photo/${id}`,
      options: {
        method: 'GET',
        cache: 'no-store',
      },
    };
  }
})

export const { clearState } = photo.actions
export const fetchPhoto = photo.asyncAction;

export default photo.reducer;