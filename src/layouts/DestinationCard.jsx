import Button from "../layouts/Button";

const DestinationCard = (props) => {
  const backgroundColor = `bg-brightColor`;
  return (
    <div className=" w-full lg:w-2/6  cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
      <img className=" rounded-t-lg" src={props.img} alt="img" />

      <div className=" bg-[#F2F2F2] min-h-[200px] p-5 flex flex-col justify-between items-center rounded-b-lg">
        <div className=" space-y-3">
          <h2 className=" text-xl font-medium text-center">{props.title}</h2>
          <p className=" text-sm">{props.para}</p>
        </div>
        <div className=" flex flex-row  justify-center">
          <Button title="Book Tickets" backgroundColor={backgroundColor} />
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
