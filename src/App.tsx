import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Tokenomics } from "@/components/sections/tokenomics";
import { HowItWorks } from "@/components/sections/how-it-works";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <main>
            <Hero />
            <Features />
            <Tokenomics />
            <HowItWorks />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;