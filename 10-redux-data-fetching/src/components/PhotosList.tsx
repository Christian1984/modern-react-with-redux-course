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
    <div className="flex flex-col">
      {error && <Error title="An Error Occured" message="The albums could not be loaded..." />}
      {addPhotoMutationResults.isError && <Error title="An Error Occured" message="The album could not be created..." />}
      <div className="flex flex-row p-2 justify-between items-center">
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
      {!isFetching && data && (
        <ul className="flex flew-row flex-wrap">
          {data.map((photo) => (
            <PhotosListItem photo={photo} key={photo.id} />
          ))}
          <li
            className="flex flex-col items-center m-2 p-2 border rounded cursor-pointer"
            onClick={() => {
              addPhoto(album.id);
            }}
          >
            <div className="w-20 h-20 min-h-full flex items-center content-center justify-center">
              <div>+</div>
            </div>
          </li>
        </ul>
      )}
      {isFetching && <Skeleton count={3} className="h-10 w-full" />}
    </div>
  );
};

export default PhotosList;
