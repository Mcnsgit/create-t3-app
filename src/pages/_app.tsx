import  type{ AppType , AppProps} from "next/app";
import { Inter } from "next/font/google";

import { api } from "import/utils/api";
import { ClerkProvider } from '@clerk/nextjs'

import {neobrutalism} from "@clerk/themes";
import "import/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider appearance={{baseTheme: neobrutalism}}  {...pageProps} >
    <main className={`font-sans ${inter.variable}`}>
      <Component {...pageProps} />
    </main>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
