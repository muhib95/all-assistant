import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./components/router/router";

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
