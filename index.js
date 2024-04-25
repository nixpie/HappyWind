// index.js

import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Witaj na stronie Happywind - Twój Pensjonat nad Morzem</h1>
      </header>
      <main>
        <section>
          <h2>Adres:</h2>
          <p>Żeromskiego 20</p>
          <p>72-420 Dziwnów</p>
          <p>Zachodniopomorskie</p>
        </section>
        <section>
          <h2>Dojazd:</h2>
          <p>Znajdź nas łatwo dzięki mapce Google:</p>
          <iframe
            title="Mapa dojazdu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.143234627729!2d14.74745491578619!3d54.03603458001797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a0768b84c86d7d%3A0x723b8d0a14f69f3d!2s%C5%BBywiec%20Tatrza%C5%84ski%2C%20Polska!5e0!3m2!1spl!2sus!4v1640031312185!5m2!1spl!2sus"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </section>
        <section>
          <h2>Kontakt:</h2>
          <p>Tel: <a href="tel:+48798022443">798 022 443</a></p>
          <p>Email: <a href="mailto:biuro@villaresorts.pl">biuro@villaresorts.pl</a></p>
        </section>
      </main>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
css
Copy code
/* styles.css */

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

section {
  margin-bottom: 40px;
}

section h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

iframe {
  width: 100%;
  height: 400px;
}
