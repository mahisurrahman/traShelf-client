import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router";
import useRequest from "../../APIServices/useRequest";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

function SignupPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userImg, setUserImg] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [userRole, setUserRole] = useState(0);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [style, setStyle] = useState({});
  const [postRequest, getRequest] = useRequest();
  const { loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // Calculate tilt based on cursor position
    const x = ((clientX - left) / width - 0.5) * 40;
    const y = ((clientY - top) / height - 0.5) * -40;

    setStyle({
      transform: `rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`,
      boxShadow: `${-x / 2}px ${y / 2}px 30px rgba(0, 255, 150, 0.3)`,
      transition: "transform 0.1s ease-out, box-shadow 0.2s ease-out",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserImg(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phoneNumber", phoneNumber);
    formData.append("userImg", userImg);
    formData.append("userRole", 2);

    // Option 1: Log each entry
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ": " + pair[1]);
    // }
    const crtUser = await postRequest("/auth/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (crtUser?.data?.error === false) {
      console.log(crtUser, "Create User");
      setLoading(false);
      Swal.fire("User Registered Successfully");
    }
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-sky-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-sky-800 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute w-96 h-96 rounded-full bg-sky-600 opacity-20 top-1/4 -left-48 blur-xl"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blue-500 opacity-20 bottom-0 right-0 blur-xl"></div>
        <div className="absolute w-64 h-64 rounded-full bg-indigo-500 opacity-20 bottom-1/4 left-1/3 blur-xl"></div>

        {/* Particle effect */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20 animate-float"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          ></div>
        ))}

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Signup container */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-4 md:mx-8 lg:mx-auto relative z-10 shadow-2xl rounded-2xl overflow-hidden animate-fadeIn">
        {/* Left panel - illustration */}
        <div className="hidden md:block w-1/2 bg-sky-800 p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-sky-600/40 to-indigo-800/40 backdrop-blur-sm"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="animate-fadeInUp">
              <div className="w-full flex items-center justify-center">
                <img
                  src="https://i.ibb.co/ZB88ShC/Final-V.png"
                  className="w-16 h-20 pb-5"
                  alt=""
                />
              </div>
              <h1 className="text-white text-4xl font-bold mb-4 text-center">
                Join Our Community
              </h1>
              <p className="text-sky-200 text-lg text-center">
                Create your account and start your journey with us today.
              </p>
            </div>

            {/*Left Banner Contents*/}
            <div
              className="rounded-2xl py-10 w-full h-full"
              onMouseMove={handleMouseMove}
              onMouseLeave={() =>
                setStyle({
                  transform: "rotateY(0deg) rotateX(0deg) scale(1)",
                  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.5)",
                  transition:
                    "transform 0.5s ease-out, box-shadow 0.5s ease-out",
                })
              }
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              <img
                src="https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full rounded-2xl object-cover shadow-xl"
                alt="Digital Connected World"
                style={style}
              />
            </div>

            {/* Abstract shapes */}
            <div className="absolute right-0 bottom-0 w-64 h-64 opacity-80">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  fill="rgba(255, 255, 255, 0.1)"
                  d="M41.3,-59.1C54.4,-50.9,66.4,-40.5,73.9,-26.8C81.4,-13,84.3,4.1,79.7,19.2C75.2,34.3,63,47.4,48.7,57.9C34.4,68.3,17.2,76.2,0.2,75.9C-16.8,75.6,-33.6,67.2,-47.1,55.8C-60.6,44.4,-70.8,30,-74.8,14C-78.8,-2,-76.6,-19.6,-68.3,-33.2C-60,-46.9,-45.6,-56.6,-31.5,-64.5C-17.4,-72.5,-3.7,-78.8,8.3,-75.9C20.3,-73,28.3,-67.2,41.3,-59.1Z"
                  transform="translate(100 100)"
                  className="animate-morph"
                />
              </svg>
            </div>

            <div className="animate-fadeInUp delay-300">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-1 bg-indigo-400 rounded-full"></div>
                <div className="text-sky-200 font-medium">
                  Join thousands of users
                </div>
              </div>

              {/* Brand logos */}
              <div className="flex space-x-6">
                {["TraIdeas", "Developers", "Brothers"].map((text, i) => (
                  <div
                    key={i}
                    className="bg-white/10 text-white px-4 py-2 rounded-lg backdrop-blur-sm"
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right panel - signup form */}
        <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-xl p-8 md:p-12 flex flex-col justify-center">
          <div className="animate-fadeInUp delay-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Sign Up</h2>
              <p className="text-sky-200">
                Please fill in your details to create your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeInUp delay-200">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-sky-200 mb-2"
                  >
                    First Name
                  </label>
                  <div className="relative group">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="pl-10 w-full bg-white border border-indigo-300/30 rounded-lg py-3 px-4 text-black placeholder-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                      placeholder="John"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-sky-200 mb-2"
                  >
                    Last Name
                  </label>
                  <div className="relative group">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="pl-10 w-full bg-white border border-indigo-300/30 rounded-lg py-3 px-4 text-black placeholder-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Username field */}
              <div className="animate-fadeInUp delay-300">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-sky-200 mb-2"
                >
                  Username
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-300 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 w-full bg-white border border-indigo-300/30 rounded-lg py-3 px-4 text-black placeholder-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                    placeholder="johndoe123"
                    required
                  />
                </div>
              </div>

              {/* Email field */}
              <div className="animate-fadeInUp delay-400">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-sky-200 mb-2"
                >
                  Email
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 w-full bg-white border border-indigo-300/30 rounded-lg py-3 px-4 text-black placeholder-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="animate-fadeInUp delay-500">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-indigo-200 mb-2"
                >
                  Password
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 w-full bg-white border border-sky-300/30 rounded-lg py-3 px-4 text-black placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              {/* Phone Number field */}
              <div className="animate-fadeInUp delay-600">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-sky-200 mb-2"
                >
                  Phone Number
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-300 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="pl-10 w-full bg-white border border-indigo-300/30 rounded-lg py-3 px-4 text-black placeholder-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              {/* Profile Image Upload */}
              <div className="animate-fadeInUp delay-700">
                <label
                  htmlFor="userImg"
                  className="block text-sm font-medium text-sky-200 mb-2"
                >
                  Profile Picture
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex-grow">
                    <label
                      htmlFor="userImg"
                      className="flex items-center justify-center w-full bg-white/5 border border-dashed border-indigo-300/50 rounded-lg py-3 px-4 cursor-pointer hover:bg-white/10 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-300 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sky-200">Upload Image</span>
                      <input
                        type="file"
                        id="userImg"
                        onChange={handleImageChange}
                        className="hidden"
                        accept="image/*"
                      />
                    </label>
                  </div>
                  {previewImg && (
                    <div className="h-16 w-16 rounded-full border-2 border-indigo-400 overflow-hidden flex-shrink-0">
                      <img
                        src={previewImg}
                        alt="Profile preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Terms and conditions */}
              <div className="flex items-center animate-fadeInUp delay-800">
                <input
                  id="accept-terms"
                  name="accept-terms"
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="h-4 w-4 bg-indigo-700 border-blue-500 rounded focus:ring-sky-500"
                  required
                />
                <label
                  htmlFor="accept-terms"
                  className="ml-2 block text-sm text-sky-200"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-white hover:text-indigo-300 underline"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-white hover:text-indigo-300 underline"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Sign up button */}
              <div className="animate-fadeInUp delay-900">
                {acceptTerms ? (
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center bg-gradient-to-r from-blue-600 to-sky-600 text-white font-medium py-3 px-4 rounded-lg cursor-pointer hover:from-sky-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all hover:-translate-y-1 active:translate-y-0 active:shadow-inner shadow-lg"
                  >
                    <span>Create Account</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </form>

            {/* Sign in link */}
            <div className="mt-8 text-center animate-fadeInUp delay-1000">
              <p className="text-sky-200">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-white hover:text-sky-300 font-medium underline transition-colors">
                    Sign in
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Radial light effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-sky-500 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
    </div>
  );
}

export default SignupPage;
