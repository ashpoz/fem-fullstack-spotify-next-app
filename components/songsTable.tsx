import { Box } from "@chakra-ui/layout";
import {
  Table,
  TableHead,
  Thead,
  Id,
  Tr,
  Td,
  Th,
  Tbody,
  IconButton,
} from "@chakra-ui/react";
import { BsPlayCircleFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { formatDate, formatTime } from "../lib/formatter";

const SongsTable = ({ songs }) => {
  return (
    <Box bg="transparent" color="white">
      <Box padding="10px" marginBottom="20px">
        <Box marginBottom="30px">
          <IconButton
            icon={<BsPlayCircleFill fontSize="30px" />}
            aria-label="play"
            size="lg"
            colorScheme="green"
            isRound
          />
        </Box>
      </Box>
      <Table variant="unstyled">
        <Thead borderBottom="1px solid" borderColor="rgba(255, 255, 255, 0.2)">
          <Tr>
            <Th>#</Th>
            <Th>Title</Th>
            <Th>Date Added</Th>
            <Th>
              <AiOutlineClockCircle />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {songs.map((song, i) => (
            <Tr
              sx={{
                transition: " all .3s",
                "&:hover": {
                  bg: "rgba(255,255,255,.2)",
                },
              }}
              key={song.id}
            >
              <Td>{i + 1}</Td>
              <Td>{song.name}</Td>
              <Td>{formatDate(song.createdAt)}</Td>
              <Td>{formatTime(song.duration)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default SongsTable;
