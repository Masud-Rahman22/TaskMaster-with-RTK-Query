import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './features/tasks/tasksSlice';
import userSlice from './features/user/userSlice';
import baseAPi from './features/api/baseApi';

const store = configureStore({
  reducer: {
    [baseAPi.reducerPath]: baseAPi.reducer,
    tasksSlice: tasksSlice,
    userSlice: userSlice,
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(baseAPi.middleware)
});

export default store;
