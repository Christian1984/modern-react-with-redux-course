import { GoSync, GoTrashcan } from "react-icons/go";
import { deleteUser } from "../store";
import Error from "./Error";
import ExpandablePanel from "./ExpandablePanel";
import { Album } from "../store/apis/albumsApi";

const AlbumsListItem = ({ album }: { album: Album }) => {
  // const [runDeleteUsers, isDeletingUser, deleteUserError] = useThunk(deleteUser);

  // const errorBanner = deleteUserError && <Error title="An Error Occured" message="The user could not be deleted..." />;
  const errorBanner = <></>;
  const header = (
    <>
      <div
        className="cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          // !isDeletingUser && runDeleteUsers(user.id);
        }}
      >
        <GoTrashcan />
        {/* {!isDeletingUser && <GoTrashcan />} */}
        {/* {isDeletingUser && <GoSync className="animate-spin" />} */}
      </div>
      <div className="p-2 cursor-pointer">{album.name}</div>
    </>
  );

  return (
    <li>
      <ExpandablePanel header={header} errorBanner={errorBanner}>
        {/* <AlbumsList user={user} /> */}
        CONTENT
      </ExpandablePanel>
    </li>
  );
};

export default AlbumsListItem;
export { AlbumsListItem };
