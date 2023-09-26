import React from "react"
import Avatar from "./img/profile_image.jpg"

export default function Container(){

  function Education(){
    return(
      <div>
      <h3>2022</h3>
      <p>Frontend Development</p>
      <h5>Start2Impact</h5>
      <p>Ingegneria Informartica</p>
      <h5>Universitas Mercatorum</h5>
      <h3>2013</h3>
      <p>Ragioneria</p>
      <h5>ITC Mario Rapisardi</h5>
      </div>
    );
  }

  function Work(){
    return(
      <div>
      <h3>2018</h3>
      <p>Graphic Designer</p>
      <h5>Newtoon SAS</h5>
      <h3>2015</h3>
      <p>Admin eBay Store</p>
      <h5>Amico Elettromeccanica Srl</h5>
      </div>
    );
  }

  class MyProfile extends React.Component{
    constructor(props){
      super(props);
      this.name = "Amerigo"
      this.surname = "Passaro"
      this.state = {education: false, work: false};
      this.handleChangeEdu = this.handleChangeEdu.bind(this);
      this.handleChangeWor = this.handleChangeWor.bind(this);
    }


    handleChangeEdu(){
      this.setState (prevState => ({
        education: !prevState.education
      }))
    }

    handleChangeWor(){
      this.setState (prevState => ({
        work: !prevState.work
      }))
    }

    render() {
      return (
        <div className="card">
        <h1>{this.name} {this.surname}</h1>
        <img src={Avatar} className="profile-img"/>
        <h2>Formazione</h2>
        <p>{this.state.education ? <Education /> : ""}</p>
        <button onClick={this.handleChangeEdu}>{this.state.education ? "Nascondi" : "Mostra"}</button>
        <h2>Lavoro</h2>
        <p>{this.state.work ? <Work /> : ""}</p>
        <button onClick={this.handleChangeWor}>{this.state.work ? "Nascondi" : "Mostra"}</button>
        </div>
      )
    }

  }


  return <MyProfile />

}
