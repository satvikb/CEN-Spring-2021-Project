import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button'
import { db, auth } from '../firebase.config';
import Form from 'react-bootstrap/Form'
import history from '../components/history';

// https://stackoverflow.com/questions/34119793/react-router-redirection-after-login
function AdminLogin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        history.push('/admindashboard')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Failure logging in. " + errorCode + ": "+errorMessage)
      });

  }

  return (
    <div className="AdminLogin">
      <h2 style={{marginBottom:50}}>Admin Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group  controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default AdminLogin;
