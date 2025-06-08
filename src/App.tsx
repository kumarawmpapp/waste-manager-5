
import SkipList from "./components/SkipList";

function App() {
  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-hidden">
            <SkipList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
