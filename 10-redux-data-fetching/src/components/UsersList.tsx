import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, fetchUsers } from "../store";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { addUser } from "../store/thunks/addUser";

// type UsersListProps = React.ComponentPropsWithoutRef<"div">;

// const UsersList = ({ ...rest }: UsersListProps) => {
const UsersList = () => {
  const { data } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(false);

  useEffect(() => {
    setIsLoadingUsers(true);
    setLoadingUsersError(false);

    dispatch(fetchUsers())
      .unwrap() // required since the dispatch-promise will per se never go into the catch branch but will always resolve!
      .catch(() => setLoadingUsersError(true))
      .finally(() => setIsLoadingUsers(false));
  }, [dispatch]);

  return (
    <div>
      <div className="flex p-2 justify-between items-center">
        <h1 className="text-3xl font-bold">List of Users</h1>
        <Button
          outline
          onClick={() => {
            console.log("click");
            dispatch(addUser());
          }}
        >
          + Add User
        </Button>
      </div>
      {isLoadingUsers && <Skeleton count={10} className="h-10 w-full" />}
      {loadingUsersError && <span>Error: Users Could not be loaded!</span>}
      {data && (
        // {data && (
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
