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
      <div className="flex flex-col items-center m-2 p-2 border rounded">
        <img src={photo.url} className="h-20 w-20 mb-2" alt={photo.name} />
        {/* <div className="p-2 cursor-pointer">{photo.name}</div> */}
        <div
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            if (!deletePhotoMutationResults.isLoading) {
              deletePhoto(photo.id);
            }
          }}
        >
          {!deletePhotoMutationResults.isLoading && <GoTrashcan />}
          {deletePhotoMutationResults.isLoading && <GoSync className="animate-spin" />}
        </div>
      </div>
    </li>
  );
};

export default PhotosListItem;
export { PhotosListItem as AlbumsListItem };
