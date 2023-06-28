import { useEffect } from "react";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import { User } from "../store/slices/usersSlice";
import AlbumsListItem from "./AlbumsListItem";
import Button from "./Button";
import Error from "./Error";
import Skeleton from "./Skeleton";

type AlbumsListProps = {
  user: User;
};

const AlbumsList = ({ user }: AlbumsListProps) => {
  const { data: albumData, error: fetchAlbumsError, isLoading: isLoadingAlbums, isFetching: isFetchingAlbums } = useFetchAlbumsQuery(user.id);
  const [addAlbum, addAlbumMutationResults] = useAddAlbumMutation();

  return (
    <div>
      <div className="flex p-2 justify-between items-center">
        <h2>{user.name}'s Albums</h2>
        <span>
          <Button
            outline
            disabled={isFetchingAlbums || addAlbumMutationResults.isLoading}
            loading={addAlbumMutationResults.isLoading}
            onClick={() => {
              addAlbum(user.id)
            }}
          >
            + Add Album
          </Button>
        </span>
      </div>
      {fetchAlbumsError && <Error title="An Error Occured" message="The albums could not be loaded..." />}
      {addAlbumMutationResults.isError && <Error title="An Error Occured" message="The album could not be created..." />}

      {/* {!isLoadingAlbums && albumData && (
        <ul>
          {albumData.map((album) => (
            <AlbumsListItem album={album} key={album.id} />
          ))}
        </ul>
      )}

      {(isLoadingAlbums || isFetchingAlbums) && <Skeleton count={isLoadingAlbums ? 3 : 1} className="h-10 w-full" />} */}

      {!isFetchingAlbums && albumData && (
        <ul>
          {albumData.map((album) => (
            <AlbumsListItem album={album} key={album.id} />
          ))}
        </ul>
      )}
      { isFetchingAlbums && <Skeleton count={3} className="h-10 w-full" />}
    </div>
  );
};

export default AlbumsList;
