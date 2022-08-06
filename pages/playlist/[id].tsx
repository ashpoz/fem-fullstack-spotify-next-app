import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";

const Playlists = () => {
  return <div>playlists</div>;
};

export const getServerSideProps = async ({ query, req }) => {
  const { id } = validateToken(req.cookie.TRAX_ACCESS_TOKEN);
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: query.id,
      userId: id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });
};

export default Playlists;
