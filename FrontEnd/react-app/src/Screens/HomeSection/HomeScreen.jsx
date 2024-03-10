import { useEffect } from "react";
import productListAction from "../../Actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/LoaderComponent/Loader";
import Error from "../../Components/Error";
import styles from "./HomeScreen.module.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LinkIcon from "@mui/icons-material/Link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MultiGridCarousel from "../../Components/HomeComponents/Caraousel";
import ImageScrollAnimation from "../../Components/HomeComponents/ImageComponent";
import { useNavigate } from "react-router-dom";
import DesktopCarousel from "../../Components/HomeComponents/DesktopCaraosel";
import { useMediaQuery } from "react-responsive";

function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.productList);
  const { loading, error, products } = allProducts;
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const Navigate = useNavigate();
  useEffect(() => {
    dispatch(productListAction());
    window.scrollTo(0, 0);
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error variant="danger" children={error} />
      ) : (
        <div className="home">
          <h1 className="welcome-heading">Discover Kaizen</h1>
          <div className={styles.button_Navbar}>
            <button
              className={styles.nav_Button}
              onClick={() => Navigate("/product/tshirts")}
            >
              T-Shirts &nbsp;
              <ShoppingBagIcon fontSize="large" />
            </button>
            <button
              className={styles.nav_Button}
              onClick={() => Navigate("/product/posters")}
            >
              Posters &nbsp;
              <LinkIcon fontSize="large" />
            </button>
          </div>{" "}
          <ImageScrollAnimation
            style={{ height: "100px", width: "100px" }}
            imageUrl={
              "https://res.cloudinary.com/dzyevjbmh/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1709970436/Kaizen/IMG_5017_z0afbx.jpg?_s=public-apps"
            }
          />
          <div className="tshirt_Section">
            <h2 className="welcome-heading">
              Anime T-Shirts
              <h5 className={styles.category_link}>
                <a href="/product/tshirts">See All Collection</a>
                <ArrowForwardIcon
                  fontSize="small"
                  style={{ marginLeft: "4px", verticalAlign: "baseline" }}
                />
              </h5>
            </h2>
            {isMobile ? (
              <MultiGridCarousel
                products={products.filter(
                  (product) => product.category === "T-Shirt"
                )}
              />
            ) : (
              <DesktopCarousel
                products={products.filter(
                  (product) => product.category === "T-Shirt"
                )}
              />
            )}
          </div>
          <ImageScrollAnimation
            imageUrl={
              "https://res.cloudinary.com/dzyevjbmh/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710004535/Kaizen/IMG_4978_tts5yy.jpg?_s=public-apps"
            }
          />
          <div className="poster_Section">
            <h2 className="welcome-heading">
              Anime Posters
              <h5 className={styles.category_link}>
                <a href="/product/bracelets">See All Collection</a>
                <ArrowForwardIcon
                  fontSize="small"
                  style={{ marginLeft: "4px", verticalAlign: "baseline" }}
                />
              </h5>
            </h2>
            {isMobile ? (
              <MultiGridCarousel
                products={products.filter(
                  (product) => product.category === "Poster"
                )}
              />
            ) : (
              <DesktopCarousel
                products={products.filter(
                  (product) => product.category === "Poster"
                )}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
export default Home;
