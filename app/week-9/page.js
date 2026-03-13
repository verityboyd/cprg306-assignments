"use client";
import { useUserAuth } from "../contexts/AuthContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

//if user logged in, display welcome message, logout button and link to shopping list page
//if !logged in, display log in button

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  async function signIn() {
    await gitHubSignIn();
    router;
  }

  async function signOut() {
    await firebaseSignOut();
  }

  const handleClick = () => {
    if (user) {
      signOut();
    } else {
      signIn();
    }
  };

  const goToShoppingList = () => {
    router.push("/week-9/shopping-list");
  };

  return (
    <main className="flex flex-col items-center m-4 w-full">
      <section className="m-5 my-15 p-10 border rounded w-3/4 md:w-1/3">
        {user && (
          <div className="flex flex-col items-center">
            <h1 className="text-center text-3xl font-semibold py-10">
              Welcome, {user.displayName}
            </h1>
            <div>
              <Image
                src={user.photoURL}
                alt="user's github profile picture"
                width={150}
                height={150}
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-between px-10 py-5">
              <button
                onClick={goToShoppingList}
                className="cursor-pointer px-3 py-1 mt-10 border rounded text-xl font-medium bg-pink-200 hover:bg-pink-400 dark:hover:bg-blue-400 dark:bg-blue-600"
              >
                Shopping List
              </button>
              <button
                onClick={handleClick}
                className="cursor-pointer px-3 py-1 mt-10 border rounded text-xl font-medium bg-pink-200 hover:bg-pink-400 dark:hover:bg-blue-400 dark:bg-blue-600"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
        {!user && (
          <div className="flex flex-col items-center">
            <h1 className="text-center text-3xl py-10 font-semibold">
              Welcome
            </h1>
            <h2 className="text-2xl p-5 mb-5">Please Sign In</h2>
            <div className="text-lg italic">
              GitHub Auth will open in a new window
            </div>
            <div className="py-5">
              <button
                onClick={handleClick}
                className="cursor-pointer px-3 py-1 mt-18 border rounded text-xl font-medium bg-pink-200 hover:bg-pink-400 dark:hover:bg-blue-400 dark:bg-blue-600"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
