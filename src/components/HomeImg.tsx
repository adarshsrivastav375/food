import img from "../assets/home.png";

const HomeImg = () => {
  return (
    <div>
      <img
        src={img}
        alt="image"
        className="w-full max-h-[600px] object-cover
            "
      />
    </div>
  );
};
export default HomeImg;
