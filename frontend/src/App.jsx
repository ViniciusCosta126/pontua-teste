import { AuthProvider } from "./context/auth.context";
import Login from "./pages/Login/Login";
import { AppRoutes } from "./routes/Index";

function App() {
  return (
    <>
      <AuthProvider>
        <AppRoutes></AppRoutes>
      </AuthProvider>
    </>
  );
}

export default App;
