import React from 'react'
import Benchmark, {BenchmarkType} from 'react-component-benchmark'

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
      <p>div component</p>
      <p>div component</p>
    </>
  );
}

function App() {
  const flagmentRef = React.useRef();
  const divRef = React.useRef();
  const [flagmentResult, setFlagmentResult] = React.useState()
  const [divResult, setDivResult] = React.useState()

  const handleCompleteFlagment = React.useCallback((results) => {
    setFlagmentResult({...results, component: 'Flagment'})
    console.dir(results)
  }, []);
  const handleCompleteDiv = React.useCallback((results) => {
    setDivResult({...results, component: 'Div'})
    console.dir(results)
  }, []);

  function handleStart() {
    flagmentRef.current.start();
    divRef.current.start();
  }

  const columns = ["component", "sampleCount", "max", "min", "mean", "median", "p70", "p95", "p99"]

  return (
    <div>
      <button onClick={handleStart}>Run</button>
      <Benchmark
        component={Div}
        onComplete={handleCompleteDiv}
        ref={divRef}
        samples={100}
        timeout={10000}
        type={BenchmarkType.MOUNT}
      />
      <Benchmark
        component={Flagment}
        onComplete={handleCompleteFlagment}
        ref={flagmentRef}
        samples={100}
        timeout={10000}
        type={BenchmarkType.MOUNT}
      />
      {divResult && flagmentResult &&
      <table>
        <thead>
          <tr>
          {columns.map(title => <td>{title}</td>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            {columns.map(property => <td>{divResult[property]}</td>)}
          </tr>
          <tr>
            {columns.map(property => <td>{flagmentResult[property]}</td>)}
          </tr>
        </tbody>
      </table>
      }
    </div>
  );
}

export default App;
