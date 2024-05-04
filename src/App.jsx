import { useEffect } from "react";
import { useFetch } from "./Components/Hooks/useFetch"
import { Counter } from "./Components/Page/Counter"
import papierPeint from './assets/papier-peint.jpg';
import { Card } from "./Components/card";

function App() {
  const bgStyle = {backgroundImage: `url(${papierPeint})`, backgroudSize: 'cover', backgroudRepeat: 'no-repeat'}

  useEffect(() => {
    document.body.style.backgroundImage = bgStyle.backgroundImage
    document.body.style.backgroundSize = bgStyle.backgroudSize
    document.body.style.backgroundRepeat = bgStyle.backgroudRepeat

    return(() => {
      document.body.style.backgroundImage =''
      document.body.style.backgroundSize =''
      document.body.style.backgroundRepeat =''
    })
  }, [])


    return <div>
      <Counter />
  </div>
}

export default App