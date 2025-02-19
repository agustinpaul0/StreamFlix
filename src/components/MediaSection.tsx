import MediaSectionProps from "../types/MediaSection";

const MediaSection = ({ children, title }: MediaSectionProps) => {
  return (
    <section className="p-4">
      <h3 className="text-2xl font-medium mb-2">{title}</h3>
      <div className="flex gap-2 overflow-x-auto whitespace-nowrap">
        {children}
      </div>
    </section>
  );
};

export default MediaSection;
