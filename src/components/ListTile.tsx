interface ListTileProps {
  title: string;
  description: string;
  imagePath: string;
}

const ListTile = ({
  title,
  description,
  imagePath,
  className,
}: ListTileProps & { className?: string }) => {
  return (
    <div className={`w-full flex gap-5 items-start ${className || ""}`}>
      <div className="h-[70px] w-[70px] bg-[#262626] rounded-[6px] flex items-center justify-center">
        <img src={imagePath} alt={title} />
      </div>
      <div className="h-full flex flex-col justify-between">
        <h1 className="text-white font-bold text-[18px]">{title}</h1>
        <p className="text-white text-sm font-light mt-1 leading-[20px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ListTile;
