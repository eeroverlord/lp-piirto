import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const initialState = {
  gates: [{ id: "4bf29e2c-1879-4ece-a798-e39c5376f095", gateType: "OR", position: { x: 100, y: 400 }}],
  connections: [{start: { x: 150, y: 400 }, end: { x: 180, y: 200 }}],
  isConnectMode: false,
  isDeleteMode: false,
  isGridVisible: false,
  hoveredElement: null,
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
