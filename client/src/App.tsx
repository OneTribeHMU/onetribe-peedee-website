import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Products from "@/pages/Products";
import UhuruAcademy from "@/pages/UhuruAcademy";
import AffiliateProducts from "@/pages/AffiliateProducts";
import AfroRobics from "@/pages/AfroRobics";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import AIHeroProgram from "@/pages/AIHeroProgram";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/products"} component={Products} />
      <Route path={"/uhuru-academy"} component={UhuruAcademy} />
      <Route path={"/affiliate-products"} component={AffiliateProducts} />
      <Route path={"/afrorobics"} component={AfroRobics} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/ai-hero-generation"} component={AIHeroProgram} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

