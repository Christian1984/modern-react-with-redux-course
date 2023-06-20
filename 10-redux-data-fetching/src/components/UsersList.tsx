import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, fetchUsers } from "../store";
import { useEffect } from "react";

// type UsersListProps = React.ComponentPropsWithoutRef<"div">;

// const UsersList = ({ ...rest }: UsersListProps) => {
const UsersList = () => {
  const { data, isLoading, error } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
    // .then(() => console.log("done"))
    // .catch(() => console.log("err"));
  }, [dispatch]);

  return (
    <div>
      {isLoading && <span>isLoading</span>}
      {error && <span>Error: {error}</span>}
      {!isLoading && !error && data && (
        // {data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
export { UsersList };
