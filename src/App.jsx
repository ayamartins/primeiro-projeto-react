import Titulo from './Titulo'
import Imagem from './Imagem'
import Texto from './Texto'
import Gifs from './Gifs'
import Footer from './Footer'
import Cabecalho from './Cabecalho'
import Resumo from './Resumo'
import './App.css'

function App() {
 
  return (
  <> 
  <header>
  <Cabecalho>Meu diário na Reprograma</Cabecalho>
  </header>
  <nav className="navbar">
    <Imagem image="https://media.giphy.com/media/bTGggjvpmu9k00paKN/giphy.gif" alt="imagem da desenvolvedora do site, Ayane Martins" />
    <Titulo title="Oiee, tudo bem? " />
  </nav>  
  <section>
    <Resumo> "Meu nome é Ayane Martins, tenho 28 anos, sou mineirinha, nascida e criada em Juiz de Fora. Jornalista, formada pela Universidade Federal de Juiz de Fora UFJF , especialista em Marketing pela Universidade de São Paulo USP e futura desenvolvedora Front-end pela reprograma. Sempre gostei muito da área de comunicação, 
    mas vivendo o processo o de transição de carreira encontrei na tecnologia uma nova paixão e um mundo de possibilidades."</Resumo>
    <hr/>
  </section>
  <article>
      <Titulo title="4 coisas que aprendi na Reprograma:" />
    <div className="container">
      < Titulo title="Git - GitHub" />
      < Gifs image="https://media.giphy.com/media/xUNd9TLZdUyc9FO5cA/giphy.gif" alt="Gif Grey's Anatomy"/>
      <Texto><b>GitHub</b> é uma plataforma para gerenciar seu código e criar um ambiente de colaboração entre desenvolvedores, utilizando o Git como sistema de controle. Meu primeiro contato com o Git foi na segunda semana de aula do curso, foi um choque de realidade, pois eu não fazia a mínima ideia do que era GitHub. 
      Levei algumas semanas para de fato conseguir compreender o básico das suas funcionalidades e a cada dia aprendo uma coisa nova sobre ele.</Texto>
    </div>
    <div className="container">
      < Titulo title="HTML" />
      < Gifs image="https://media.giphy.com/media/sEJ1zptp2Ruec/giphy.gif" alt="Gif Cristina Yang"/>
      <Texto>  <b>HTML</b></Texto>
    </div>
    <div className="container">
      < Titulo title="CSS" />
      < Gifs image="https://media.giphy.com/media/3o7abIOMQrCuLdZPry/giphy.gif" alt="Gif Gre's Anatomy" />
      <Texto> <b>CSS</b> é um mecanismo para adicionar estilo, cores, fontes, espaçamento, a um documento web. Sempre gostei de desing, de criar e trazer persinalidade para as coisas, então CSS foi um respiro diante de tantos conteúdos difíceis.</Texto>
    </div>
    <div className="container">
      < Titulo title="JavaScript" />
      < Gifs image="https://media.giphy.com/media/XazTKKTogKXQI/giphy.gif" alt="Gif Cristina Yang" />
      <Texto>Meu primeiro contato com o <b>JavaScript</b> foi assustador, sempre tive dificuldade com lógica que é a base do JavaScript, ainda não o compreendi totalmente, está sendo bem trabahoso, mas com persistência, dedicaçãoe muitas horas de estudos sei que vou conseguir vencer mais essa.  </Texto>
    </div>
  </article>
  <footer>
  <Footer> Feito por Ayane Martins | Turma On17 | 2022</Footer>
  </footer>
  </>
  )
}

export default App