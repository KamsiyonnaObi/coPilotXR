import {
  SignedOut,
  SignedIn,
  UserButton,
  SignInButton,
  currentUser,
} from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();

  return (
    <main className="flex flex-col  p-12">
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
        <div>
          <h1 className="font-Adelle">
            Welcome <span className="font-bold">{user?.firstName}</span>
          </h1>
        </div>
      </SignedIn>
      <SignedOut>
        Please sign in <SignInButton />
      </SignedOut>
    </main>
  );
}
