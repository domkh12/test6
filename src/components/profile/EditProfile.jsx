import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdEmail } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { BsFillCameraFill } from "react-icons/bs";
import { useDropzone } from "react-dropzone";
import { fetchProfile, updateProfile } from "../../redux/user/UserSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader viewBox="0 0 380 70">
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
);

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile, status, error } = useSelector((state) => state.user);

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [dob, setDob] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [saveStatus, setSaveStatus] = useState("");
  const [file, setFile] = useState(null);
  const [uploadResponse, setUploadResponse] = useState("");
  const [uploadError, setUploadError] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch, isUpdate]);

  useEffect(() => {
    if (profile) {
      setFirstName(profile.first_name);
      setLastName(profile.last_name);
      setSelectedGender(profile.gender);
      setContactNumber(profile.phone_number);
      setAvatar(profile.avatar);
      setDob(profile.dob);
      setUsername(profile.username);
      setAddress(profile.address);
      setBio(profile.bio);
      setFacebook(profile.facebook);
      setTwitter(profile.twitter);
      setInstagram(profile.instagram);
      setLinkedin(profile.linkedin);
    }
  }, [profile]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelect = (gender) => {
    setSelectedGender(gender);
    setShowDropdown(false);
  };

  const uploadFile = async (file) => {
    if (!file) {
      setUploadError("Please select a file to upload.");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxODEwNjk4LCJpYXQiOjE3MjEyMDU4OTgsImp0aSI6Ijc1ZmMxZGI0Yjc1MDQ0ZmE4MTQ0MWJlOWJhMmYzMzBiIiwidXNlcl9pZCI6MX0.brdv1Uh5IMj9G4RoBNyrcxeml6622AsL6WVlKvaJ2rY"
    );

    const formdata = new FormData();
    formdata.append("file", file, file.name);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://136.228.158.126:5470/api/upload/",
        requestOptions
      );
      const result = await response.json();
      setUploadResponse(result.url);
      setAvatar(result.url);
    } catch (error) {
      setUploadError(error.toString());
    }
  };

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles[0]) {
      const file = acceptedFiles[0];
      console.log("Upload: " + file);
      setFile(file);
      uploadFile(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    gender: Yup.string().required("Gender is required"),
    phone_number: Yup.string().required("Contact Number is required"),
    dob: Yup.string().required("Date of Birth is required"),
    username: Yup.string().required("Username is required"),
    address: Yup.string().required("Address is required"),
    bio: Yup.string().required("Bio is required"),
    facebook: Yup.string()
      .url("Invalid URL")
      .required("Facebook URL is required"),
    twitter: Yup.string()
      .url("Invalid URL")
      .required("Twitter URL is required"),
    instagram: Yup.string()
      .url("Invalid URL")
      .required("Instagram URL is required"),
    linkedin: Yup.string()
      .url("Invalid URL")
      .required("LinkedIn URL is required"),
  });

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("gender", selectedGender);
    formData.append("phone_number", contactNumber);
    formData.append("dob", dob);
    formData.append("username", username);
    formData.append("address", address);
    formData.append("bio", bio);
    formData.append("facebook", facebook);
    formData.append("twitter", twitter);
    formData.append("instagram", instagram);
    formData.append("linkedin", linkedin);
    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      const updatedProfile = await dispatch(updateProfile(formData)).unwrap();
      setSaveStatus("Profile updated successfully!");
      setFirstName(updatedProfile.first_name);
      setLastName(updatedProfile.last_name);
      setSelectedGender(updatedProfile.gender);
      setContactNumber(updatedProfile.phone_number);
      if (avatar) {
        setAvatar(
          updatedProfile.avatar ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        );
      }
      setDob(updatedProfile.dob);
      setUsername(updatedProfile.username);
      setAddress(updatedProfile.address);
      setBio(updatedProfile.bio);
      setFacebook(updatedProfile.facebook);
      setTwitter(updatedProfile.twitter);
      setInstagram(updatedProfile.instagram);
      setLinkedin(updatedProfile.linkedin);
      setIsUpdate(!isUpdate); // Trigger re-fetch
    } catch (err) {
      console.error("Failed to update profile:", err);
      setSaveStatus(`Failed to update profile: ${err}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-900 shadow-md rounded-lg mt-10">
      <div className="flex items-center space-x-6 mb-8">
        <div className="relative group" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <div className="w-24 h-24 rounded-full bg-gray-300 flex justify-center items-center">
              <p>Drop image here...</p>
            </div>
          ) : (
            <img
              className="w-24 h-24 rounded-full object-cover"
              src={avatar}
              alt="Profile"
            />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
            <BsFillCameraFill className="text-white" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            {profile ? profile.username : ""}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {profile ? profile.email : ""}
          </p>
        </div>
      </div>

      {status === "loading" && <MyLoader />}
      {status === "failed" && <p className="text-red-500">{error}</p>}
      {status === "succeeded" && profile && (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Gender
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                placeholder="Select Gender"
                value={selectedGender}
                readOnly
                onClick={toggleDropdown}
                className="block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm cursor-pointer"
              />
              <SlArrowDown
                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                onClick={toggleDropdown}
              />
            </div>
            {showDropdown && (
              <div className="absolute z-10 mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg w-full">
                <div
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={() => handleSelect("M")}
                >
                  Male
                </div>
                <div
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={() => handleSelect("F")}
                >
                  Female
                </div>
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Contact Number
            </label>
            <input
              type="text"
              placeholder="Your Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Date of Birth
            </label>
            <input
              type="date"
              placeholder="Your Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="date-input mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Username
            </label>
            <input
              type="text"
              placeholder="Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Address
            </label>
            <input
              type="text"
              placeholder="Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Bio
            </label>
            <textarea
              placeholder="Write something about yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Facebook
            </label>
            <input
              type="url"
              placeholder="Your Facebook Profile Link"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Twitter
            </label>
            <input
              type="url"
              placeholder="Your Twitter Profile Link"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Instagram
            </label>
            <input
              type="url"
              placeholder="Your Instagram Profile Link"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              LinkedIn
            </label>
            <input
              type="url"
              placeholder="Your LinkedIn Profile Link"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="col-span-1 md:col-span-2 text-right">
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default EditProfile;
