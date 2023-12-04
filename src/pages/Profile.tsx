import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Table from "../components/table/Table";

const Profile = () => {

  const navigate = useNavigate();
  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    if (username !== 'profile'){
    navigate("/")   
    }
  }, [])

    return (
        <Layout>
          <Table />
        </Layout>
      );
};

export default Profile;