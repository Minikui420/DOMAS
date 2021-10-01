import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist'
import { PersistConfig } from '../interface/Interfaces'
import storage from 'reduxjs-toolkit-persist/lib/storage'
import hook from './hooks'


const persistConfig: PersistConfig = {
  key: 'reduxApp',
  storage
}


export const store = configureStore({
  reducer: {
    persist: persistReducer(persistConfig, hook),
    temporer: hook
  },
  middleware: []
})

export const persistore = persistStore(store)

