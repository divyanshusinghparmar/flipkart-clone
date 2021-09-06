import { Box, makeStyles } from "@material-ui/core";
import Banner from "./Banner";
import MidSection from "./MidSection";
import Navbar from "./Navbar";
import Slide from "./Slide";

const useStyles = makeStyles({
  component: {
    padding: "10px",
    background: "#f2f2f2",
  },
  rightWrapper: {
    background: "#FFFFFF",
    padding: 5,
    margin: "12px 0 0 10px",
    width: "17%",
  },
});

function Home() {
  const classes = useStyles();
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <div>
      <Navbar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box style={{ width: "83%" }}>
            <Slide timer={true} title="Deals of the Day" />
          </Box>
          <Box className={classes.rightWrapper}>
            <img src={adURL} alt="" style={{ width: 230 }} />
          </Box>
        </Box>
        <MidSection />
        <Slide timer={false} title="Discounts for You" />
        <Slide timer={false} title="suggested Items" />
        <Slide timer={false} title="Top Selection" />
        <Slide timer={false} title="Recommended Items" />
        <Slide timer={false} title="BestSellers " />
      </Box>
    </div>
  );
}

export default Home;
