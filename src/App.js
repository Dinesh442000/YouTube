import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainConatiner from "./components/MainConatiner";
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainConatiner />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
