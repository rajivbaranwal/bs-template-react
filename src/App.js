import "./App.css";
import HomePage from "./container/HomePage";
// import "./assets/css/index.css";
import "./assets/css/style.css";
import "./assets/css/breadcrumb.css";
import "./assets/css/themify-icons.css";
// import "./assets/css/flaticon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CoursePage from "./container/CoursePage";

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <CoursePage /> */}
    </div>
  );
}

export default App;
