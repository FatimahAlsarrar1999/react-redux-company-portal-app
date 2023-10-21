import { configureStore } from '@reduxjs/toolkit';
import companiseSlice from './features/companiseSlice';

export const store = configureStore({
  reducer: {
    companiseReducer: companiseSlice
  }
});

export default store;