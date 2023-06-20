import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, fetchUsers } from "../store";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { addUser } from "../store/thunks/addUser";

// type UsersListProps = React.ComponentPropsWithoutRef<"div">;

// const UsersList = ({ ...rest }: UsersListProps) => {
const UsersList = () => {
  const { data, isLoading, error } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
    // .then(() => console.log("done"))
    // .catch(() => console.log("err"));
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
      {isLoading && <Skeleton count={10} className="h-10 w-full" />}
      {error && <span>Error: {error}</span>}
      {!isLoading && !error && data && (
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
