import useRedirect from "../hooks/useRedirect";
import HeaderButton from "./HeaderButton";

const HeaderSection = () => {
  const handleRedirect = useRedirect();

  const categories = ["MOVIES", "SERIES"];

  return (
    <section className="flex justify-between px-4 gap-3 mt-4">
      {categories.map((label) => (
        <HeaderButton 
          key={label} 
          label={label} 
          onClick={() => handleRedirect(`/streamflix/search/${label.toLowerCase()}`)} 
        />
      ))}
    </section>
  );
};

export default HeaderSection;