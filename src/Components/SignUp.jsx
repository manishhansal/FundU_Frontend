import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function SignUp() {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
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
  const handleSignup = () => {
    if (
      form.firstName !== "" &&
      form.lastName !== "" &&
      form.email !== "" &&
      form.password !== ""
    ) {
      const payloadjson = JSON.stringify(form);

      fetch(`http://localhost:9111/signUp`, {
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
            alert("SignUp successfully. Now you can login.");
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("All fields are required.");
    }
  };
  console.log(form);
  const { firstName, lastName, email, password } = form;
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To play the games on this website, please do register and login with
            your credentials.
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            value={firstName}
            onChange={handleChange}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            value={lastName}
            onChange={handleChange}
          />
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
          <Button onClick={handleSignup}>Sign Up</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
