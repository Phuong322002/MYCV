import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Portpolio from './screen/portfolio'
import '@/style/plugins.scss'
import '@/style/style.scss'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Portpolio />
    </div>
  )
}

export default App
