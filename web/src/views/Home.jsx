import { Layout, theme } from "antd";
const { Content } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Layout
        style={{
          padding: "24px 24px 24px",
        }}
      >
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Home
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;