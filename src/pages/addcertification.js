import Getstartbottomnav from "../components/getstartbottomnav";


export default function Addcert() {
  return (
    <div className="Addcert">
      <div className="common_title">
      <div className="app_title">
        <p>Legalpulse</p>
      </div>
      <div className="app_icon">
        <img src="./dog.jpeg" alt="" />
      </div>
    </div>
      <div className="kappa">
        <h1 style={{ color: "black", textAlign: "left" }}>
          Do you have certifications?
        </h1>
        <h2 style={{ color: "black", textAlign: "left" }}>
          Adding certifications to your profile is a geat way to show clients
          what you can do.
        </h2>
      </div>

      <div>
      <div className="alpha">
        <button className="fileinput">+</button>
        <h2 className="boom">Your certifications</h2>
      </div>
      <div className="beta">
        <input type="checkbox" name="nofile" className="inp" />
        <label htmlFor="nofile">
          Nothing to add? Check the box and keep going
        </label>
      </div>
    </div>

      <Getstartbottomnav />
    </div>
  );
}
