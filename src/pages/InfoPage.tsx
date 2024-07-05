import React, {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import  FirstComponent from '../components/FirstComponent'; 
import  DepartmentTree from '../components/DepartmentTree'; 
interface InfoPageProps {}

const InfoPage: React.FC<InfoPageProps> = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('userData')
  useEffect(() => {
    if (!isLoggedIn) {
      localStorage.setItem('authError', JSON.stringify('unauthorized access! Fill the form below'));

      navigate('/'); 
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className='info-page'>
      {isLoggedIn && ( 
        <>
          <FirstComponent /> 
          <DepartmentTree />
        </>
      )}
    </div>
  );
};

export default InfoPage;