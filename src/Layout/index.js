import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
  console.log("props", props);
  const { children, showSearch } = props;
  return (
    <>
      <Header showSearch={showSearch} />
      {children}
      <Footer />
    </>
  );
}
