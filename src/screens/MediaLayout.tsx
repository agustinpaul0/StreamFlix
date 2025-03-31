import { Outlet } from "react-router-dom"
import MediaLayoutNavBar from "../components/MediaLayoutNavBar";
import { useSelectedMedia } from "../context/SelectedMediaContext";

const MediaLayout = () => {
  const { selectedMedia } = useSelectedMedia();
  
  if (!selectedMedia) return <></>;

  return (
    <>
      <MediaLayoutNavBar />
      <main className="flex flex-col flex-grow bg-[#FFFFFF] text-[#000000] dark:bg-[#080808] dark:text-[#FFFFFF] font-family-inter mt-15 pb-[7vh]">
        <Outlet context={{ selectedMedia }} />
      </main>
    </>
  );
};

export default MediaLayout;