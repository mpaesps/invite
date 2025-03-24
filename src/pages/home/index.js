import "./index.css";
import Button from "@mui/material/Button";

function Home() {
  return (
    <div className="conteudo">
      <div className="caixa-mensagem">
        <div className="titulo">
          Chá de
          <br />
          Casa Nova
        </div>
        <div className="imagem-casa">
          <img src="/assets/casa.png"></img>
        </div>
        <div className="subtitulo">Guilherme & Mayara</div>
        <div className="texto">
          <p>
            Estamos de casa nova e queremos compartilhar essa alegria com você.
            <br />Oii, & Família Sua presença fará desse momento algo ainda mais especial!
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
            <img className="relogio" src="assets/clock.png"></img>
            15:00
          </div>
          <div className="icon">
            <img className="pin" src="assets/pin.png"></img>
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
          <Button variant="contained" className="botao-bege-rosado">
           Escolher Presente   <img className="presente" src="assets/presente.png"></img>     
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
