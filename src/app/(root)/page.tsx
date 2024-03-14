import Collection from "../components/shared/Collection";
import { getAllImages } from "../lib/actions/images.action";

export default async function Home() {
  const data = await getAllImages()
  
  return (
    <>
      <section className="home">
        <h1 className="home-heading">Welcome To CoPilot Image Uploader</h1>
      </section>
      {/* Gallery */}
      <section className="sm:mt-12">
        <Collection images={data} />
      </section>
    </>
  );
}
