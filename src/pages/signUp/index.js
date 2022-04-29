///The condition "originalFilePath != null”  and "originalFilePath.length() > 0”  must be true before the constructor method can execute.
///2.    The condition "convertedFilePath != null " and "convertedFilePath.length() > 0”  must be true
///@post-condition: The condition "result == true" must be true
/// program by contract https://github.com/anudeepmv/WEBSTER--UI/issues/38
import React ,{useEffect, useState} from 'react'
import { Button} from 'react-bootstrap'
import { Col,Row,Card } from 'react-bootstrap'
import Api from '../../Api'
import { faEye} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useHistory} from 'react-router-dom';

const SignUp =()=>{
    const [formValues,setFormValues]=useState('')
    const [err,setErr]=useState('')
    const [collegeList,setCollegeList]=useState('')
  
   
    const history = useHistory();
   let path = window.location.pathname 
   

   const CreateUser=(e)=>{
    e.preventDefault()
     const data= ({
         /// @invariant ("email != null && email.length() > 0")
         ///  @invariant ("password != null && password.length() > 0")
         ///  @invariant ("phone != null && phone.length() > 0")
         ///  @invariant ("first_name != null && first_name.length() > 0")
         /// @invariant ("last_name != null && last_name.length() > 0")
      email:formValues.email ,
      password: formValues.password,
      phone: formValues.phone,
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      role:formValues.role,
      org_id: formValues.org_id,
      status:1
  })

     Api.signUp(data)
        .then((res)=>{
          history.push('/')
        })
       ///
        .catch((err)=>{
          if(err.msg==="Email Ram@mailinator.com is already taken"){
            alert('user already exist')
          }else{
            alert('please try again')
          }
          
        })
   }
   

      useEffect(()=>{
        Api.collegeList()
        .then((res)=>{setCollegeList(res.data.data)
        console.log('collegeList',res.data.data)
        })
        .catch((err)=>console.log('Error',err))
      },[])
  
     const onChange = (event) => {
      const { name, value} = event.target;
      setFormValues({
        ...formValues,
        [name]: value
      });

      console.log('namename',name)
      console.log('valuevalue',value)
      
    }

    const showPswd=(e)=> {
      let x
      if(e.target.id=='pswd'){
        x = document.getElementById("password");
      }else{
         x = document.getElementById("repassword");
      }
      ///  @ Invariant: The condition " text!= null”, “text.length() > 0”, “password!= null” and “password.length() > 0" must be true
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }

return(

   <Row className='auth m-0 h-100 w-100'>
   
       <Card className='w-50 signUpMain jet my-auto mx-auto'>
           <Col className='h-100 w-75 '>
           <Col className='loginform p-0 mt-4 ml-0 mr-0 '>
           <h5 className='text-center p-0 headindLogin'>Please Sign-up</h5>
       /// @ Invariant: The condition " text!= null”, “text.length() > 0”, “email!= null” and “email.length() > 0" must be true of a class whenever it is accessible to the client.
           <form className='signupForm'
            onSubmit={(e)=>{CreateUser(e)}}
             >
                 <Row className='justify-content-between signUpRow'>
                 <div className="form-group">
                    <label className='signupLabel' htmlFor="exampleInputEmail1 m-0" >First Name</label>
                    <input
                    required
                    onChange={onChange}
                    type="text" name='first_name'  className="form-control  input-highlgt border-top-0 border-right-0  border-left-0 "  aria-describedby="emailHelp" placeholder="Enter your First Name"/>
                /// @ Invariant: The condition " text!= null”, “text.length() > 0”, “last_name!= null” and “last_name.length() > 0" must be true of a class whenever it is accessible to the client.
                </div><div className="form-group">
                    <label className='signupLabel'htmlFor="exampleInputEmail1 m-0">Last Name</label>
                    <input
                       required
                    onChange={onChange}
                    type="text" name='last_name' className="form-control input-highlgt border-top-0 border-right-0  border-left-0 "  aria-describedby="emailHelp" placeholder="Enter your Last Name"/>
                
                </div>
                 </Row>
                <Row className='justify-content-between signUpRow'>
                <div className="form-group">
                    <label className='signupLabel' htmlFor="exampleInputEmail1 m-0">Email ID:</label>
                    <input
                       required
                    onChange={onChange}
                    type="email" name='email' className="form-control input-highlgt border-top-0 border-right-0  border-left-0 "  aria-describedby="emailHelp" placeholder="Enter your Email ID"/>
                
                </div>
                <div className="form-group">
                    <label className='signupLabel' htmlFor="exampleInputEmail1 m-0">Phone Number</label>
                    <input
                       required
                    onChange={onChange}
                    type="phone" name='phone' className="form-control input-highlgt border-top-0 border-right-0  border-left-0 " aria-describedby="emailHelp" placeholder="Enter your Phone Number"/>
                
                </div>
                </Row>
  
            
                <Row className='justify-content-between signUpRow'>
                 <div className="form-group">
                 <label className='signupLabel' htmlFor="exampleInputPassword1">User Type</label>
                    <select 
                        onChange={onChange}
                       required
                    name='role'
                    className="form-control selectSignUp border-top-0 border-right-0   border-left-0" 
                    >
                        <option value="" selected disabled hidden>Select user</option>
                        <option value="admin">Admin</option>
                        <option value="member">Student</option>
                       
                    </select>
                
                </div>
                
                
                <div className="form-group">
                <label className='signupLabel' htmlFor="exampleInputPassword1"> College</label>
                    <select 
                       required 
                       onChange={onChange}
                    name='org_id'
                    className="form-control selectSignUp border-top-0 border-right-0   border-left-0" 
                    >
                        <option className='selectSignUp' value="" selected disabled hidden> Select College</option>
                          {collegeList&&collegeList.length>0&&collegeList.map((item)=>(
                              <option value={item._id} id={item._id}>{item.name}</option>
                          ))}
                    </select>
                </div>
                 </Row>

      /// @pre-condition:
   ///    1.    The condition "password != null”  and "password.length() > 0”  must be true before the constructor method can execute.
   ///    2.    The condition "password != null " and "password.length() > 0”  must be true before the setPassword() method can execute.
    ///   @post-condition: The condition "result == true" must be true when setPassword() method finished executing.
                 <Row className='justify-content-between signUpRow'>
                <div className="form-group">
                    <label className='signupLabel' htmlFor="exampleInputPassword1">Password:</label>
                    <input type="password"
                       required
                    onChange={onChange}
                    className="form-control border-top-0 border-right-0   border-left-0" 
                    name="password"
                    id='password'
                    placeholder="Enter your Password"
                   /// @Requires("password != null && password.length() > 0")
      /// @Ensures("result == true")
       /// if wrong password if given it shows you for other try
                    />
                    <FontAwesomeIcon
                     toggle="#password-field" 
                     onClick={(e)=>showPswd(e)}
                     id='pswd'
                     style={{cursor:'pointer'}}
                     className="fa fa-fw fa-eye  eyeIcon field-icon toggle-password"
                      icon={faEye}
                    />
                    <label className='m-0 wrongpswd'  id='wrongpswd'>Incorrect Password! Try again.</label>
                </div>
                
                /// enter the password again if user has entered the wrong password
                <div className="form-group">
                    <label className='signupLabel' htmlFor="exampleInputPassword1">Retype your password</label>
                    <input type="password"
                    onChange={onChange}
                    required
                    className="form-control border-top-0 border-right-0   border-left-0" 
                    name="repassword"
                    id='repassword'
                    placeholder="Enter your Password again"
                    
                    />
                     <FontAwesomeIcon
                     toggle="#password-field" 
                     onClick={(e)=>showPswd(e)}
                     id='repswd'
                     style={{cursor:'pointer'}}
                 
                    className="fa fa-fw fa-eye eyeIcon field-icon toggle-password"
                      
                      icon={faEye}
                    />
                   
                    <label className='m-0 wrongpswd'  id='wrongpswd'>Incorrect Password! Try again.</label>
                </div>
                </Row>


             
                <Button type="submit"
                // onSubmit={(e)=>CreateUser(e)}
                    className=" loginBtn w-100">SignUp</Button>
                      <p 
                      
                      onClick={()=>history.push('/')}
                      className='text-center subheadindLogin'>Please Login</p>
</form>
           </Col>
           </Col>
       </Card>
 
    
       
       </Row>

)
}
export default SignUp
