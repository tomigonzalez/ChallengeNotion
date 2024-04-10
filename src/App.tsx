import "./App.css";
import Layout from "./components/Layout/Layout";
import { StateProvider } from "./context/StateContext";

import AppRoutes from "./routes/Routes";

function App() {
  return (
    <StateProvider>
      <Layout>
        <AppRoutes></AppRoutes>
      </Layout>
    </StateProvider>
  );
}

export default App;
