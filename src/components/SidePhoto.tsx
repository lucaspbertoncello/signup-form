import sidePhoto from "../assets/images/sidePhoto.svg";

export default function SidePhoto() {
  return (
    <div className="max-w-[400px] w-full grid place-items-center">
      <img src={sidePhoto} alt="" />
    </div>
  );
}
