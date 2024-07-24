import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners"; // Import the ClipLoader spinner
import { fetchTemplateData } from "../../redux/websitetemplate/TemplateSlice";
import { fetchWorkExperiences } from "../../redux/websitetemplate/WorkExperienceSlice";
import { fetchContacts } from "../../redux/websitetemplate/ContactSlice";
import { fetchBlogs } from "../../redux/websitetemplate/BlogSlice";
import { fetchSkills } from "../../redux/websitetemplate/SkillSlice";
import { fetchServices } from "../../redux/websitetemplate/ServiceSlice";
import { fetchProjects } from "../../redux/websitetemplate/ProjectSlice";
import NavBarComponent from "../../components/developercomponent/Navbar";
import HeroSection from "../../components/developercomponent/HeroSection";
import AboutMeSectionDev from "../../components/developercomponent/AboutMeSectionDev";
import MyResumeSection from "../../components/developercomponent/MyResumeSection";
import MySkillSection from "../../components/developercomponent/MySkillSection";
import MyProject from "../../components/developercomponent/MyProject";
import BlogSection from "../../components/developercomponent/BlogSection";
import ContactSection from "../../components/developercomponent/ContactSection";
import FooterSection from "../../components/developercomponent/FooterSection";

const DeveloperTemplate = () => {
  const dispatch = useDispatch();
  const {
    templateData,
    status: templateStatus,
    error: templateError,
  } = useSelector((state) => state.templates);
  const {
    workExperiences,
    status: workStatus,
    error: workError,
  } = useSelector((state) => state.workExperiences);
  const {
    contacts,
    status: contactStatus,
    error: contactError,
  } = useSelector((state) => state.contacts);
  const {
    blogs,
    status: blogStatus,
    error: blogError,
  } = useSelector((state) => state.blogs);
  const {
    skills,
    status: skillStatus,
    error: skillError,
  } = useSelector((state) => state.skills);
  const {
    services,
    status: serviceStatus,
    error: serviceError,
  } = useSelector((state) => state.services);
  const {
    projects,
    status: projectStatus,
    error: projectError,
  } = useSelector((state) => state.projects);

  useEffect(() => {
    const templateId = 1;
    dispatch(fetchTemplateData(templateId));
    dispatch(fetchWorkExperiences());
    dispatch(fetchContacts());
    dispatch(fetchBlogs());
    dispatch(fetchSkills());
    dispatch(fetchServices());
    dispatch(fetchProjects());
  }, [dispatch]);

  if (
    templateStatus === "loading" ||
    workStatus === "loading" ||
    contactStatus === "loading" ||
    blogStatus === "loading" ||
    skillStatus === "loading" ||
    serviceStatus === "loading" ||
    projectStatus === "loading"
  ) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader size={50} color={"#4C3DE3"} loading={true} />
      </div>
    );
  }

  if (templateStatus === "failed") {
    return (
      <p className="text-red-500">
        {typeof templateError === "object" && templateError.detail
          ? templateError.detail
          : templateError}
      </p>
    );
  }

  if (workStatus === "failed") {
    return (
      <p className="text-red-500">
        {typeof workError === "object" && workError.detail
          ? workError.detail
          : workError}
      </p>
    );
  }

  if (contactStatus === "failed") {
    return (
      <p className="text-red-500">
        {typeof contactError === "object" && contactError.detail
          ? contactError.detail
          : contactError}
      </p>
    );
  }

  if (blogStatus === "failed") {
    return (
      <p className="text-red-500">
        {typeof blogError === "object" && blogError.detail
          ? blogError.detail
          : blogError}
      </p>
    );
  }

  if (skillStatus === "failed") {
    return (
      <p className="text-red-500">
        {typeof skillError === "object" && skillError.detail
          ? skillError.detail
          : skillError}
      </p>
    );
  }

  if (serviceStatus === "failed") {
    return (
      <p className="text-red-500">
        {typeof serviceError === "object" && serviceError.detail
          ? serviceError.detail
          : serviceError}
      </p>
    );
  }

  if (projectStatus === "failed") {
    return (
      <p className="text-red-500">
        {typeof projectError === "object" && projectError.detail
          ? projectError.detail
          : projectError}
      </p>
    );
  }

  if (
    templateStatus === "succeeded" &&
    workStatus === "succeeded" &&
    contactStatus === "succeeded" &&
    blogStatus === "succeeded" &&
    skillStatus === "succeeded" &&
    serviceStatus === "succeeded" &&
    projectStatus === "succeeded" &&
    templateData
  ) {
    return (
      <div className="w-full h-auto">
        <NavBarComponent logo={templateData.portfolio_avatar} />
        <HeroSection
          heroImage={templateData.hero_image}
          introduction="INTRODUCTION"
          name={templateData.name || "Elon Musk"} // Replace with dynamic data if available
          profession={templateData.profession || "Developer"} // Replace with dynamic data if available
          bio={templateData.biography || "Bio not available."}
          socialMediaLinks={templateData.social_media_link_json.map(
            (url, index) => ({
              type: index === 0 ? "facebook" : "github",
              url,
            })
          )}
        />
        <AboutMeSectionDev
          avatar={templateData.section_image}
          firstName={templateData.title} // Assuming title contains the first name
          lastName="Musk" // Replace with dynamic data if available
          birthDate="24 April 1993" // Replace with dynamic data if available
          nationality="Khmer" // Replace with dynamic data if available
          experience="7 years" // Replace with dynamic data if available
          address="Phnom Penh" // Replace with dynamic data if available
          freelance="Available" // Replace with dynamic data if available
          language="Khmer, English" // Replace with dynamic data if available
          phone="+855 977 34 54 71" // Replace with dynamic data if available
          email="example@gmail.com" // Replace with dynamic data if available
        />
        <MyResumeSection workExperiences={workExperiences} />{" "}
        {/* Pass workExperiences */}
        <MySkillSection skills={skills} />
        <MyProject projects={projects} />
        <BlogSection blogs={blogs} />
        <ContactSection
          address={contacts[0]?.address}
          email={contacts[0]?.contact_email}
          phone={contacts[0]?.phone}
        />
        <FooterSection />
      </div>
    );
  }

  return null;
};

export default DeveloperTemplate;
