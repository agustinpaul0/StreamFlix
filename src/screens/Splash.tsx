import banner from "../assets/img/banner.svg";

const Splash = () => {
  return (
    <section className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#080808]">
      <img src={banner} alt="Splash Screen Banner" />
    </section>
  );
};

export default Splash;
