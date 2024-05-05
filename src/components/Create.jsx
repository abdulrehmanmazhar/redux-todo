import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
// import {addUser} from '../features/todo/userDetailSlice'
import { addUser } from '../features/todo/userDetailSlice';

function Create() {

  let [name, setName] = useState('');
  let [age, setAge] = useState('');
  let [email, setEmail] = useState('');
  let [gender, setGender] = useState('');
  let dispatch = useDispatch();

  let formHandler =(e)=>{
    e.preventDefault();
    dispatch(addUser({

      name:name,
      age:age,
      email:email,
      gender:gender
    }
      ));
    setName("");
    setAge("");
    setEmail('');
  }
  return (
    <form className='w-75 mx-auto p-2'>
        <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleInputPassword1" value={name} onChange={(e)=>setName(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
      </div>

      <div className="mb-3">
        <label className="form-label">Age</label>
        <input type="text" className="form-control" id="exampleInputPassword1" value={age} onChange={(e)=>setAge(e.target.value)}/>
      </div>
      
      {/* <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div> */}
      
      <div className="form-check m-4">
      <input className="form-check-input" type="radio" name='gender' id='male' onChange={(e)=>setGender(e.target.id)}/>
      <label className="form-check-label" >
        Male
      </label>
    </div>
    <div className="form-check m-4">
      <input className="form-check-input" type="radio" name='gender' id='female' onChange={(e)=>setGender(e.target.id)}/>
      <label className="form-check-label">
        Female
      </label>
    </div>
    <button type="submit" className="btn btn-primary" onClick={(e)=>formHandler(e)}>Submit</button>
    </form>
  );
}

export default Create;
