import { Box } from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed"></Box>
    </Box>
  );
};

export default Rightbar;
