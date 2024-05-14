import landingImg from "../assets/landing.png";
import appDownloadImg from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-gray-100 rounded-lg shadow-lg py-8 flex flex-col text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeway today
        </h1>
        <span className="text-xl "> Food is just a click away</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImg} alt="img" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order Takeaway even faster!
          </span>
          <span>
            Download the{" "}
            <span className="font-bold text-orange-500">Food Ocean</span> App
            for faster ordering and personalised recommendations
          </span>
          <img src={appDownloadImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
