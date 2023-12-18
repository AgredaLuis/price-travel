import Button from "../layouts/Button";
import img from "../assets/img/hero.jpg";
import { Link } from "react-scroll";

const Home = () => {
  const backgroundColor = `bg-brightColor`;

  return (
    <div className=" min-h-screen lg:min-h-[90vh] flex flex-col justify-center lg:flex-row py-14 lg:py-20 items-center md:mx-32 mx-5">
      
      <div className=" mt-14 lg:mt-0 w-full lg:w-4/5">
        <img src={img} alt="img" />
      </div>
      <div className=" flex flex-col text-center lg:text-start gap-7">
        <h1 className=" font-semibold text-5xl leading-tight">
          Discover the Best Destinations
        </h1>
        <p>
          With TripPixie you can experience new travel and the best tourist
          destinations that we have to offer
        </p>

        <Link to="destination" spy={true} smooth={true} duration={500}>
          <Button title="Destinations" backgroundColor={backgroundColor} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
