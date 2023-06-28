import { GoSync, GoTrashcan } from "react-icons/go";
import Error from "./Error";
import ExpandablePanel from "./ExpandablePanel";
import { Album, useDeleteAlbumMutation } from "../store/apis/albumsApi";

const AlbumsListItem = ({ album }: { album: Album }) => {
  const [deleteAlbum, deleteAlbumMutationResults] = useDeleteAlbumMutation();

  const errorBanner = deleteAlbumMutationResults.isError && (
    <Error title="An Error Occured" message="The user could not be deleted..." />
  );
  const header = (
    <>
      <div
        className="cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (!deleteAlbumMutationResults.isLoading) {
            deleteAlbum(album.id);
          }
        }}
      >
        {!deleteAlbumMutationResults.isLoading && <GoTrashcan />}
        {deleteAlbumMutationResults.isLoading && <GoSync className="animate-spin" />}
      </div>
      <div className="p-2 cursor-pointer">{album.name}</div>
    </>
  );

  // return !deleteAlbumMutationResults.isSuccess ? <li>
  //     <ExpandablePanel header={header} errorBanner={errorBanner}>
  //       {/* <AlbumsList user={user} /> */}
  //       CONTENT
  //     </ExpandablePanel>
  //   </li> : <></>

  return (
    <li>
      <ExpandablePanel header={header} errorBanner={errorBanner}>
        {/* <AlbumsList user={user} /> */}
        CONTENT
      </ExpandablePanel>
    </li>
  );
};

export default AlbumsListItem;
export { AlbumsListItem };
