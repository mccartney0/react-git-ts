import { useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "../components/layout/Layout";

const Home = () => {

  const [username, setUser] = useState('');

  const navigate = useNavigate();

  const handleClick = async (event: MouseEvent) => {
    event.preventDefault();
    if(username.length === 0) {
      return alert('Please, enter your github\'s username.')
    }
    navigate(`/${username}`);
  }

    return (
        <Layout>
          <div className="col-4 m-auto">
              <h1>Login</h1>

              <div className="mb-3">
                <label htmlFor="gitUser" className="form-label">
                  Github's username
                </label>

                <input
                  className="form-control"
                  type="text"
                  aria-label="Username"
                  id="gitUser"
                  aria-describedby="userHelp"
                  value={username}
                  onChange={event => setUser(event.target.value)}
                />

                <div id="userHelp" className="form-text">
                  Enter your github's username.
                </div>
              </div>

              <div>
                <button
                  onClick={handleClick}
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
          </div>
        </Layout>
      );
};

export default Home;