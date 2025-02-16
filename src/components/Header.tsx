import { Link } from "react-router";

export function Header() {
  return (
    <>
      <h1>Aplicação de filmes</h1>
      <ul>
        <li>
          <Link to={"/"}>Início</Link>
        </li>
        <li>
          <Link to={"/filmes"}>Filmes</Link>
        </li>
      </ul>
    </>
  );
}
