import { Box } from "@chakra-ui/layout";
import Sidebar from "./sidebar";
import PlayerBar from "./playerBar";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box left="0" position="absolute" top="0" width="250px">
        <Sidebar />
      </Box>
      <Box marginLeft="250px">
        <Box height="calc(100vh - 100px)">{children}</Box>
      </Box>
      <Box bottom="0" left="0" position="absolute">
        <PlayerBar />
      </Box>
    </Box>
  );
};

export default PlayerLayout;
