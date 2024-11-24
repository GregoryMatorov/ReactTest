import Program from "./components/program/Program";
import Button from "./components/Button/button";

export default function App() {
   return (
    <div>
        <Program
            CubePhotos = {[
                "/CubePhotos/1.png",
                "/CubePhotos/2.png",
                "/CubePhotos/3.png",
                "/CubePhotos/4.png",
                "/CubePhotos/5.png",
                "/CubePhotos/6.png"
            ]}
        />
        <Button />
    </div>
  )
}