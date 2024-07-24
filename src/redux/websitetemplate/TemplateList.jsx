import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTemplates,
  fetchTemplateData,
  selectTemplate,
} from "./TemplateSlice";
import CardTemplateDashboard from "../../components/dashboard/CardTemplateDashboard";
import LogoLoading from "../../components/loading/LogoLoading";
import { useNavigate } from "react-router-dom";

const TemplateList = () => {
  const dispatch = useDispatch();
  const { templates, status, error } = useSelector((state) => state.templates);
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  // console.log("template",templates)
  console.log("URL", import.meta.env.VITE_BASE_URL);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTemplates());
    }
  }, [status, dispatch]);

  const handleSelectTemplate = (templateId) => {
    const userId = 1; // Replace with actual user ID
    dispatch(selectTemplate({ userId, templateId })).then((action) => {
      if (selectTemplate.fulfilled.match(action)) {
        dispatch(fetchTemplateData(templateId)).then(() => {
          navigate("/dashboard/developer");
        });
      } else {
        console.error(action.payload || action.error.message);
      }
    });
  };

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);
  };

  const filteredTemplates =
    activeFilter === "All"
      ? templates
      : templates.filter((template) => template.name === activeFilter);

      // console.log("filteredTemplates",filteredTemplates)
  // const handlePreviewClick = (templateId) => {
  //   const userId = 2; // Replace with actual user ID
  //   dispatch(selectTemplate({ userId, templateId })).then((action) => {
  //     if (selectTemplate.fulfilled.match(action)) {
  //       dispatch(fetchTemplateData(templateId)).then(() => {
  //         navigate(`/dashboard/preview/${templateId}`);
  //       });
  //     } else {
  //       console.error(action.payload || action.error.message);
  //     }
  //   });
  // };
  const handlePreviewClick = (templateId) => {
    navigate(`/dashboard/preview/${templateId}`);
  };

  if (error === "No access token found") {
    return <p className="text-red-500">Please log in to view templates.</p>;
  }

  return (
    <div>
      <div className="flex gap-4">
        {["All", "Developer", "Photography", "Business", "Marketing"].map(
          (filterName) => (
            <button
              key={filterName}
              onClick={() => handleFilterClick(filterName)}
              className={`px-7 py-2 rounded-md border-2 dark:text-gray-100 ${
                activeFilter === filterName
                  ? "bg-primary text-white border-primary"
                  : "bg-transparent text-primary border-primary hover:bg-primary hover:text-white"
              }`}
            >
              {filterName}
            </button>
          )
        )}
      </div>
      {status === "loading" && <LogoLoading />}
      {status === "succeeded" && (
        <div className="flex flex-wrap sm:gap-5 mt-5 justify-center">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="flex-1 min-w-[300px] max-w-[400px] md:min-w-[350px] lg:min-w-[300px]"
            >
              <CardTemplateDashboard
                imageSrc={template.image}
                title={template.name}
                onSelect={() => handleSelectTemplate(template.id)}
                onPreview={() => handlePreviewClick(template.id)}
              />
            </div>
          ))}
        </div>
      )}
      {status === "failed" && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default TemplateList;
