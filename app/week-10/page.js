"use client";
import { useEffect } from "react";
import { useUserAuth } from "../contexts/AuthContext";
import SignedOut from "./components/SignedOut";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/week-10/shopping-list");
    }
  }, [user]);

  return (
    <main className="flex flex-col items-center px-4 pt-4 w-full">
      {!user && <SignedOut />}
    </main>
  );
}
