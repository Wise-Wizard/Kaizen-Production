import axios from "axios";

const productDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAILS_REQUEST" });
    const { data } = await axios.get(
      `https://kaizen-backend-ov33.onrender.com/api/products/${id}`
    );
    console.log(data.image.url);
    dispatch({ type: "PRODUCT_DETAILS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "PRODUCT_DETAILS_FAILURE", payload: error.message });
  }
};
export default productDetailsAction;
