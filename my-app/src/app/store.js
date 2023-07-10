import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

//IaTq1keleGiuOfyDYClXD69cGZVRa0iYDY7GB3KAIihQVUIb
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
