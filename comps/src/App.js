import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
        id:'sdssda',
        label:'Can i use React on a project',
        content:'You can use React on any project u like',
    },
    {
      id:'ssdtwa',
      label:'Can i use Tailwind on a project',
      content:'You can use Tailwind on any project u like',
    },
    {
      id:'bbbsdb',
      label:'Can i use CSS on a project',
      content:'You can use CSS on any project u like',
    },
  ];

  return (
    <div>
      <Accordion items = {items}/>
      </div>
  );
}

export default App;
