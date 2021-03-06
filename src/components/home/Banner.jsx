import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constants/data";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  image: {
    width: "100%",
    height: 280,
  },
  carousel: {
    marginTop: 10,
  },
});
function Banner() {
  const classes = useStyles();
  return (
    <Carousel
      autoplay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          background: "#fff",
          color: "#494949",
          borderRadius: 0,
          margin: 0,
        },
      }}
      className={classes.carousel}
    >
      {bannerData.map((image) => (
        <img src={image} alt="" className={classes.image} />
      ))}
    </Carousel>
  );
}

export default Banner;
