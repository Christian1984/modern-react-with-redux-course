import { useSelector } from "react-redux";
import { RootState, addUser, fetchUsers } from "../store";
import { useEffect } from "react";
import Skeleton from "./Skeleton";
import Button from "./Button";
import useThunk from "../hooks/useThunk";

// type UsersListProps = React.ComponentPropsWithoutRef<"div">;

// const UsersList = ({ ...rest }: UsersListProps) => {
const UsersList = () => {
  const { data } = useSelector((state: RootState) => state.users);

  const [runFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
  const [runAddUsers, isCreatingUser, creatingUserError] = useThunk(addUser);

  useEffect(() => {
    runFetchUsers();
  }, [runFetchUsers]);

  return (
    <div>
      <div className="flex p-2 justify-between items-center">
        <h1 className="text-3xl font-bold">List of Users</h1>
        <span>
          {isCreatingUser && "Creating User..."}
          {!isCreatingUser && (
            <Button
              outline
              onClick={() => {
                runAddUsers();
              }}
            >
              + Add User
            </Button>
          )}
          {creatingUserError && <span>Error: Could not create User!</span>}
        </span>
      </div>
      {isLoadingUsers && <Skeleton count={10} className="h-10 w-full" />}
      {loadingUsersError && <span>Error: Users Could not be loaded!</span>}
      {!isLoadingUsers && data && (
        <ul>
          {data.map((user) => (
            <li className="mb-2 border rounded" key={user.id}>
              <div className="flex p-2 justify-between items-center cursor-pointer">{user.name}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
export { UsersList };
