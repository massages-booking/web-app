import Hero from "@/components/widgets/Hero";
import { heroData } from "@/shared/data";


export default function Home() {
  return (
    <>
      <Hero data={heroData} />
    </>
  )
}
