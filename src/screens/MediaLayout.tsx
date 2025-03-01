import { Outlet } from "react-router-dom"
import MediaLayoutNavBar from "../components/MediaLayoutNavBar";
import { useSelectedMedia } from "../context/SelectedMediaContext";

const MediaLayout = () => {
  const { selectedMedia } = useSelectedMedia();
  if (!selectedMedia) return <></>;

  return (
    <>
      <MediaLayoutNavBar />
      <main className="min-h-screen bg-[#080808] text-[#FFFFFF] font-family-inter mt-15 mb-[7vh]">
        <Outlet context={{ selectedMedia }} />
      </main>
    </>
  );
};

export default MediaLayout;
