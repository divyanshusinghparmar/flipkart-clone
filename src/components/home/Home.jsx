import { Box } from "@material-ui/core";
import Banner from "./Banner";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Box style={{ padding: "10px", background: "#f2f2f2" }}>
        <Banner />
      </Box>
    </div>
  );
}

export default Home;
