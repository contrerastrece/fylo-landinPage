import img1 from "../images/icon-access-anywhere.svg";
import img2 from "../images/icon-security.svg";
import img3 from "../images/icon-collaboration.svg";
import img4 from "../images/icon-any-file.svg";

const SectionTwo = () => {
  return (
    <section className="row  text-center d-flex justify-content-center py-5">
      <div className="col-8">
        <div className="row">
        <article className="col-md-6 my-5">
          <img src={img1} alt="" />
          <h3>Access your files, anywhere</h3>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </article>
        <article className="col-md-6 my-5">
          <img src={img2} alt="" />
          <h3>Security you can trust</h3>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </article>
        <article className="col-md-6 my-5">
          <img src={img3} alt="" />
          <h3>Real-time collaboration</h3>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </article>
        <article className="col-md-6 my-5">
          <img src={img4} alt="" />
          <h3>Store any type of file</h3>
          <p>
            Whether you&rsquo;re sharing holidays photos or work documents, Fylo
            has you covered allowing for all file types to be securely stored
            and shared.
          </p>
        </article>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
