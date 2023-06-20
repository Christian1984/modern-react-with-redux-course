type UsersListProps = object & React.ComponentPropsWithoutRef<"div">;

const UsersList = ({ ...rest }: UsersListProps) => {
  return <div>UsersList</div>;
};

export default UsersList;
export { UsersList };
