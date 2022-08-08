import "./App.css";
import Accordion from "./components/Accordion";
function App() {



  const infos = [
    {
      question: "Question 1",
      answer:
        "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis neque earum debitis nisi animi ipsum soluta corrupti sapiente? Nemo debitis unde beatae repudiandae veniam nulla perferendis excepturi necessitatibus, eum similique, sed molestias voluptatum ab iure quas minima aut et, distinctio maiores doloribus labore fugiat! Doloremque nulla placeat hic dolor, expedita blanditiis repudiandae maxime cupiditate incidunt, molestiae eligendi iusto ipsum voluptates!",
    },
    {
      question: "Question 2",
      answer:
        "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis neque earum debitis nisi animi ipsum soluta corrupti sapiente? Nemo debitis unde beatae repudiandae veniam nulla perferendis excepturi necessitatibus, eum similique, sed molestias voluptatum ab iure quas minima aut et, distinctio maiores doloribus labore fugiat! Doloremque nulla placeat hic dolor, expedita blanditiis repudiandae maxime cupiditate incidunt, molestiae eligendi iusto ipsum voluptates!",
    },
    {
      question: "Question 3",
      answer:
        "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis neque earum debitis nisi animi ipsum soluta corrupti sapiente? Nemo debitis unde beatae repudiandae veniam nulla perferendis excepturi necessitatibus, eum similique, sed molestias voluptatum ab iure quas minima aut et, distinctio maiores doloribus labore fugiat! Doloremque nulla placeat hic dolor, expedita blanditiis repudiandae maxime cupiditate incidunt, molestiae eligendi iusto ipsum voluptates!",
    },
    {
      question: "Question 4",
      answer:
        "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis neque earum debitis nisi animi ipsum soluta corrupti sapiente? Nemo debitis unde beatae repudiandae veniam nulla perferendis excepturi necessitatibus, eum similique, sed molestias voluptatum ab iure quas minima aut et, distinctio maiores doloribus labore fugiat! Doloremque nulla placeat hic dolor, expedita blanditiis repudiandae maxime cupiditate incidunt, molestiae eligendi iusto ipsum voluptates!",
    },
  ];
  return (
    <>
      <div className="wrapper">
        <Accordion infos={infos}/>
      </div>
    </>
  );
}

export default App;
