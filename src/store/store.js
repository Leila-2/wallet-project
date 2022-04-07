// import {
//     persistStore,
//     FLUSH,
//     REHYDRATE,
//     REGISTER,
//     PAUSE,
//     PERSIST,
//     PURGE,
// } from 'redux-persist';

// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';

// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: getDefaultMiddleware => [
//         ...getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE],
//             },
//         }),
//     ],
// });

// export const persistor = persistStore(store);