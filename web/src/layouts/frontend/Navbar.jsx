import React from "react";
import { Layout, Menu, Button } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const { Header } = Layout;

const Navbar = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "1",
    },
    {
      label: <Link to="/profile">Profile</Link>,
      key: "2",
    },
  ];

  return (
    <Layout className="layout">
      <Header style={{ display: "flex", justifyContent: "space-between" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} items={items} />
        <div>
          <Button type="primary" style={{ marginRight: "10px" }} onClick={() => loginWithRedirect()}>
            Sign in
          </Button>
        </div>
      </Header>
      <Outlet />
    </Layout>
  );
};

export default Navbar;
