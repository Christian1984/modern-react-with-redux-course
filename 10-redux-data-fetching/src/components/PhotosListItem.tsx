import { GoSync, GoTrashcan } from "react-icons/go";
import Error from "./Error";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";
import { useDeletePhotoMutation } from "../store";
import { Photo } from "../store/apis/photosApi";

const PhotosListItem = ({ photo }: { photo: Photo }) => {
  const [deletePhoto, deletePhotoMutationResults] = useDeletePhotoMutation();

  const errorBanner = deletePhotoMutationResults.isError && (
    <Error title="An Error Occured" message="The photo could not be deleted..." />
  );

  return (
    <li className="flex items-center">
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
      <div className="p-2 cursor-pointer">{photo.name}</div>
    </li>
  );
};

export default PhotosListItem;
export { PhotosListItem as AlbumsListItem };
