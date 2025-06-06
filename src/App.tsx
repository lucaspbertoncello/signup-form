import SidePhoto from "./components/SidePhoto";
import SignupForm from "./components/SignupForm";

export default function App() {
  return (
    <div className="flex items-center gap-x-24 min-h-screen w-full justify-center xl:justify-start">
      <SidePhoto />
      <SignupForm />
    </div>
  );
}
