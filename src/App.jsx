import Header from './components/Header'
import Amanda from './components/Amanda'
import Ingrid from './components/Ingrid'
import Natasja from './components/Natasja'
import Arbeidskrav from './components/Arbeidskrav'
import './App.css'

function App() {
  

  return (
    <>
    <Header />

     <main>
      <h2>Arbeidskrav 4</h2>
      
      <section>
          <Amanda />
          <Ingrid />
          <Natasja />
      </section>

      <Arbeidskrav />
     </main>
    </>
  )
}

export default App
