import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./user/UserSlice";
import userRegisterSlice from "./verify-user/userRegisterSlice";
import OtpSlice from "./verify-user/OtpSlice";
import templateReducer from "./websitetemplate/TemplateSlice";
import authReducer from "./authSlice/authSlice";
import workExperiencesReducer from "./websitetemplate/WorkExperienceSlice";
import contactReducer from "./websitetemplate/ContactSlice";
import blogReducer from "./websitetemplate/BlogSlice";
import skillReducer from "./websitetemplate/SkillSlice";
import serviceReducer from "./websitetemplate/ServiceSlice";
import projectReducer from "./websitetemplate/ProjectSlice";
export const store = configureStore({
  reducer: {
    user: useReducer,
    userRegister: userRegisterSlice,
    otp: OtpSlice,
    templates: templateReducer,
    auth: authReducer,
    contacts: contactReducer,
    blogs: blogReducer,
    skills: skillReducer,
    workExperiences: workExperiencesReducer,
    services: serviceReducer,
    projects: projectReducer,
  },
});
