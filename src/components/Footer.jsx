import logo from "../images/logo.svg";
import location from "../images/icon-location.svg";
import email from "../images/icon-email.svg";
import phone from "../images/icon-phone.svg";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <img src={logo} alt="icon-logo" />
          <img src={location} alt="icon-location" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <img src={phone} alt="" />
          <p>+1-543-123-4567</p>
          <img src={email} alt="" />
          <p>example@fylo.com</p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <p>
            <a href="#" className="text-reset">
              About Us
            </a>
          </p>
          <p>
            <a href="#" className="text-reset">
              Jobs
            </a>
          </p>
          <p>
            <a href="#" className="text-reset">
              Press
            </a>
          </p>
          <p>
            <a href="#" className="text-reset">
              Blog
            </a>
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <p>
            <a href="#" className="text-reset">
              Contact Us
            </a>
          </p>
          <p>
            <a href="#" className="text-reset">
              Terms
            </a>
          </p>
          <p>
            <a href="#" className="text-reset">
              Privacy
            </a>
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <img src="" alt="facebook" />
          <img src="" alt="twitter" />
          <img src="" alt="instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
