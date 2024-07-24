import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemplates } from "../../redux/websitetemplate/TemplateSlice";
import TemplateList from "../../redux/websitetemplate/TemplateList";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

function HomeDashboard() {
  const dispatch = useDispatch();
  const { templates, status } = useSelector((state) => state.templates);
  const containerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchTemplates());
  }, [dispatch]);

  let content;

  if (status === "loading") {
    content = (
      <Grid container spacing={2}>
        {Array.from(new Array(4)).map((_, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Box sx={{ width: "100%", marginRight: 0.5, my: 5 }}>
              <Skeleton variant="rectangular" width="100%" height={118} />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  } else if (status === "succeeded") {
    content = <TemplateList templates={templates} />;
  } else {
    content = <p>No templates available</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="px-6 py-4 text-white bg-gradient-to-r from-purple-500 to-primary rounded-lg flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="w-full lg:w-1/3">
          <h1 className="text-3xl lg:text-5xl font-bold leading-[40px] lg:leading-[60px]">
            WELCOME TO SHOWCASE!
          </h1>
          <p className="mt-2 text-lg lg:text-xl">Build your portfolio here,</p>
        </div>
        <div className="w-full lg:w-auto">
          <img
            src="/dashboardImg/video1.gif"
            alt="photo"
            className="w-40 lg:w-60 mx-auto"
          />
        </div>
      </div>
      <h3 className="mt-5 text-2xl font-medium">Your Design</h3>
      <div className="mt-5 w-full">{content}</div>
    </div>
  );
}

export default HomeDashboard;
