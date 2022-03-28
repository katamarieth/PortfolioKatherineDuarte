import "./styles.css";

const data = [
  {
    id: "1",
    name: "Checkpoint Front-end I",
    link: "https://katamarieth.github.io/checkpoint-frontEnd1/",
    image:
      "https://bestbuyhotel.com.br/wp-content/uploads/2020/01/13.jpg",
  },
  {
    id: "2",
    name: "Codigo final discover",
    link: "https://katamarieth.github.io/codigo-final-discover/",
    image:
      "https://www.suno.com.br/wp-content/uploads/2017/12/financas-pessoais.jpg.jpg",
  },
  {
    id: "3",
    name: "CheckPoint3 FrontEnd_I ",
    link: "https://code-wars-academy.github.io/FrontEnd_CheckPoint3/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png",
  },
  {
    id: "4",
    name: "Primeiro Deploy",
    link: "https://mesa-de-trabalho4.herokuapp.com/",
    image:
      "https://www.eurodicas.com.br/wp-content/uploads/2020/01/comparador-de-envio-de-dinheiro-para-europa-1200x900.jpg",
  },

];

export default function Projects() {
  return (
    <div className="content-project" id="project">
      <h1 className="title-project">Projetos</h1>
      <ul className="list-project" >
        {data.map(({ image, name, link }) => (
          <a href={link}>
            <li className="item-list-project">
              <img className="img-project" src={image} />
              <h3 className="name-project">{name}</h3>
            </li>
          </a>

        ))}
      </ul>
    </div>
  )
}