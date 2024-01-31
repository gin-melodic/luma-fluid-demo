import './App.css'
import { XFluid } from 'luma-fluid-lib'

function App() {
  return (
    <>
      <XFluid
        logoSrc='https://s2.loli.net/2024/01/29/mRrH5IQYucl4GCp.png'
        textureSrc='https://s2.loli.net/2024/01/29/rg3meSMxcUsRCao.jpg'
        width={1300} height={800}
        onError={(error) => console.error(error)}
      />
    </>
  )
}

export default App
