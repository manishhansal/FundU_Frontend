import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function SignIn() {
  const [open, setOpen] = React.useState(false);
  // const [number, setNumber] = React.useState("");
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignin = () => {
    if (form.email !== "" && form.password !== "") {
      const payloadjson = JSON.stringify(form);

      fetch(`http://localhost:9111/signIn`, {
        method: "POST",
        body: payloadjson,
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            alert("Login successfully..");
            localStorage.setItem("user", JSON.stringify(response));
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Email and Password are required.");
    }
  };
  console.log(form);
  const { email, password } = form;
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sign In
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Get Started</DialogTitle>
        <DialogContent style={{ textAlign: "center" }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Continue with Mobile Number"
            type="number"
            fullWidth
            variant="standard"
          />
          OR
          <TextField
            required
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={handleChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSignin}>Sign In</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
