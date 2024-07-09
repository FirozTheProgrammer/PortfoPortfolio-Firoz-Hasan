import { Outlet } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Navlink from "./Navlink";
import Container from "./Container";

const Main = () => {
  return (
    <div className="">
      {/* Page content here */}
      <Container>
        <div className="">
          <Navlink></Navlink>
          <Outlet></Outlet>
        </div>
      </Container>

      <AnimatedCursor
        innerSize={6}
        outerSize={30}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#fff",
        }}
        outerStyle={{
          border: "1px solid #fff",
        }}
      />
    </div>
  );
};

export default Main;
