import React from 'react'
import Benchmark, {BenchmarkType} from 'react-component-benchmark'

const COLUMNS = ["sampleCount", "max", "min", "mean", "median", "p70", "p95"]

function Measurement(props) {
  const ref = React.useRef();
  const [result, setResult] = React.useState();
  function handleComplete(result) {
    setResult(result);
    console.log(result);
  }
  function handleStart() {
    ref.current.start();
  }

  const componentName = props.componentName || props.component.name

  return (
    <div style={{width: 320}}>
      <h1>{componentName}</h1>
      <button onClick={handleStart}>Run</button>
      <Benchmark
        component={props.component}
        onComplete={handleComplete}
        ref={ref}
        samples={100}
        timeout={10000}
        type={BenchmarkType.MOUNT}
      />
      {result &&
      <table>
        <tbody>
          {COLUMNS.map(title => (
            <tr key={title}>
              <th>{title}</th>
              <td>{result[title]}</td>
            </tr>)
          )}
        </tbody>
      </table>
      }
    </div>
  );
}

export default function BenchmarkSuite(props) {
  return (
    <div style={{display: "flex", flexDirection:"row"}}>
      {props.components.map(component => <Measurement component={component} />)}
    </div>
  )
}
