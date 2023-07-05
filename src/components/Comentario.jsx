import profile1 from "../images/profile-1.jpg";
import profile2 from "../images/profile-2.jpg";
import profile3 from "../images/profile-3.jpg";
import './Comentario.css'


const Comentario = () => {
  return (
    <section className="row d-flex justify-content-center container-test">
      <div className="col-10">
        <div className="row gap-4">
          <div className=" test" style={{width:'18rem', maxwidth:'20rem'}}>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="profile d-flex">
              <img src={profile1} alt="" className="profile-img"/>
              <div className="info">
                <h4 className="name">Satish Patel</h4>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className="c test" style={{width:'18rem'}}>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="profile d-flex">
              <img src={profile2} alt="" className="profile-img" />
              <div className="info">
                <h4 className="name">Bruce McKenzie</h4>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className=" test" style={{width:'18rem'}}>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="profile d-flex">
              <img src={profile3} alt="" className="profile-img"  />
              <div className="info">
                <h4 className="name">Iva Boyd</h4>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comentario;
