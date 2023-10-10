import Layout from "../components/layout/Layout";

const Profile = () => {
    return (
        <Layout>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Tech</th>
                <th scope="col">Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>React</td>
                <td>Frontend</td>
              </tr>
              <tr>
                <td>Vue</td>
                <td>Frontend</td>
              </tr>
              <tr>
                <td>Python</td>
                <td>Backend</td>
              </tr>
            </tbody>
          </table>
        </Layout>
      );
};

export default Profile;