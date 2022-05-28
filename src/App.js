import Container from "./components/Container";
import { ChatContextProvider } from "./contexts/ChatContext";
import { LoadingContextProvider } from "./contexts/LoadingContext";

function App() {
  return (
    <ChatContextProvider>
      <LoadingContextProvider>
        <div className="App">
          <Container />
        </div>
      </LoadingContextProvider>
    </ChatContextProvider>
  );
}

export default App;
