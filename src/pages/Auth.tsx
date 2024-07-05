import React, { useState, useEffect, FormEvent } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface UserData {
  name: string;
  phoneNumber: string;
  email: string;
}

const AuthPage: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    phoneNumber: '',
    email: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!userData.name || !userData.phoneNumber || !userData.email) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    localStorage.setItem('userData', JSON.stringify(userData));

    navigate('/info'); 
  };

  useEffect(() => {
    const storedErrorMessage = localStorage.getItem('authError');
    if (storedErrorMessage) {
      setErrorMessage(storedErrorMessage);
      localStorage.removeItem('authError'); 
    }
  }, []);

  return (
    <div className='auth-page'>
      <Typography variant="h5">Enter Your Details</Typography>
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
      <form onSubmit={handleSubmit} className='form-container'>
        <TextField
          label="Name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={userData.phoneNumber}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AuthPage;