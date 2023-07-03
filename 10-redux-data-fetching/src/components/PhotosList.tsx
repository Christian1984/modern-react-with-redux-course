import Button from "./Button";
import Error from "./Error";
import Skeleton from "./Skeleton";
import { Album } from "../store/apis/albumsApi";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store/apis/photosApi";
import PhotosListItem from "./PhotosListItem";

type PhotosListProps = {
  album: Album;
};

const PhotosList = ({ album }: PhotosListProps) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album.id);
  const [addPhoto, addPhotoMutationResults] = useAddPhotoMutation();

  return (
    <div>
      <div className="flex p-2 justify-between items-center">
        <h2>{album.name}'s Photos</h2>
        <span>
          <Button
            outline
            disabled={isFetching || addPhotoMutationResults.isLoading}
            loading={addPhotoMutationResults.isLoading}
            onClick={() => {
              addPhoto(album.id);
            }}
          >
            + Add Photo
          </Button>
        </span>
      </div>
      {error && <Error title="An Error Occured" message="The albums could not be loaded..." />}
      {addPhotoMutationResults.isError && <Error title="An Error Occured" message="The album could not be created..." />}
      {!isFetching && data && (
        <ul>
          {data.map((photo) => (
            <PhotosListItem photo={photo} key={photo.id} />
          ))}
        </ul>
      )}
      {isFetching && <Skeleton count={3} className="h-10 w-full" />}
    </div>
  );
};

export default PhotosList;
