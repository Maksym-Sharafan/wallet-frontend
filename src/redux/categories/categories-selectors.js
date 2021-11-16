import { createSelector } from 'reselect';

const categories = state => state.categories;
const token = state=>state.auth.token;
console.log(token);
export const Categories = createSelector(categories);