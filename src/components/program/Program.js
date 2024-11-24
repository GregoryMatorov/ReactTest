import "./Program.css"
export default function Program({CubePhotos}) {
    const randomImg = Math.floor(Math.random * 6);

    return (
        <div className="background">
            <img id="photo" src={CubePhotos[randomImg]} alt="cube" />
        </div>
    )
}