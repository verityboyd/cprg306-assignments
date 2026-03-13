"use client";
import { useUserAuth } from "@/app/contexts/AuthContext";

export default function SignedOut() {
  const { gitHubSignIn } = useUserAuth();

  async function signIn() {
    await gitHubSignIn();
    router;
  }

  return (
    <section className="flex flex-col items-center m-4 w-full">
      <div className="m-5 my-15 p-10 border rounded w-3/4 md:w-1/3">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-3xl py-10 font-semibold">Welcome</h1>
          <h2 className="text-2xl p-5 mb-5">Please Sign In</h2>
          <div className="text-lg italic">
            GitHub Auth will open in a new window
          </div>
          <div className="py-5">
            <button
              onClick={signIn}
              className="cursor-pointer px-3 py-1 mt-18 border rounded text-xl font-medium bg-pink-200 hover:bg-pink-400 dark:hover:bg-blue-400 dark:bg-blue-600"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
