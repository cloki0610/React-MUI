import { Box } from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <h1>Rightbar</h1>
    </Box>
  );
};

export default Rightbar;
