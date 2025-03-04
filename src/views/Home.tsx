export function Home() {
  return (
    <>
      <h1>Bem-vindo ao Movie SPA!</h1>
      <h2>
        Projeto desenvolvido na disciplina Plataformas Front End - React da
        pós-graduação em Desenvolvimento Full-Stack pela PUC Minas EAD
      </h2>
      <p>
        Este projeto exibe uma lista de filmes mais assistidos, consumindo dados
        da API The Movie Database (TMDb). Ele permite que o usuário selecione e
        visualize seus filmes favoritos em uma página dedicada. A aplicação foi
        desenvolvida como parte da disciplina de{" "}
        <strong>Plataformas Front End - React</strong> no curso de{" "}
        <strong>Desenvolvimento Full-Stack</strong> da PUC Minas EAD.
      </p>

      <h3>Funcionalidades:</h3>
      <ul>
        <li>
          <strong>Filmes Populares:</strong> Na página <em>Filmes</em>, você
          encontrará uma lista atualizada dos filmes mais assistidos do momento,
          consumidos diretamente da API The Movie Database (TMDb). Selecione
          qualquer título para ver mais detalhes sobre ele.
        </li>
        <li>
          <strong>Favoritos:</strong> Você pode marcar os filmes que mais gostou
          como <em>Favoritos</em> e acessá-los em uma página dedicada,
          facilitando a visualização e o acesso aos seus filmes preferidos.
        </li>
      </ul>

      <h3>Tecnologias e Conceitos Explorados:</h3>
      <p>O projeto explora diversos conceitos importantes, como:</p>
      <ul>
        <li>
          <strong>Hooks:</strong> Utilização de hooks como useState, useEffect e
          useSelector para gerenciamento de estado e efeitos.
        </li>
        <li>
          <strong>Rotas:</strong> Navegação entre diferentes páginas utilizando
          a biblioteca React Router.
        </li>
        <li>
          <strong>Prefetching e Lazy Loading:</strong> Técnicas para melhorar a
          performance da aplicação, carregando os dados de maneira eficiente e
          otimizando o carregamento de componentes.
        </li>
      </ul>

      <p>
        Comece agora explorando os filmes populares e marcando seus favoritos!
      </p>
    </>
  );
}
