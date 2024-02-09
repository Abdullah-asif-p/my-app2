import Footer from "@/components/veiws/footer";
import Hero from "@/components/veiws/hero";
import MidProducts from "@/components/veiws/midProducts";
import Products2 from "@/components/veiws/products2";
import Newsletter from "@/components/veiws/newsletter";
import End from "@/components/veiws/end";
export default function Home() {
  return (
    <div>
      <Hero />
      <Products2 />
      <MidProducts />
      <Footer />
      <Newsletter />
      <End/>
    </div>
  );
}
