import { useDispatch, useSelector } from "react-redux";
import { CARD_LOGO_URL } from "../util/cdn";
import { clearItem , removeItem} from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  const dispatch = useDispatch();
  const removeAllItem = () => {
    dispatch(clearItem());
  };
  const itemRemove = (index)=>{
    dispatch(removeItem(index))
  }
  return (
    <div className="m-auto w-6/12 text-center my-6">
      <div className="py-6">
        <h1 className="text-2xl">Your have {cartItems.length} Meals...😋</h1>
      </div>
      {cartItems.length == 0 ? (
        <div className="my-12">"Looks you forgot to add your meals... 🤔"</div>
      ) : (
        <div className="h-screen">
          <div className="overflow-y-auto h-2/4 my-20">
            {cartItems.map((item , index) => { console.log(item)
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
                      {item.card.info.description
                        ? item.card.info.description
                        : null}
                    </p>
                  </div>

                  <div className="w-2/12 p-4">
                  <div className="">
              <button className="px-2 py-1 rounded-sm shadow-lg  text-sm bg-black bg-opacity-20 text-black" onClick={()=>itemRemove(index)}>
                Remove
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

          <div>
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
              onClick={removeAllItem}
            >
              Clear all
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
