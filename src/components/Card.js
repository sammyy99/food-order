import { CARD_LOGO_URL } from "../util/cdn";

const Card = (props) => { console.log(props)
  const { cloudinaryImageId, name, avgRatingString, cuisines, areaName } =
    props?.resdata?.info;

  return (
    <div className="flex flex-col w-64 bg-white rounded-md overflow-hidden shadow-md mb-8 transition-transform transform hover:scale-105">
      <img className="w-full h-32 object-cover" src={`${CARD_LOGO_URL}${cloudinaryImageId}`} alt={name} />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <h4 className="text-gray-600 mb-2">{avgRatingString}</h4>
        <div className="text-sm text-gray-500 mb-2">{cuisines.join(", ")}</div>
        <div className="text-sm text-gray-500">{areaName}</div>
      </div>
    </div>
  );
};

export default Card;
