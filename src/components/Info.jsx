import "./info.css";

export default function Info() {
  return (
    <>
      <div className="card--content">
        <img
          className="my_photo"
          src="/src/images/dulasau.png"
          alt="myphoto"
          width="100%"
        ></img>
        <h1 className="my_name">Dmitry Ulasau</h1>
        <h5 className="my_position">Software Developer</h5>
        <div className="my_portfolio">
          <a href="https://braingain-ulasau.netlify.app/" target="_blank">
            portfolio
          </a>
        </div>

        <div className="buttons">
          <button className="button button--email">
            <ion-icon name="mail-outline"></ion-icon>Email
          </button>
          <button id="myButton" className="button  button--linkedin">
            <ion-icon name="logo-linkedin"></ion-icon>LinkedIn
          </button>
        </div>
      </div>
    </>
  );
}
