import play from "../assets/img/play-icon.svg";
import add from "../assets/img/add-icon.svg";
import bannerPelicula from "../assets/img/series-banner.svg";
import mediaBannerAppLogo from "../assets/img/media-banner-app-logo.svg";

const Home = () => {
  return (
    <>
      <section className="flex justify-between pl-4 pr-4 gap-3 mt-4">
        <button className="p-3 flex-grow rounded-full border-2 border-[#ADADAD] hover:bg-[#151515c5] cursor-pointer">
          CATEGORIES
        </button>
        <button className="p-3 flex-grow rounded-full border-2 border-[#ADADAD] hover:bg-[#151515c5] cursor-pointer">
          FILMS
        </button>
        <button className="p-3 flex-grow rounded-full border-2 border-[#ADADAD] hover:bg-[#151515c5] cursor-pointer">
          SERIES
        </button>
      </section>

      <section className="relative flex justify-center p-4">
        <figure
          className="relative w-full aspect-[4/5] max-h-[700px] max-w-[600px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${ bannerPelicula })`,
          }}
        >
          <figcaption className="absolute inset-0 flex flex-col justify-end items-center text-[#FFFFFF] bg-opacity-50 p-4">
            <div className="flex items-center gap-2">
              <img src={ mediaBannerAppLogo } alt="Media Banner App logo" />
              <p className="text-[1.25rem] text-[#1E1E1E] font-medium tracking-[0.2rem]">
                PELICULA
              </p>
            </div>

            <h2 className="text-[4rem] text-center font-bold mb-4">TITULO</h2>

            <div className="flex gap-4 mb-4 w-full">
              <button className="bg-[#FFFFFF] flex-grow p-3 text-[#141414] rounded-md hover:bg-[#efe6e6e6] cursor-pointer max-w-[50%]">
                <span className="inline-flex items-center gap-2">
                  <img src={ play } alt="Play Media Icon" />
                  Play
                </span>
              </button>
              <button className="relative p-3 flex-grow text-[#FFFFFF] rounded-md overflow-hidden hover:bg-[#6F6F6F] cursor-pointer max-w-[50%]">
                <div className="absolute inset-0 bg-[#868181] opacity-75 rounded-md"></div>
                <span className="inline-flex items-center gap-2 relative">
                  <img src={ add } alt="Add To My List Icon" />
                  My List
                </span>
              </button>
            </div>

            <h3 className="text-xl
            ">Genre | Genre | Genre</h3>
          </figcaption>
        </figure>
      </section>

      <section className="px-4 py-1">
        <h3 className="text-2xl font-medium">Catalogue</h3>
      </section>

      <section className="px-4 py-1">
        <div className="flex overflow-x-auto gap-2">
          <div className="w-32 h-48 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer"></div>
          <div className="w-32 h-48 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer"></div>
          <div className="w-32 h-48 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer"></div>
        </div>
      </section>
    </>
  );
};

export default Home;