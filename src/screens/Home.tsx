import logo from "../assets/img/logo.svg";
import dropdown from "../assets/img/dropdown-icon.svg";
import bannerPelicula from "../assets/img/series-banner.svg";
import mediaBannerAppLogo from "../assets/img/media-banner-app-logo.svg";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#080808] text-white font-family-inter">
      <header className="flex p-4 gap-4">
        <img src={ logo } alt="App Logo" />
        <input
          type="text"
          placeholder="Type a title, genre, or actor..."
          className="rounded-full bg-[#1E1E1E] text-[#827E7E] flex-grow pl-3"
        />
      </header>

      <section className="flex justify-between pl-4 pr-4 gap-3">
        <button className="p-3 flex-grow-3 max-w-[40%] rounded-full border-2 border-[#ADADAD]">
          <span className="inline-flex items-center gap-2">
            CATEGORIES
            <img src={ dropdown } alt="Dropdown Icon" />
          </span>
        </button>
        <button className="p-3 flex-grow-1 rounded-full border-2 border-[#ADADAD]">
          FILMS
        </button>
        <button className="p-3 flex-grow-1 rounded-full border-2 border-[#ADADAD]">
          SERIES
        </button>
      </section>

      <section className="relative p-4">
        <figure
          className="relative w-full h-[500px] bg-cover bg-center"
          style={{ backgroundImage: `url(${ bannerPelicula })` }}
        >
          <figcaption className="absolute inset-0 flex flex-col justify-end items-center text-white bg-opacity-50">
            <h2 className="text-4xl font-bold mb-2">Título de la Película</h2>
            <div className="flex items-center gap-2 mb-4">
              <img src={ mediaBannerAppLogo } alt="Media Banner App logo"/>
              <p className="text-lg">Película</p>
            </div>
          </figcaption>
        </figure>
      </section>

      {/* Título informativo */}
      <section className="p-4">
        <h3 className="text-xl">Películas Populares</h3>
      </section>

      {/* Carrusel de Películas */}
      <section className="p-4">
        <div className="flex overflow-x-auto space-x-4">
          {/* Aquí irían los componentes del carrusel */}
          <div className="w-32 h-48 bg-gray-700 rounded-lg"></div>
          <div className="w-32 h-48 bg-gray-700 rounded-lg"></div>
          <div className="w-32 h-48 bg-gray-700 rounded-lg"></div>
        </div>
      </section>
    </main>
  );
};

export default Home;
