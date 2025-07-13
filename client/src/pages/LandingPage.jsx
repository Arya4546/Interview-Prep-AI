import React, { useState } from 'react';
import HERO_IMG from "../assets/hero-img.png";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from 'react-router-dom';
import { LuSparkles } from "react-icons/lu";
import Modal from "../components/Modal";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/SignUp";
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import ProfileInfoCard from '../components/Cards/ProfileInfoCard'

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-[#FFFCEF] relative overflow-x-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-200/20 blur-[65px] z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-8 pb-32 flex flex-col gap-16">
          {/* Header */}
          <header className="flex justify-between items-center">
            <div className="text-xl font-bold text-black">
              Interview Prep AI
            </div>
        {user ? (
          <ProfileInfoCard />
        ) : (    <button
              onClick={() => setOpenAuthModal(true)}
              className="bg-gradient-to-r from-[#FF9324] to-[#FCD760] text-sm font-semibold text-white px-6 py-2 rounded-full hover:scale-105 transition-transform"
            >
              Login / Sign Up
            </button>
            )}
          </header>

          {/* Hero */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text */}
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <span className="flex items-center gap-2 text-xs font-semibold text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  <LuSparkles /> AI Powered
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6 leading-tight">
                Ace Interviews with <br />
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate-text-shine">
                  AI-Powered
                </span>{" "}
                Learning
              </h1>
              <p className="text-base md:text-lg text-gray-800 mb-8">
                Get role-specific questions, expand answers when you need them, dive deeper into concepts, and organize everything your way. From preparation to mastery — your ultimate interview toolkit is here.
              </p>
              <button
                onClick={handleCTA}
                className="bg-black text-white font-semibold px-7 py-3 rounded-full hover:bg-yellow-100 hover:text-black border border-black hover:border-yellow-400 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Hero Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src={HERO_IMG}
                alt="How it works"
                className="w-full max-w-[600px] rounded-xl shadow-md object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="w-full bg-[#FFFCEF] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Features That Make You Shine
          </h2>

          <div className="flex flex-col gap-10">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {APP_FEATURES.slice(0, 3).map((feature) => (
                <div
                  key={feature.id}
                  className="bg-[#FFFEF8] p-6 rounded-xl shadow hover:shadow-lg border border-amber-100 transition"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {APP_FEATURES.slice(3).map((feature) => (
                <div
                  key={feature.id}
                  className="bg-[#FFFEF8] p-6 rounded-xl shadow hover:shadow-lg border border-amber-100 transition"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-sm bg-gray-50 text-center text-gray-600 p-5">
        Made with 🩵 Happy Coding
      </footer>

      {/* Auth Modal */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        {currentPage === "login" && (
          <Login setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "signup" && (
          <Signup setCurrentPage={setCurrentPage} />
        )}
      </Modal>
    </>
  );
};

export default LandingPage;
