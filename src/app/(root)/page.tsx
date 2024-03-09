import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <h1 className="font-Adelle font-bold">This should be adelle bold</h1>
        <p>Home</p>
      </div>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
