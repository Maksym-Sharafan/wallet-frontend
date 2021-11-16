import axios from 'axios';
import { fetchCategoriesRequest,
         fetchCategoriesSuccess,
         fetchCategoriesError,
        fetchCategoriesError } from '.categories-action';


axios.defaults.baseURL = "https://connections-api.herokuapp.com";


const fetchCategories = () => async dispatch => {
  dispatch(fetchCategoriesRequest());
  try {
    const {
      data: {
        data: {name}
      },
    } = await axios.get('/api/categories');

    dispatch(fetchCategoriesSuccess(name));
  } catch (error) {
    dispatch(fetchCategoriesError());
  }
};

export default fetchCategories;

