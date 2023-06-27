import { GoSync, GoTrashcan } from "react-icons/go";
import useThunk from "../hooks/useThunk";
import { User } from "../store/slices/usersSlice";
import { deleteUser } from "../store";
import Error from "./Error";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

const UsersListItem = ({ user }: { user: User }) => {
  const [runDeleteUsers, isDeletingUser, deleteUserError] = useThunk(deleteUser);

  const errorBanner = deleteUserError && <Error title="An Error Occured" message="The user could not be deleted..." />;
  const header = (
    <>
      <div
        className="cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          !isDeletingUser && runDeleteUsers(user.id);
        }}
      >
        {!isDeletingUser && <GoTrashcan />}
        {isDeletingUser && <GoSync className="animate-spin" />}
      </div>
      <div className="p-2 cursor-pointer">{user.name}</div>
    </>
  );

  return (
    <li>
      <ExpandablePanel header={header} errorBanner={errorBanner}>
        <AlbumsList user={user} />
      </ExpandablePanel>
    </li>
  );
};

export default UsersListItem;
export { UsersListItem };
