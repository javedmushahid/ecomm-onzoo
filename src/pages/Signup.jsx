import React, { useEffect, useState } from 'react';
import Logo from "../images/logo.png";
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';


const Signup = () => {
  const [emailPhone, setEmailPhone] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = 'Signup'; // Set the title to "Login" when the component mounts
  }, []);
  const handleEmailPhoneChange = (e) => {
    setEmailPhone(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNumber = (e) => {
    const inputValue = e.target.value;
  const numericValue = inputValue.replace(/\D/g, '');
    setMobile(numericValue);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e,values) => {
    e.preventDefault();
  
    alert(`
    Full Name: ${name}
    Mobile Number: ${mobile}
    Email: ${emailPhone}
    Password: ${password}
  `);     
  };

  const handleInputFocus = (e) => {
    e.target.style.borderBottomColor = 'red';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderBottomColor = 'darkgray';
  };

  return (
    <div style={styles.container}>
      <img src={Logo} alt="Firstcry Logo" style={styles.logo} />
      <h3 style={styles.heading}>Login/Register</h3>
      <form onSubmit={handleSubmit} style={styles.form}>

      <div style={styles.inputGroup}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={handleName}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            style={styles.input}
            placeholder='Enter your Full Name.'
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Mobile Number</label>
          <input
            type="tel"
            value={mobile}
            onChange={handleNumber}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            style={styles.input}
            placeholder='Enter your Mobile Number'
            pattern="[0-9]*"    
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="text"
            value={emailPhone}
            onChange={handleEmailPhoneChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            style={styles.input}
            placeholder='Enter your Email ID.'
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            style={styles.input}
            placeholder='Enter your password'
          />
           <div style={{fontSize:'12px',marginTop:'5px',marginLeft:'0px',fontFamily:'sans-serif'}}>
      Password must be at least 8 characters long with 1 Uppercase, 1 Lowercase & 1 Numeric character.
      </div>
        </div>
       
        <button type="submit" style={styles.button}>Signup</button>
      </form>
      <div style={{marginTop:'8px'}}>
    Have an account?
    <Link to="/login" style={{ marginLeft:'8px', color: '#2979ff', textDecoration: 'none' }}>
        Register Now
    </Link>
</div>
    
    </div>
  );
};


const styles = {
    container: {
      maxWidth: '300px',
      margin: '0 auto',
      padding: '20px',
      background: '#ffffff',
      borderRadius: '6px',
    },
    heading: {
      textAlign: 'left',
      marginBottom: '30px',
      fontSize: '18px !important',
      fontWeight:400,
      fontFamily: 'sans-serif',
      marginLeft:'7px'
    },
    logo: {
      display: 'block',
      margin: '0 auto',
    //   marginBottom: '20px',
      width: '120px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    inputGroup: {
      marginBottom: '20px',
      position: 'relative',
      marginTop: '8px'
    },
    label: {
      fontSize: '15px',
      fontWeight:500,
      position: 'absolute',
      top: '-20px',
      left: '6px',
    },
    input: {
      padding: '8px',
      fontSize: '14px',
      borderRadius: '0',
      border: 'none',
      borderBottom: '1px solid darkgray',
      outline: 'none',
      transition: 'border-bottom-color 0.3s ease',
      width: '100%',
      marginTop: '10px',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      background: '#ff7043',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    divider: {
        height: '1px',
        background: 'darkgray',
        margin: '20px 0',
      },
      socialLogin: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      socialButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        fontSize: '16px',
        background: '#fff',
        color: '#000',
        border: '1px solid darkgray',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '10px',
        width: '100%', // Adjust the width as needed
        maxWidth: '300px', 
          },
    '@media (max-width: 768px)': {
      container: {
        maxWidth: '100%',
        padding: '10px',
      },
      heading: {
        marginBottom: '40px',
        fontSize: '20px',
      },
      input: {
        fontSize: '12px',
        marginTop: '8px',
      },
      button: {
        fontSize: '14px',
      },
    },
  };  
  
  export default Signup;

  
