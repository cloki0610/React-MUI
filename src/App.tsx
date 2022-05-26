import { useState } from "react";
import { Box, Stack } from "@mui/material";

import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

const App = () => {
  const [mode, setMode] = useState<string>("light");
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={1} justify-content="center">
        <Sidebar setMode={setMode} mode={mode} />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
};

export default App;
