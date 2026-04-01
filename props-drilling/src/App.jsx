import Card from "./assets/components/comp";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      <Card user="kamran" age={30} />
      <Card user="ahmed" age={40} />
    </div>
  );
}

export default App;
