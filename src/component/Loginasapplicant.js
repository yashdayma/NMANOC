import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import '../Login.css';

  const LoginApplicant = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleLogin = (event) => {
        event.preventDefault();
        if (!captchaValue) {
        alert('Please complete the CAPTCHA');
        return;
        }
        // Handle login logic here
        console.log('Login successful:', { username, password, captchaValue });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </div>
                    <div className="form-group">
                    <ReCAPTCHA
                        sitekey="YOUR_RECAPTCHA_SITE_KEY"
                        onChange={handleCaptchaChange}
                    />
                    </div>
                <button type="submit" className="login-button">Login</button>
        </form>
    </div>
  );
};

export default LoginApplicant;
