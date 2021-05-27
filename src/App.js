import React from 'react'
import BenchmarkSuite from './BenchmarkSuite'

function BaseLine() {
  const a = 0
  return <p>{a}</p>
}

function UseMemo() {
  const a = React.useMemo(() => 0, []);
  return <p>{a}</p>;
}

function ExtraDiv() {
  const a = 0
  return (
    <div>
      <p>{a}</p>
    </div>
  );
}

function Div() {
  return (
    <div>
      <p>b</p>
      <p>b</p>
    </div>
  );
}

function Flagment() {
  return (
    <>
      <p>b</p>
      <p>b</p>
    </>
  );
}

function App() {
  return (
    <>
      <BenchmarkSuite components={[
        {name: "BaseLine", component: BaseLine},
        {name: "UseMemo", component: UseMemo},
        {name: "ExtraDiv", component: ExtraDiv}
      ]} samples={500} />
      <BenchmarkSuite components={[
        {name: "Div", component: Div},
        {name: "Flagment", component: Flagment}
      ]} samples={500} />
    </>
  );
}

export default App;
