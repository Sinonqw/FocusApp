import Contacts from "@/components/Contacts";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing/Pricing";

export default function Home() {
  return (
    <main className="pt-[80px]">
      <Hero/>
      <Features/>
      <Pricing/>
      <Contacts/>
    </main>
  )
}
