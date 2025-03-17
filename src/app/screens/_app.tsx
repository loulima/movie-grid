import { AppProps } from "next/app";
import { ReactElement } from "react";
import { Navbar } from "../components/Navbar";
import "../styles/globals.css";



const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};
export default MyApp;
