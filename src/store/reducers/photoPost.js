import { PHOTO_POST } from "../../api";
import createAsyncSlice from "../helper/createAsyncSlice";
import photoGet from "./photoGet";

const photo = createAsyncSlice({
  name: 'photoPost',
  fetchConfig: ({ formData, token }) => PHOTO_POST({ formData, token })
})

export const photoPost = photo.asyncAction;

export default photo.reducer;