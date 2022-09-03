import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Born and raised in Brazil, came to United States in 2007 with 24 years old, 
          became an american citizen in 2015 (very proud about it ), became a self employed ,
          with a very successful Painting company in Florida for 11 years.
        </p>

        <br />

        <p className="text-xl">
          On January 31st-2020, I suffered a massive stroke (due to covid) paralizing half of my body,
          I'm able to walk, see, talk again, having to change my carreer, i started a boot camp
          for 9 months in August-2020, studying to become a Full stack web developer a dream i always had,(bethel School of technology, reeding, california )
          I'm looking for a great company with good core values where i can be a great Asset, and help as much as i can to get the job done.   
        </p>
      </div>
    </div>
  );
};

export default About;
