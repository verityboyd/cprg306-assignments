import { useUserAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  async function signOut() {
    await firebaseSignOut();
    router.push("/week-10");
  }

  const { user, firebaseSignOut } = useUserAuth();
  return (
    <nav className="flex flex-row justify-between font-semibold sm:pt-2 text-lg">
      <div className="px-2">Welcome, {user.displayName}!</div>
      <div>
        <button
          onClick={signOut}
          className="hover:underline cursor-pointer px-1 text-pink-600 dark:text-blue-400"
        >
          Log Out
        </button>
      </div>
    </nav>
  );
}
