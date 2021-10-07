import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const Login= ({ contacts, logins }) => {
  const [name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        contacts.filter((contact) =>
        contact.setName === name  ? contact : null
      );
      contacts.filter((contact) =>
      contact.SetPassword === Password  ? contact : null
    );
  
       
    if (!name || !Password ) {
    
        toast.success("Enter correct Username and Password");
      }
      
        const data = {
           name ,
           Password
          };
    

    logins(data);
    toast.success("Login successful");
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Login Page</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
           
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => ({
    contacts: state,
  });
  const mapDispatchToProps = (dispatch) => ({
    logins: (data) => {
      dispatch({ type: "VIEW", payload: data });
    },
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);