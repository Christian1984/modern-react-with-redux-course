import { User } from "../store/slices/usersSlice";

type AlbumsListProps = {
  user: User;
};

const AlbumsList = ({ user }: AlbumsListProps) => {
  return <div>{user.name}'s Albums</div>;
};

export default AlbumsList;
