import { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { Mail, Notifications } from "@mui/icons-material";

const StyledToobar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  border: "1px solid grey",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  input: {
    "&::placeholder": {
      color: "grey",
    },
  },
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <AppBar position="sticky" color="inherit">
      <StyledToobar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Loki*MUI
        </Typography>
        <Brightness3Icon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            src="https://i.imgur.com/bt3nvMM.jpg"
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          />
        </Icons>
        <UserBox onClick={(e) => setAnchorEl(e.currentTarget)}>
          <Avatar
            src="https://i.imgur.com/bt3nvMM.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Typography component="span">Loki.C</Typography>
        </UserBox>
      </StyledToobar>
      <Menu
        id="profile"
        aria-labelledby="profile"
        anchorEl={anchorEl}
        open={open}
        onClose={(e) => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
