import "./app.css";
import { FeedbackProvider } from "./context/FeedbackContext";
import AppRoutes from "./routes";

function App() {
  return (
    <FeedbackProvider>
      <div className="App">
        <AppRoutes />
      </div>
    </FeedbackProvider>
  );
}

export default App;
