import { useSelector } from "react-redux";
import { RootState, addUser, fetchUsers } from "../store";
import { useEffect } from "react";
import Skeleton from "./Skeleton";
import Button from "./Button";
import useThunk from "../hooks/useThunk";
import Error from "./Error";
import UsersListItem from "./UsersListItem";

// type UsersListProps = React.ComponentPropsWithoutRef<"div">;

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
          <Button
            outline
            disabled={isCreatingUser || isLoadingUsers}
            loading={isCreatingUser}
            onClick={() => {
              runAddUsers();
            }}
          >
            + Add User
          </Button>
        </span>
      </div>
      {loadingUsersError && <Error title="An Error Occured" message="The users could not be loaded..." />}
      {creatingUserError && <Error title="An Error Occured" message="The user could not be created..." />}

      {isLoadingUsers && <Skeleton count={5} className="h-10 w-full" />}

      {!isLoadingUsers && data && (
        <ul>
          {data.map((user) => (
            <UsersListItem user={user} key={user.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
export { UsersList };
