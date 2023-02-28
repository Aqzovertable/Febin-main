import "../styles/chats.css";
import "../styles/index.css";
import { ContextProvider } from "../context";

export default function App({ Component, pageProps }) {
  return (
   
    <Component {...pageProps} />

    <ContextProvider>
 
    </ContextProvider>
  );
}