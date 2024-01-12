import { CARD_LOGO_URL } from "../util/cdn";

const CategoryItems = ({ items }) => {
  console.log(items);

  const { itemCards } = items?.card?.card;

  return (
    <div>
      {itemCards.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="border-b-2 py-3 flex justify-between"
          >
            <div className="text-left w-9/12 px-3">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-sm opacity-60 pt-3">
                {item.card.info.description ? item.card.info.description : null}
              </p>
            </div>
            
            <div className="w-2/12 p-4">
            <div className="absolute">
              <button className="px-2 py-1 rounded-sm shadow-lg absolute text-sm bg-white bg-opacity-70">
                Add+
              </button>
            </div>
              <img
                className="rounded-md"
                src={CARD_LOGO_URL + item.card.info.imageId}
                alt="No image currently"
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryItems;
