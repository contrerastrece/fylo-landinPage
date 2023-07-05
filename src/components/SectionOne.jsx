import img from "../images/illustration-intro.png";
import './SectionOne.css';

const SectionOne = () => {
  return (
    <section className="text-center my-5">
      <img src={img} alt="img" className="img-fluid"/>
      <h2 className="">All your files in one secure location, accessible anywhere.</h2>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className="btn one">Get Started</button>
    </section>
  );
};

export default SectionOne;
