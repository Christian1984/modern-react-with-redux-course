import { GoSync, GoTrashcan } from "react-icons/go";
import Error from "./Error";
import { useDeletePhotoMutation } from "../store";
import { Photo } from "../store/apis/photosApi";

const PhotosListItem = ({ photo }: { photo: Photo }) => {
  const [deletePhoto, deletePhotoMutationResults] = useDeletePhotoMutation();

  const errorBanner = deletePhotoMutationResults.isError && (
    <Error title="An Error Occured" message="The photo could not be deleted..." />
  );

  return (
    <li>
      {errorBanner}
      <div className="flex flex-col items-center m-2 border rounded relative">
        <img src={photo.url} className="h-20 w-20 rounded" alt={photo.name} />
        {!deletePhotoMutationResults.isLoading && (
          <div
            className="absolute inset-0 flex items-center justify-center text-gray-600 cursor-pointer hover:bg-gray-200 opacity-0 hover:opacity-80"
            onClick={(e) => {
              e.stopPropagation();
              if (!deletePhotoMutationResults.isLoading) {
                deletePhoto(photo.id);
              }
            }}
          >
            <GoTrashcan className="text-3xl" />
          </div>
        )}
        {deletePhotoMutationResults.isLoading && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-600 pointer-events-none bg-gray-200 opacity-80">
            <GoSync className="text-3xl animate-spin" />
          </div>
        )}
        <div
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            if (!deletePhotoMutationResults.isLoading) {
              deletePhoto(photo.id);
            }
          }}
        ></div>
      </div>
    </li>
  );
};

export default PhotosListItem;
export { PhotosListItem as AlbumsListItem };
