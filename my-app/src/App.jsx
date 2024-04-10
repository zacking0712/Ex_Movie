import bgImg from "../public/bgmovie.jpg";
import Ex_Movie from "./components/Ex_Movie";
function App() {
  return (
    <>
      <div className="h-screen relative">
        <div
          className="h-full inset-0 absolute z-0"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            filter: "brightness(30%)",
          }}
        ></div>
        <div className="absolute inset-0 z-10 container">
          <Ex_Movie />
        </div>
      </div>
    </>
  );
}

export default App;
