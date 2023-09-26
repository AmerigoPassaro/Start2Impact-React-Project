import React from "react"

export default function Main(){
  return (
    <main>
    <nav id="main-menu-nav">
      <h1>Home Page</h1>
      <ul>
        <li class="main-menu-item"><a class="main-menu-link" href="#regione">Regione</a></li>
        <li class="main-menu-item"><a class="main-menu-link" href="#storia">Storia</a></li>
        <li class="main-menu-item"><a class="main-menu-link" href="#province">Province</a></li>
      </ul>
    </nav>

    <h2>Regione</h2>
    <section id="#regione">
      <p class="main-paragraph">
        La Sicilia è una delle regioni di Italia. Essa è la più vasta a livello spaziale, infatti ha una superficie di quasi 26.000 chilometri quadri.
        Essa oltre ad essere la più grande è anche quella posta più a sud rispetto alle altre. Questa la caratterizza come uno dei luoghi più caldi dell'Italia.
        Possiamo infatti riscontrare inverni freschi ed estati particolarmente calde.
      </p>
    </section>

    <h2>Storia</h2>
    <section id="storia">
      <h3>Età antica</h3>
      <div class="main-paragraph-grid">
        <figure>
          <img class="main-image" src="immagini/valledeitempli.jpg" alt="Tempio della Concordia ad Agrigento" />
          <figcaption>Tempio della Concordia ad Agrigento</figcaption>
        </figure>
        <p class="main-paragraph">
          Le prime tracce di vita sull'isola sono state riscontrate nella zona di Marina di Ragusa.
          Successivamente il territorio fu popolato dai Fenici e poi colonizzato dai Greci. Di quest'ultimi vi è traccia nella nota Valle dei Templi ad Agrigento.
          Dopo la prima guerra punica, il territorio siciliano fu sottomesso al potere di Roma.
        </p>
      </div>
      <h3>Età medievale</h3>
      <div class="main-paragraph-grid">
        <figure>
          <img class="main-image" src="immagini/cappellapalatina.jpg" alt="Volta della Cappella Palatina a Palermo" />
          <figcaption>Volta della Cappella Palatina a Palermo</figcaption>
        </figure>
        <p class="main-paragraph">
          Dopo la caduta dell'Impero romano d'Occidente, il territorio non fu più soggetto da parte del potere di Roma.
          Verso il IX secolo d.C. la Sicilia divenne oggetto di interesse del popolo musulmano, il quale fece in tutti i modi per conquistare l'isola.
          Verso l'XI secolo d.C. l'arrivo dei normanni, scacciò il popolo musulmano dal territorio, dando luogo al noto regno normanno di Sicilia.
        </p>
      </div>
      <h3>Età moderna</h3>
      <div class="main-paragraph-grid">
        <figure>
          <img class="main-image" src="immagini/garibaldipalermo.jpg" alt="Garibaldi a Palermo in un dipinto di Giovanni Fattori" />
          <figcaption>Garibaldi a Palermo in un dipinto di Giovanni Fattori</figcaption>
        </figure>
        <p class="main-paragraph">
          Dopo la dominazione normanna, la Sicilia finì sotto il potere di borboni, i quali costituirono il Regno delle Due Siclie.
          Ma fu durante gli anni dell'unificazione dell'Italia, che il territorio siciliano tornò sotto il potere di un sovrano italiano.
          Noto è infatti lo sbarco effettuato da Garibaldi, detto lo sbarco dei mille, che permise un attacco decisivo contro le forze dei borboni
        </p>
      </div>
    </section>


    <h2>Province</h2>
    <section id="province">

      <p>
        <table id="popolazione">

          <tr>
            <th>Nome</th>
            <th>Popolazione</th>
          </tr>

          <tr>
            <td>Palermo</td>
            <td>171.787</td>
          </tr>

          <tr>
            <td>Catania</td>
            <td>1.115.696</td>
          </tr>

          <tr>
            <td>Messina</td>
            <td>646.902</td>
          </tr>

          <tr>
            <td>Agrigento</td>
            <td>1.115.696</td>
          </tr>

          <tr>
            <td>Caltanissetta</td>
            <td>274.194</td>
          </tr>

          <tr>
            <td>Enna</td>
            <td>1.275.293</td>
          </tr>

          <tr>
            <td>Ragusa</td>
            <td>318.468</td>
          </tr>

          <tr>
            <td>Siracusa</td>
            <td>404.419</td>
          </tr>

          <tr>
            <td>Trapani</td>
            <td>435.587</td>
          </tr>

        </table>

      </p>
    </section>
    </main>
  )
}
