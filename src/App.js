import './App.css';
import DragAndDrop from './components/DragAndDrop';

const data = [
  {
    title: 'Todo',
    items: [],
  },
  {
    title: 'In-Progress',
    items: [],
  },
  {
    title: 'Completed',
    items: [],
  },
];

function App() {
  return (
    <>
      <div className="container">
        <DragAndDrop data={data} />
      </div>
    </>
  );
}

export default App;
