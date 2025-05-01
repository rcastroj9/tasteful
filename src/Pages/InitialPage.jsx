import React from 'react';
import { Link } from 'react-router-dom';

const icons = [
  '🗓️', // calendar/event
  '🥳', // celebration
  '🍽️', // dining/meal
  '🎤', // presentation/speech
  '🏅', // achievement
  '🤗', // companionship
  '🏓', // growth
  '🧑‍🤝‍🧑', // teamwork
  '💡', // ideas/brainstorming
  '🏆', // success
  '📈', // progress
];

const InitialPage = () => {
  return (
    <div className="min-h-screen b-gradient-to-bg from-MsoftYellow to-transparent flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="relative flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-2xl">
            {icons.map((icon, idx) => (
              <div key={idx} className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow text-3xl text-yellow-400 border border-yellow-100">
                {icon}
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="inline-block w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-yellow-400 text-3xl border-2 border-yellow-200">⬇️</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2 mt-8">Plan a Team Outing<br />in <span className="text-Myellow">5 Minutes</span></h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-8">Your AI assistant will find, compare, and book the perfect outing for your team.</p>
        <Link to="/" className="cursor-pointer text__16 btnClass !px-[32px] text-white bg-Myellow">Get started</Link>
      </main>
    </div>
  );
};

export default InitialPage; 