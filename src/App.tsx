import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CoreVisualizer } from "@reearth/core";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}>
      <CoreVisualizer
        ready={true}
        engine="cesium"
        sceneProperty={{
          tiles: [
            {
              id: "default",
              tile_type: "default",
            },
          ],
        }}
        layers={[
          {
            id: "marker",
            type: "simple",
            data: {
              type: "geojson",
              value: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {
                      index: 1,
                    },
                    geometry: {
                      coordinates: [139.75299772754948, 35.68523972679557],
                      type: "Point",
                    },
                  },
                  {
                    type: "Feature",
                    properties: {
                      index: 2,
                    },
                    geometry: {
                      coordinates: [139.8327378666679, 35.67919002820361],
                      type: "Point",
                    },
                  },
                  {
                    type: "Feature",
                    properties: {
                      index: 3,
                    },
                    geometry: {
                      coordinates: [139.69716359812975, 35.70030560455889],
                      type: "Point",
                    },
                  },
                ],
              },
            },
            marker: {
              imageColor: {
                expression: {
                  conditions: [
                    ["${index} === 1", "color('#FF0000')"],
                    ["${index} === 2", "color('#00FF00')"],
                    ["true", "color('#000000')"],
                  ],
                },
              },
            },
          },
        ]}
      />
    </div>
    </>
  )
}

export default App
