import { Counter } from "./Page/Counter";
import { Para } from "./Page/Paragraphe";
import './Page/ddd.css';

export function Card() {
    return <div class="card text-center class">
    <div className="card-header">
      To Aichata Coulibaly
    </div>
    <div class="card-body">
      <Para className="card-title" content="🎉Happy BithDay🎉" />
      <p className="card-text">La compagnie 🄲🄴🄽🅃🅄🅁🅈™ Vous souhaite une excellente journée, jour de votre Anniversaire <br />
      Puisse Allah le très haut vous accorder +10000 ans (bon c'est exagéré), et vous accorder le plus haut dégré du paradis. <br />
      Ainsi que la réussite</p>
      <a href="https://wa.link/na5uv4" className="btn btn-primary">Retourner dans Whatsapp</a>
    </div>
    <div className="card-footer text-muted">
      5 Mai 2024
    </div>
  </div>
}