import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
      <div className="h-screen flex flex-row justify-center items-center">
          <SignUp />
      </div>
  );
}