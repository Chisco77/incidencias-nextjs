// import custom components
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

export default function Layout({ children }) {
  // styles the main html tag
  const styles = {
    display: "flex",
    flexDirection: "row"
  };

  return (
    <>
      <Header />
      <main>
        <section>{children}</section>
      </main>
      <Footer />
    </>
  );
}
