export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="font-Adelle font-bold">This should be adelle bold</h1>
        <p className="font-Adelle font-semibold">
          This should be adelle semi bold
        </p>
        <p>This should be adelle regular</p>
      </div>
      <div>
        <h1 className="font-Neuzeit font-extrabold">
          This should be Neuzeit black
        </h1>
        <p className="font-Neuzeit font-bold">This should be Neuzeit bold</p>
        <p className="font-Neuzeit">This should be Neuzeit regular</p>
        <p className="font-Neuzeit font-light">This should be Neuzeit light</p>
      </div>
    </main>
  );
}
