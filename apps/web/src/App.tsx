import viteLogo from '/vite.svg'
import {UiButton} from "@mono/ui/src";
import {add} from "@mono/utils";
import {ChangeEvent, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    const [nums, setNums] = useState({
        a: '',
        b: '',
    })

    const handleNumChange = (key: keyof typeof nums) => (e: ChangeEvent<HTMLInputElement>) => {
        setNums(prevNums => ({
            ...prevNums,
            [key]: e.target.value,
        }));
    };
  return (
      <>
          <div>
              <a href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo"/>
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
          </div>
          <h1>Vite + React</h1>
          <div>
              <input type='text' value={nums.a} onChange={handleNumChange('a')}/>
              <input type='text' value={nums.b} onChange={handleNumChange('b')}/>
              <UiButton onClick={() => {
                  alert(add(Number(nums.a), Number(nums.b)));
              }}>Add</UiButton>
          </div>
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
      </>
  )
}

export default App
