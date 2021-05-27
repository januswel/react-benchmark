import React from 'react'
import Benchmark, {BenchmarkType} from 'react-component-benchmark'

const COLUMNS = ["sampleCount", "median", "p70"]

function Measurement(props) {
  const ref = React.useRef();
  const [result, setResult] = React.useState();
  function handleComplete(result) {
    setResult(result);
  }
  function handleStart() {
    ref.current.start();
  }

  const componentName = props.name || props.component.name

  return (
    <div style={{width: 320}}>
      <h1>{componentName}</h1>
      <button onClick={handleStart}>Run</button>
      <Benchmark
        component={props.component}
        onComplete={handleComplete}
        ref={ref}
        samples={props.samples}
        timeout={10000}
        type={BenchmarkType.MOUNT}
      />
      {result &&
      <table border="1">
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
      {props.components.map((c, index) => (
        <Measurement
          key={index}
          name={c.name}
          component={c.component}
          samples={props.samples}
        />
      ))}
    </div>
  )
}
