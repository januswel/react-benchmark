import BenchmarkSuite from './BenchmarkSuite'

function Div() {
  return (
    <div>
      <p>div component</p>
      <p>div component</p>
    </div>
  );
}

function Flagment() {
  return (
    <>
      <p>flagment component</p>
      <p>flagment component</p>
    </>
  );
}

function App() {
  return <BenchmarkSuite components={[Div, Flagment]} />
}

export default App;
