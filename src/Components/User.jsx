import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function User({ name }) {
  const [state, setState] = React.useState({
    right: false,
  });

  const handleSignout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (right) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(right, false)}
      onKeyDown={toggleDrawer(right, false)}
    >
      <List>
        <ListItemButton>
          <ListItemText
            primary="Sign Out"
            style={{
              textAlign: "center",
              border: "1px solid #81CBCE",
              backgroundColor: "#81CBCE",
              borderRadius: "5px",
            }}
            onClick={handleSignout}
          />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button
          onClick={toggleDrawer("right", true)}
          style={{ color: "#03989E", fontFamily: "Baloo Bhaijaan 2" }}
        >
          Hi! {name}
        </Button>
        <SwipeableDrawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
