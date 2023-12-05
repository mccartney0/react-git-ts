import Layout from "../components/layout/Layout";
import Table from "../components/table/Table";

const Profile = () => {

  const courses = [
    {
      tech: 'VueJS',
      type: 'Frontend',
    },
    {
      tech: 'ReactJS',
      type: 'Frontend',
    },
    {
      tech: 'NodeJS',
      type: 'Backend',
    },
  ];

    return (
        <Layout>
          <Table data={courses} />
        </Layout>
      );
};

export default Profile;