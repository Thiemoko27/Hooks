import { useEffect } from "react";
import { useFetch } from "./Components/Hooks/useFetch"
import { Counter } from "./Components/Page/Counter"
import papierPeint from './assets/papier-peint.png';
import { Card } from "./Components/card";

function App() {
  const bgStyle = {backgroundImage: `url(${papierPeint})`, backgroudSize: 'cover', backgroudRepeat: 'no-repeat'}

  useEffect(() => {
    document.body.style.backgroundImage = bgStyle.backgroundImage
    document.body.style.backgroundSize = bgStyle.backgroudSize

    return(() => {
      document.body.style.backgroundImage =''
      document.body.style.backgroundSize =''
    })
  }, [])


    return <div className="container my-2">
      <Counter />
  </div>
}

export default App