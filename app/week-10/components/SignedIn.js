"use client";
import { useUserAuth } from "@/app/contexts/AuthContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignedIn() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  async function signOut() {
    await firebaseSignOut();
  }

  const goToShoppingList = () => {
    router.push("/week-10/shopping-list");
  };

  return (
    <section className="flex flex-col items-center m-4 w-full">
      <div className="m-5 my-15 p-10 border rounded w-3/4 md:w-1/3">
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
              onClick={signOut}
              className="cursor-pointer px-3 py-1 mt-10 border rounded text-xl font-medium bg-pink-200 hover:bg-pink-400 dark:hover:bg-blue-400 dark:bg-blue-600"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
