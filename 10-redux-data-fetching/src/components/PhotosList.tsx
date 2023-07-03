import Button from "./Button";
import Error from "./Error";
import Skeleton from "./Skeleton";
import { GoPlus, GoSync } from "react-icons/go";
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
      </div>
      {!isFetching && data && (
        <ul className="flex flew-row flex-wrap">
          {data.map((photo) => (
            <PhotosListItem photo={photo} key={photo.id} />
          ))}
          <li
            className="flex flex-col items-center m-2 p-2 border rounded relative"
            onClick={() => {
              if (!addPhotoMutationResults.isLoading) {
                addPhoto(album.id);
              }
            }}
          >
            <div className="w-20 h-20"></div>
            {!addPhotoMutationResults.isLoading && (
              <div className="absolute inset-0 flex items-center justify-center hover:text-gray-600 cursor-pointer hover:bg-gray-200">
                <GoPlus className="text-3xl" />
              </div>
            )}
            {addPhotoMutationResults.isLoading && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-600 cursor-pointer bg-gray-200">
                <GoSync className="text-3xl animate-spin" />
              </div>
            )}
          </li>
        </ul>
      )}

      {isFetching && (
        <div className="flex flew-row flex-wrap">
          <Skeleton count={10} className="h-24 w-24 m-2 border" />
        </div>
      )}
    </div>
  );
};

export default PhotosList;
