import React, { useState, useEffect } from "react";
import { Link } from "react-router";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [style, setStyle] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login credentials:", { email, password, rememberMe });
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-green-900 via-green-700 to-teal-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-900 via-green-700 to-teal-800 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute w-96 h-96 rounded-full bg-teal-600 opacity-20 top-1/4 -left-48 blur-xl"></div>
        <div className="absolute w-96 h-96 rounded-full bg-green-500 opacity-20 bottom-0 right-0 blur-xl"></div>
        <div className="absolute w-64 h-64 rounded-full bg-lime-500 opacity-20 bottom-1/4 left-1/3 blur-xl"></div>

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

      {/* Login container */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-4 md:mx-8 lg:mx-auto relative z-10 shadow-2xl rounded-2xl overflow-hidden animate-fadeIn">
        {/* Left panel - illustration */}
        <div className="hidden md:block w-1/2 bg-teal-800 p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/40 via-teal-600/40 to-lime-800/40 backdrop-blur-sm"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="animate-fadeInUp">
              <h1 className="text-white text-4xl font-bold mb-4">
                Welcome Back
              </h1>
              <p className="text-teal-200 text-lg">
                Access your account and continue your journey with us.
              </p>
            </div>

            {/*Left Banner Contents*/}
            <div
              className="rounded-2xl p-2"
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
                src="https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full rounded-2xl object-cover shadow-xl"
                alt="Retro 3D"
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
                <div className="w-12 h-1 bg-lime-400 rounded-full"></div>
                <div className="text-teal-200 font-medium">
                  Trusted by thousands
                </div>
              </div>

              {/* Testimonial/brand logos */}
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

        {/* Right panel - login form */}
        <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-xl p-8 md:p-12 flex flex-col justify-center">
          <div className="animate-fadeInUp delay-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Sign In</h2>
              <p className="text-teal-200">
                Please enter your credentials to access your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email field */}
              <div className="animate-fadeInUp delay-200">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-teal-200 mb-2"
                >
                  Email
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-lime-300 group-focus-within:text-white transition-colors">
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
                    className="pl-10 w-full bg-white/5 border border-lime-300/30 rounded-lg py-3 px-4 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="animate-fadeInUp delay-300">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-lime-200 mb-2"
                >
                  Password
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-lime-300 group-focus-within:text-white transition-colors">
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
                    className="pl-10 w-full bg-white/5 border border-teal-300/30 rounded-lg py-3 px-4 text-white placeholder-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between animate-fadeInUp delay-400">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 bg-lime-700 border-green-500 rounded focus:ring-teal-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-teal-200"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-sm font-medium text-teal-200 hover:text-white transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Sign in button */}
              <div className="animate-fadeInUp delay-500">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center bg-gradient-to-r from-green-600 to-teal-600 text-white font-medium py-3 px-4 rounded-lg cursor-pointer hover:from-teal-700 hover:to-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition-all hover:-translate-y-1 active:translate-y-0 active:shadow-inner shadow-lg"
                >
                  <span>Sign in</span>
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
              </div>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center animate-fadeInUp delay-600">
              <div className="flex-grow border-t border-teal-300/30"></div>
              <span className="flex-shrink mx-4 text-teal-200">
                Or continue with
              </span>
              <div className="flex-grow border-t border-teal-300/30"></div>
            </div>

            {/* Social login */}
            <div className="grid grid-cols-3 gap-4 animate-fadeInUp delay-700">
              {["Google", "Apple", "GitHub"].map((provider, i) => (
                <button
                  key={provider}
                  className="flex items-center justify-center py-3 px-4 bg-green/5 hover:bg-white/10 border border-lime-300/30 hover:cursor-pointer rounded-lg text-white transition-all hover:-translate-y-1 active:translate-y-0"
                >
                  {provider}
                </button>
              ))}
            </div>

            {/* Sign up link */}
            <div className="mt-8 text-center animate-fadeInUp delay-800">
              <p className="text-teal-200">
                Don't have an account?{" "}
                <Link to="/signup">
                  <span className="text-white hover:text-teal-300 font-medium underline transition-colors">
                    Create account
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Radial light effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-teal-500 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-green-500 opacity-30 rounded-full blur-3xl"></div>
    </div>
  );
}

export default LoginPage;
