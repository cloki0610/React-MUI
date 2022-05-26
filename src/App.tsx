import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/material";

const App = () => {
  const [mode, setMode] = useState<string>("light");
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justify-content="space-between">
        <Sidebar setMode={setMode} mode={mode} />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default App;
