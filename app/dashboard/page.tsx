import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/login"); // Redirect to login if not authenticated
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
