import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
} from "@mui/material";
import {
  Home,
  Notifications,
  ShoppingCart,
  Chat,
  AccountBalanceWallet,
  Subscriptions,
  Person,
  Settings,
  Logout,
} from "@mui/icons-material";

const LeftNavbar = () => {
  const menuItems = [
    { text: "Home", icon: <Home /> },
    { text: "Notifications", icon: <Notifications /> },
    { text: "Shop", icon: <ShoppingCart /> },
    { text: "Conversation", icon: <Chat /> },
    { text: "Wallet", icon: <AccountBalanceWallet /> },
    { text: "Subscription", icon: <Subscriptions /> },
    { text: "My Profile", icon: <Person /> },
    { text: "Settings", icon: <Settings /> },
  ];

  return (
    <div
      style={{ width: "15%", padding: "16px", borderRight: "1px solid #ddd" }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} sx={{ cursor: "pointer" }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="green"
        startIcon={<Logout />}
        sx={{ position: "absolute", bottom: "4%", left: "4%" }}
      >
        Logout
      </Button>
    </div>
  );
};

export default LeftNavbar;
