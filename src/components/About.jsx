import React from "react";

const About = () => {
  return (
    <div className=" about w-full h-auto ">
      <div className="w-full h-full flex items-center justify-center">
        <div className="md:w-[50%] w-[80%] flex flex-col py-[20vh]">
          <span className="text-center md:text-6xl text-3xl text-palette1-4">Who Are We?</span>
          <span className="text-center md:text-lg text-sm md:mt-10 mt-2 text-palette1-4">
            Exsolve is a startup business idea focused on providing high-quality
            web development services to clients through freelancing. Our team of
            web developers has expertise in various web development technologies
            and we aim to help businesses and individuals create professional
            and effective websites that meet their specific needs. We offer a
            range of web development services, including website design,
            development, maintenance, and optimization. We strive to deliver
            outstanding results that exceed our clients' expectations while
            maintaining a high level of communication and collaboration
            throughout the development process.
          </span>
        </div>
      </div>

      <section className="waves">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </section>
    </div>
  );
};

export default About;
