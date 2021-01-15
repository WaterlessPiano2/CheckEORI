import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto m-10">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
