"use client";
import { useUserAuth } from "../contexts/AuthContext";
import SignedOut from "./components/SignedOut";
import SignedIn from "./components/SignedIn";

//if user logged in, display welcome message, logout button and link to shopping list page
//if !logged in, display log in button

export default function Page() {
  const { user } = useUserAuth();

  return (
    <main className="flex flex-col items-center px-4 pt-4 w-full">
      {user ? <SignedIn /> : <SignedOut />}
    </main>
  );
}
