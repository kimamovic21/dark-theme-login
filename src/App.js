import React from "react";
import useLocalStorage from "use-local-storage"; // 1. dodajemo
import './index.css';

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className="app" data-theme={theme}>

      <div className="login">

          <h1>Login</h1>

          <div className="container">

              <div className="top">
                <i className="fab fa-google"></i>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-apple"></i>
              </div>

              <p className="divider"><span>or</span></p>

              <form>
                <label>E-mail</label>
                <input type="email" 
                       placeholder="Enter your email..." 
                />
                <label>Password</label>
                <input type="password" 
                       placeholder="Enter your password..."
                />

                <div className="remember">
                  <input type="checkbox" />
                  <p>Remember me</p>
                </div>

                <button>Log in</button>
              </form>

              <div className="bottom">
                <p>Forgot your password ?</p>
                <a href="/">Reset password</a>
              </div>

              <p className="create">Create account</p>
          </div>

          <div className="theme-toggle">
            <h2>Light theme</h2>
            <i onClick={switchTheme}
               className="fas fa-toggle-on"
              //  className={theme ? "fas fa-toggle-on" : "fas fa-toggle-off"} 
               >
            </i>
          </div>

      </div>

    </div>
  );
}

export default App;
