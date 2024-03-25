import React, { useState } from "react";
import "../css/login.css";
import { Link } from "react-router-dom";
import { registerAPI, registerAPIS } from "../services/allAPI";

const LoginForm = () => {
  const[userdata,setuserdata]=useState({
    username: "",
    email: "",
    password: "",

  })
  const handileRegister=async(e)=>{
    e.preventDefault()

    console.log(userdata)
    const {username,email,password}=userdata
    if(!username||!email||!password){
      alert("pls fill the form")
    }
    else{
      const result=await registerAPIS(userdata) 
      alert(result)
      console.log(result)
    }


  }

  return (
    <div className="login-root">
    <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
      <div className="loginbackground box-background--white padding-top--64">
        <div className="loginbackground-gridContainer">
          <div className="box-root flex-flex" style={{ gridArea: 'top / start / 8 / end' }}>
            <div className="box-root" style={{ backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: 1 }}></div>
          </div>
          <div className="box-root flex-flex" style={{ gridArea: '4 / 2 / auto / 5' }}>
            <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
          </div>
          <div className="box-root flex-flex" style={{ gridArea: '6 / start / auto / 2' }}>
            <div className="box-root box-background--blue800" style={{ flexGrow: 1 }}></div>
          </div>
          <div className="box-root flex-flex" style={{ gridArea: '7 / start / auto / 4' }}>
            <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: 1 }}></div>
          </div>
          <div className="box-root flex-flex" style={{ gridArea: '8 / 4 / auto / 6' }}>
            <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
          </div>
          <div className="box-root flex-flex" style={{ gridArea: '2 / 15 / auto / end' }}>
            <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
          </div>
          <div className="box-root flex-flex" style={{ gridArea: '3 / 14 / auto / end' }}>
            <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }}></div>
          </div>
          <div className="box-root flex-flex" style={{ gridArea: '4 / 17 / auto / 20' }}>
            <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
          </div>
          <div className="box-root flex-flex" style={{ gridArea: '5 / 14 / auto / 17' }}>
            <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }}></div>
          </div>
        </div>
      </div>
      <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
        <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1><a href="http://blog.stackfindover.com/" rel="dofollow">Bookmart</a></h1>
        </div>
        <div className="formbg-outer">
          <div className="formbg">
            <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15">create account</span>
              <form id="stripe-login">
                <div className="field padding-bottom--24">
                  <label htmlFor="email">user name</label>
                  <input type="text" name="text" onChange={(e)=>setuserdata({...userdata,username:e.target.value})}/>
                </div>
                <div className="field padding-bottom--24">
                  <div className="grid--50-50">
                    <label htmlFor="password">email</label>
                    <div className="reset-pass">
                    </div>
                  </div>
                  <input type="email" name="email"  onChange={(e)=>setuserdata({...userdata,email:e.target.value})}/>
                </div>
                <div className="field padding-bottom--24">
                  <label htmlFor="password">password</label>
                  <input type="text" name="password"    onChange={(e)=>setuserdata({...userdata,password:e.target.value})} />
                </div>
                <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                </div>
                <div className="field padding-bottom--24">
                  <input type="submit" name="submit" value="Register" onClick={handileRegister} />
                </div>
                <div className="field">
                  <Link to='/login' style={{marginLeft:'80px'}}>allready have account</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-link padding-top--24">
            <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
              <span><a href="#">© Stackfindover</a></span>
              <span><a href="#">Contacts</a></span>
              <span><a href="#">Privacy & terms</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default LoginForm;
