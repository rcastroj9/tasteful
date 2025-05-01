import React from 'react';
import { NavLink } from 'react-router-dom';

const SecCompare = ({ options }) => {
  console.log("options");
  console.log(options);
  return (
    <section className="flex justify-center ">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center space-between">
        {options.map((option, idx) => (
          <div className="flex-grow flex-1 mx-6 items-center h-full w-full">
            <div
              key={idx}
              className="flex-1 bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center border border-yellow-100 transition-all relative h-full"
            >
              <h3 className="text-2xl font-bold mb-2 text-center">{option.name}</h3>
              <div className="mb-2 text-gray-500">Budget: <span className="text-yellow-500 font-semibold">{option.budget}</span></div>
              <ul className="w-full text-left space-y-2 text-gray-700 mb-6">
                {option.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="inline-block w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs mr-2">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
              <NavLink to="/payment" className="mt-auto w-full py-3 rounded-xl font-semibold bg-yellow-400 text-white hover:bg-yellow-500 text-center transition">Let's book it!</NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecCompare; 