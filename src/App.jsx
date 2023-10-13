import { useState } from 'react'
import './App.css'
//p
function App() {
  const [count, setCount] = useState(0)

  const tambah = () => {
    if (count < 15) {
      setCount(count + 1)
    }
  }

  const kurang = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  function reset(){
    setCount(0)
  }

  return (
    <>
      <div className='container w-50 vh-100 d-flex justify-content-center align-items-center flex-column gap-3'>
        <h1 className='text-center fw-bold'>{count}</h1>
        <div className='d-flex justify-content-center align-content-center gap-3'>
          <button className='btn btn-success' onClick={kurang}>
            Kurang
          </button>
          <button className='btn btn-danger' onClick={reset}>
            Reset
          </button>
          <button className='btn btn-primary' onClick={tambah}>
            Tambah
          </button>
        </div>
      </div>
    </>
  )
}

export default App