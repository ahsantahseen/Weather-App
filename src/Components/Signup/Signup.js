
import React,{useRef,useState} from 'react'
import {Form,Card,Button,Alert} from 'react-bootstrap'
import {useAuth} from "../../Contexts/AuthContext"
import {Link,useHistory} from "react-router-dom"

const Signup = () => {
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmationRef=useRef()
    const {signUp,currentUser}=useAuth()
    const [error, seterror] = useState('')
    const [loading, setloading] = useState(false)
    const history=useHistory();

     const SubmissionHandler=async(e)=>{
          e.preventDefault()
          if(passwordRef.current.value!==passwordConfirmationRef.current.value){
              return seterror("Passwords don't match")
          }
          try{
              seterror('')
              setloading(true)
             await signUp(emailRef.current.value,passwordRef.current.value);
             history.push("/login")
          }
          catch{
               seterror("Failure! Cannot Create an Account")
          }
          setloading(false)
    }

    return (
        <>
          <Card>
              <Card.Body>
                  <h2 className="text-center mb-4">Sign Up</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  
                  <Form onSubmit={SubmissionHandler}>
                      <Form.Group id="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" ref={emailRef} required></Form.Control>
                      </Form.Group>
                      
                      <Form.Group id="password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" ref={passwordRef} required></Form.Control>
                      </Form.Group>
                      
                      <Form.Group id="passwordConfirmation">
                          <Form.Label>Confirm your password</Form.Label>
                          <Form.Control type="password" ref={passwordConfirmationRef} required></Form.Control>
                      </Form.Group>
                      <Button disabled={loading} type="submit" className="w-100 text-center mt-2">Sign In</Button>
                  </Form>
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              Already have an account? <Link to="/login">Log In</Link>
              </div>  
        </>
    )
}

export default Signup;