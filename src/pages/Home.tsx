import Layout from "../components/layout/Layout";

const Home = () => {
    return (
        <Layout>
          <div className="col-4 m-auto">
              <h1>Login</h1>

              <div className="mb-3">
                <label htmlFor="gitUser" className="form-label">
                  Github's username
                </label>

                <input className="form-control" id="gitUser" aria-describedby="userHelp"/>

                <div id="userHelp" className="form-text">
                  Enter your github's username.
                </div>
              </div>

              <div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
          </div>
        </Layout>
      );
};

export default Home;