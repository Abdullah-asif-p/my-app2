import About from "@/components/veiws/About";
import Hero from "@/components/veiws/hero";
import MidProducts from "@/components/veiws/midProducts";
import Products2 from "@/components/veiws/products2";
import Newsletter from "@/components/veiws/newsletter";
import Contact from "@/components/veiws/Contact";
import Footer from "@/components/veiws/footer";
import { GetDataType, getallData } from "@/components/Lib/GetData";
export default async function Home() {
  const data: GetDataType[] = await getallData();
  return (
    <div>
      <Hero />
      <Products2 />
      <MidProducts data={data} />
      <About />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}
