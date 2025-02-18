interface MediaSectionProps {
  title: string;
}

const MediaSection = ({ title }: MediaSectionProps) => {
  return (
    <section className="px-4 py-1">
      <h3 className="text-2xl font-medium">{title}</h3>
      <div className="flex overflow-x-auto gap-2 mt-2">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="w-32 h-48 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default MediaSection;
