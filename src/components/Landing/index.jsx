import {SOCIALS, TOP_SECTION} from '../../Module/General';
import MytypedComponent from '../Typed/index.js';
import './style.css';

const Btn = props => {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
};

const About = () => {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      {/* <div className="join_dis">
        <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
          <Btn
            ico="fab fa-2x fa-discord"
            class="join_disco"
            type="Join our discord"
            overlay="Click the link"
          />
        </a>
      </div> */}
      <div className="buttom-group">
      <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
         
          <Btn class="register"  ico="fab fa-2x fa-discord" type="Join discord"  overlay="Click the link" />
        </a>
        <a rel="noreferrer" target="_blank" href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
         
          <Btn class="register" style={{marginRight:'1rem'}} ico="fa fa-2x fa-user-o" type="Register"  overlay="Click the link" />
        </a>

    
      </div>
    </div>
  );
};

export {Btn, Myinfo};
