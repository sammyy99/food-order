import { CARD_LOGO_URL } from "../util/cdn";

const Card = (props) => {
  const { cloudinaryImageId, name, avgRatingString, cuisines, areaName } =
    props?.resdata?.info;

  return (
    <div className="res-card">
      <img className="card-logo" src={CARD_LOGO_URL + cloudinaryImageId}></img>

      <h2>{name}</h2>
      <h4>{avgRatingString}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{areaName}</h5>
    </div>
  );
};

export default Card;
