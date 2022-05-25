import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Box,
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
  borderRadius: theme.shape.borderRadius,
  width: "40%",
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
  return (
    <AppBar position="sticky">
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
          />
        </Icons>
        <UserBox>
          <Avatar
            src="https://i.imgur.com/bt3nvMM.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Typography component="span">Loki.C</Typography>
        </UserBox>
      </StyledToobar>
    </AppBar>
  );
};

export default Navbar;
