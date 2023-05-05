import createAsyncSlice from "../helper/createAsyncSlice";

const photo = createAsyncSlice({
  name: 'fetchPhoto',
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

export const fetchPhoto = photo.asyncAction;

export default photo.reducer;