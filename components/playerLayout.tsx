import { Box } from "@chakra-ui/layout";
import Sidebar from "./sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box left="0" position="absolute" top="0" width="250px">
        <Sidebar />
      </Box>
      <Box marginLeft="250px">{children}</Box>
      <Box bottom="0" left="0" position="absolute">
        Player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
