import { Component } from "react";

class MyFooter extends Component {
  render() {
    return (
      <div className="text-center bg-dark text-white p-4">
        <h2>Contattaci</h2>
        <div id="contatti">
          <a href="tel: +3911223456">(+39) 11223456</a>
          <br />
          <a href="mailto: info@epicode.school">info@epicode.school</a>
          <br />
        </div>
      </div>
    );
  }
}

export default MyFooter;
