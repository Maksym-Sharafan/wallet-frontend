import axios from 'axios';
import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesError,
} from './categoriesActions';

axios.defaults.baseURL = '/';


const fetchCategories = () => async dispatch => {
  dispatch(fetchCategoriesRequest());

  try {
    const {
      data: {
        data: {name},
      },
    } = await axios.get('/api/categories');

    dispatch(fetchCategoriesSuccess(name));
  } catch (error) {
    dispatch(fetchCategoriesError());
  }
};

export default fetchCategories;

