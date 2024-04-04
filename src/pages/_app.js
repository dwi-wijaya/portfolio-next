import CollabsToggle from "@/components/toggles/CollabsToggle";
import ThemeToggle from "@/components/toggles/ThemeToggle";
import Overlay from "@/components/layout/Overlay";
import Sidebar from "@/components/layout/Sidebar";
import { ThemeProvider } from "next-themes";
import { Poppins } from 'next/font/google'
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import "@/styles/globals.css";
import 'aos/dist/aos.css';
import Aos from "aos";
import dynamic from "next/dynamic";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})
const ProgressBar = dynamic(
  () => import('../components/elements/ProgressBar'),
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return <>
    <ThemeProvider attribute='class'>

      <ThemeToggle />

      <Toaster
        toastOptions={{
          style: {
            background: "var(--container-color)",
            color: "var(--text-color)",
          },
        }}
        position="top-right"
      />
      <ProgressBar />

      <Sidebar />
      <main className={`${poppins.className} group/main lg:ml-[80px]  ml-0`}>
        <CollabsToggle />
        <Overlay />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  </>
}
