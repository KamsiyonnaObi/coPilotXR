import Collection from "../components/shared/Collection";

export default async function Home() {
  const images = { data: ["1", "2", "3", "4"] }; // TODO change to back end call
  return (
    <>
      <section className="home">
        <h1 className="home-heading">Welcome To CoPilot Image Uploader</h1>
      </section>
      {/* Gallery */}
      <section className="sm:mt-12">
        <Collection images={images?.data} />
      </section>
    </>
  );
}
