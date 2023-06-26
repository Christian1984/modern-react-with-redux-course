import { GoSync, GoTrashcan } from "react-icons/go";
import useThunk from "../hooks/useThunk";
import { User } from "../store/slices/usersSlice";
import { deleteUser } from "../store";
import Error from "./Error";

const UsersListItem = ({ user }: { user: User }) => {
  const [runDeleteUsers, isDeletingUser, deleteUserError] = useThunk(deleteUser);
  return (
    <li className="border rounded flex flex-col my-4" key={user.id}>
      <div className="flex flex-grow">
        <div
          className="flex p-2 items-center cursor-pointer"
          onClick={() => {
            !isDeletingUser && runDeleteUsers(user.id);
          }}
        >
          {!isDeletingUser && <GoTrashcan />}
          {isDeletingUser && <GoSync className="animate-spin" />}
        </div>
        <div className="flex p-2 items-center cursor-pointer">{user.name}</div>
      </div>
      {deleteUserError && <Error title="An Error Occured" message="The user could not be deleted..." />}
    </li>
  );
};

export default UsersListItem;
export { UsersListItem };
