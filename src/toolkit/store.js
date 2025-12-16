import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/HomeSlice";
import contactReducer from "./slices/ContactUs";
import industriesReducer from "./slices/IndustriesSlice";
import careerReducer from "./slices/CareerSlice";
import menuReducer from "./slices/MenuBarSlice";
import knowledgeCenterReducer from "./slices/KnowledgeCenterSlice"; // import your slice

export const store = configureStore({
  reducer: {
    home: homeReducer,
    contact: contactReducer,
    industries: industriesReducer,
    career: careerReducer,
    menu: menuReducer,
    knowledgeCenter: knowledgeCenterReducer, 
  },
});
