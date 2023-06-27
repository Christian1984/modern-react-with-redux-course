import { User } from "../store/slices/usersSlice";
import Button from "./Button";
import Skeleton from "./Skeleton";

type AlbumsListProps = {
  user: User;
};

const AlbumsList = ({ user }: AlbumsListProps) => {
  // const { data } = useSelector((state: RootState) => state.users);

  // const [runFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
  // const [runAddUsers, isCreatingUser, creatingUserError] = useThunk(addUser);

  // useEffect(() => {
  //   runFetchUsers();
  // }, [runFetchUsers]);

  return (
    <div>
      <div className="flex p-2 justify-between items-center">
        <h2>{user.name}'s Albums</h2>
        <span>
          <Button
            outline
            // disabled={isCreatingUser || isLoadingUsers}
            // loading={isCreatingUser}
            onClick={() => {
              // runAddUsers();
            }}
          >
            + Add Album
          </Button>
        </span>
      </div>
      {/* {loadingUsersError && <Error title="An Error Occured" message="The albums could not be loaded..." />} */}
      {/* {creatingUserError && <Error title="An Error Occured" message="The album could not be created..." />} */}

      {/* {isLoadingUsers && <Skeleton count={5} className="h-10 w-full" />} */}
      <Skeleton count={3} className="h-10 w-full" />

      {/* {!isLoadingUsers && data && (
        <ul>
          {data.map((user) => (
            <UsersListItem user={user} key={user.id} />
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default AlbumsList;
