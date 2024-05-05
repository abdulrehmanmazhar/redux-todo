import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, updateUser } from '../features/todo/userDetailSlice';

function AllUsers() {
  const users = useSelector(state => state.app.users);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [editableIndex, setEditableIndex] = useState(null);
  const [genderFilter, setGenderFilter] = useState('both');

  const editHandler = (index, e) => {
    setEditableIndex(index);
    let inputs = e.target.parentNode.getElementsByTagName('input');
    let values = [];
    for (let input of inputs) {
      values.push(input.value);
    }
    setName(values[0]);
    setEmail(values[1]);
    setAge(values[2]);
  };

  const saveHandler = (user) => {
    dispatch(updateUser(user));
    setEditableIndex(null);
  };

  const cancelEditHandler = () => {
    setEditableIndex(null);
  };

  const filterHandler = (e) => {
    setGenderFilter(e.target.id);
  };

  const filteredUsers = users.filter(user => {
    if (genderFilter === 'male') {
      return user.gender === 'male';
    } else if (genderFilter === 'female') {
      return user.gender === 'female';
    }
    return true;
  });

  return (
    <div>
      <ul className="list-group">
        <div className="form-check m-2">
          <input className="form-check-input" type="radio" name='gender' id='male' checked={genderFilter === 'male'} onChange={(e) => filterHandler(e)} />
          <label className="form-check-label">
            Male
          </label>
        </div>
        <div className="form-check m-2">
          <input className="form-check-input" type="radio" name='gender' id='female' checked={genderFilter === 'female'} onChange={(e) => filterHandler(e)} />
          <label className="form-check-label">
            Female
          </label>
        </div>
        <div className="form-check m-2">
          <input className="form-check-input" type="radio" name='gender' id='both' checked={genderFilter === 'both'} onChange={(e) => filterHandler(e)} />
          <label className="form-check-label">
            Both
          </label>
        </div>
        {filteredUsers.length === 0 && (
          <h2>No users to display</h2>
        )}
        {filteredUsers.map((user, index) => (
          <li key={index} className="list-group-item">
            <div className="input-group">
              <span className="input-group-text">{`ID # ${index}`}</span>
              <span className="input-group-text">Name</span>
              <input type="text" aria-label="Name" className="form-control" value={editableIndex === index ? name : user.name} readOnly={editableIndex !== index} onChange={(e) => setName(e.target.value)} />
              <span className="input-group-text">Email</span>
              <input type="text" aria-label="Email" className="form-control" value={editableIndex === index ? email : user.email} readOnly={editableIndex !== index} onChange={(e) => setEmail(e.target.value)} />
              <span className="input-group-text">Age</span>
              <input type="text" aria-label="Age" className="form-control" value={editableIndex === index ? age : user.age} readOnly={editableIndex !== index} onChange={(e) => setAge(e.target.value)} />
            </div>
            {editableIndex === index ? (
              <div>
                <button type="button" className="btn btn-success m-2" onClick={() => saveHandler({ ...user, name: name, age: age, email: email })}>Save</button>
                <button type="button" className="btn btn-secondary m-2" onClick={cancelEditHandler}>Cancel</button>
              </div>
            ) : (
              <button type="button" className="btn btn-warning m-2" onClick={(e) => editHandler(index, e)}>Edit</button>
            )}
            <button type="button" className="btn btn-danger m-2" onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllUsers;
