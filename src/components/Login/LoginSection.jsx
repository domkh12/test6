import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchLogin } from "../../redux/user/UserSlice";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

function LoginSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("isDarkMode") === "true";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleGetStartClick = () => {
    navigate("/register");
  };

  const formik = useFormik({
    initialValues: {
      email: "tribalc51@gmail.com",
      password: "Password@123",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setFieldError }) => {
      console.log("Submitting form with values:", values);
      dispatch(fetchLogin(values))
        .unwrap()
        .then(() => {
          if (navigate) {
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          console.error("Login error:", err);
          setFieldError("email", "Invalid email or password");
          setFieldError("password", "Invalid email or password");
        });
    },
  });

  return (
    <main
      className={`sm:px-3 sm-max:px-3 flex sm:flex-col-reverse sm-max:flex-col-reverse lg:flex-row w-[100vw] h-[100vh] lg:p-10 justify-start xl:gap-10 items-center overflow-auto ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-black"
      }`}
    >
      <section
        className={`flex justify-center sm:items-center sm-max:items-center xl:items-start gap-10 flex-col xl:w-[50%] sm:rounded-tl-md sm-max:rounded-tl-md sm:rounded-tr-md sm-max:rounded-tr-md sm:h-full sm-max:h-full xl:px-10 2xl:px-20 ${
          isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-black"
        }`}
      >
        <Link
          to="/"
          className="flex sm:justify-center sm-max:justify-center xl:justify-start items-center gap-4"
        >
          <img
            loading="lazy"
            src="/logoHomepage.png"
            alt=""
            className="xl:w-[8%] sm-max:w-[7%] sm:w-[7%] "
          />
          <h1
            className={`xl:text-2xl font-semibold ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            } sm:text-lg sm-max:text-lg`}
          >
            Showcase
          </h1>
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center sm-max:justify-center sm:items-center sm-max:items-center lg:item-start lg:justify-start 2xl:items-start">
          <h2
            className={`xl:text-4xl 2xl:text-5xl sm:text-3xl sm-max:text-3xl font-bold leading-[60px] ${
              isDarkMode ? "text-gray-100" : "text-black"
            }`}
          >
            Welcome to Showcase
          </h2>
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
            Easily create and customize your beautiful portfolio.
          </p>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full sm:px-24 sm-max:px-4 xl:p-0 overflow-y-auto"
        >
          <div>
            <label
              htmlFor="email"
              className={`mt-9 ${
                isDarkMode ? "text-gray-400" : "text-neutral-600"
              } max-md:max-w-full`}
            >
              Email
            </label>
            <div>
              <input
                type="email"
                id="email"
                {...formik.getFieldProps("email")}
                className={`w-full mt-2.5 h-12 rounded-md border border-solid ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-neutral-300"
                } max-md:max-w-full ${
                  isDarkMode ? "text-gray-400 bg-gray-800" : "text-neutral-600"
                }`}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mt-5">
              <label htmlFor="password" className="">
                Password
              </label>
            </div>
            <div className="relative">
              <input
                type={formik.values.showPassword ? "text" : "password"}
                id="password"
                {...formik.getFieldProps("password")}
                className={`w-full mt-2.5 h-12 rounded-md border border-solid ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-neutral-300"
                } max-md:max-w-full ${
                  isDarkMode ? "text-gray-400 bg-gray-800" : "text-neutral-600"
                }`}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
              <button
                type="button"
                className="absolute top-5 right-2 flex justify-center items-center gap-1"
                onClick={() =>
                  formik.setFieldValue(
                    "showPassword",
                    !formik.values.showPassword
                  )
                }
              >
                {formik.values.showPassword ? (
                  <FiEyeOff
                    className={`w-6 h-6  ${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  />
                ) : (
                  <FiEye
                    className={`w-6 h-6 ${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  />
                )}
              </button>
            </div>
          </div>
          <div className="flex gap-3 self-start mt-5 text-neutral-500">
            <input
              type="checkbox"
              id="rememberMe"
              checked={formik.values.rememberMe}
              onChange={() =>
                formik.setFieldValue("rememberMe", !formik.values.rememberMe)
              }
              className="shrink-0 my-auto w-5 h-5 rounded-md border border-solid border-neutral-400"
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center px-16 py-3 mt-4 max-w-full text-white whitespace-nowrap bg-primary hover:bg-primary-hover rounded-md sm:w-full sm-max:w-full max-md:px-5"
            disabled={status === "loading"}
          >
            Login
            {status === "loading" && (
              <Box ml={2}>
                <CircularProgress size={24} color="inherit" />
              </Box>
            )}
          </button>
        </form>
        <p className="flex gap-2">
          Already have an account?
          <button
            onClick={handleGetStartClick}
            className="text-primary cursor-pointer hover:underline"
          >
            Create an account
          </button>
        </p>
      </section>
      <section
        className={`lg:h-full flex justify-center items-center lg:rounded-md lg:w-[50%] lg-max:hidden bg-primary`}
      >
        <img
          loading="lazy"
          src="/Login/login-img.png"
          alt=""
          className="lg:w-[700px] xl:w-[800px]"
        />
      </section>
    </main>
  );
}

export default LoginSection;
