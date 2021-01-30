
import React,{useRef,useState} from 'react'
import {Form,Card,Button,Alert} from 'react-bootstrap'
import {useAuth} from "../../Contexts/AuthContext"
import {Link,useHistory} from "react-router-dom"
import { FaLock, FaSun,FaEnvelope } from 'react-icons/fa'

const Login = () => {
    const emailRef=useRef()
    const passwordRef=useRef()
    
    const {Login}=useAuth()
    const [error, seterror] = useState('')
    const [loading, setloading] = useState(false)
    const history=useHistory()

     const SubmissionHandler=async(e)=>{
          e.preventDefault()
          
          try{
              seterror('')
              setloading(true)
             await Login(emailRef.current.value,passwordRef.current.value);
             history.push("/")
          }
          catch{
               seterror("Failure! Cannot Sign")
          }
          setloading(false)
    }

    return (
        <>
          <Card>
              <Card.Body>
                  
              <h2 className="text-center mb-4">Weather App <FaSun color="orange" style={{verticalAlign:"middle"}}/></h2>
                  <h6 className="text-center mb-4">Enter your credentials to Log in</h6>
                  {error && <Alert variant="danger">{error}</Alert>}
                  
                  <Form onSubmit={SubmissionHandler}>
                      <Form.Group id="email">
                          <Form.Label>Email <FaEnvelope color="blue" style={{verticalAlign:"-2px"}}/></Form.Label>
                          <Form.Control type="email" ref={emailRef} required></Form.Control>
                      </Form.Group>
                      
                      <Form.Group id="password">
                          <Form.Label>Password <FaLock color="blue" style={{verticalAlign:"-3px"}}/></Form.Label>
                          <Form.Control type="password" ref={passwordRef} required></Form.Control>
                      </Form.Group>
                      <Button disabled={loading} type="submit" className="w-100 text-center mt-2">Log In</Button>
                  </Form>
                  <div className="w-100 text-center mt-2">
                      <Link to="/forgot-password">Forgot Password?</Link>
                  </div>
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
              </div>  
        </>
    )
}

export default Login;