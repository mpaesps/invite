import "./index.css";
import Button from "@mui/material/Button";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [searchParams] = useSearchParams();
  const nomeConvidado = searchParams.get("nome") || "Convidado";

  return (
    <div className="conteudo">
      <div className="caixa-mensagem">
        <div className="titulo">
          Chá de
          <br />
          Casa Nova
        </div>

        <div className="imagem-casa">
          <img src="/assets/casa.png" alt="Casa" />
        </div>

        <div className="subtitulo">Guilherme & Mayara</div>

        <div className="texto">
          <p>
            Oii, {nomeConvidado} & família! Estamos de casa nova e queremos compartilhar essa alegria com você.
      
             Sua presença fará desse momento algo ainda mais especial!
          </p>
        </div>

        <div className="data-hora-local">
          <div className="icon">
            <img
              className="calendario"
              src="assets/calendar.png"
              alt="Calendário"
            />
            31/05/2025
          </div>
          <div className="icon">
            <img className="relogio" src="assets/clock.png" alt="Relógio" />
            15:00
          </div>
          <div className="icon">
            <img className="pin" src="assets/pin.png" alt="Localização" />
            <a
              href="https://maps.app.goo.gl/KVNSWMV5q2TKev7p8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Av. Monteiro Lobato 3130
            </a>
          </div>
        </div>

        <div className="bot">
          <Button variant="contained" className="botao-bege-rosado" href="https://forms.gle/fMdyQArJAx7UJbfB6">
            Escolher Presente{" "}
            <img className="presente" src="assets/presente.png" alt="Presente" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
