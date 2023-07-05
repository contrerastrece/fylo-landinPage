import img1 from "../images/illustration-stay-productive.png";
import iconArrow from "../images/icon-arrow.svg";
const SectionThree = () => {
  return (
    <section className="row">
      <div className="col-12 col-md-6">
      <img src={img1} alt="" className="img-fluid" />

      </div>
      <div className="col-12 col-md-6">

      <h3>Stay productive, wherever you are</h3>
      <p>
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </p>
      <p>
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </p>
      <a href="#">See how Fylo works <img src={iconArrow} alt="" /> </a>
      </div>
    </section>
  );
};

export default SectionThree;
