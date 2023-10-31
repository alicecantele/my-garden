import "./App.css";

function App() {
  return (
    <div className="container relative min-h-screen mx-auto bg-lime-300 flex flex-col">
      <div className="bg-lime-400 p-4">Cabeçalho</div>
      <div className="bg-lime-500 p-4 flex flex-wrap">
        <div className="bg-white m-3 p-2 w-60 h-48">Plantinha 1</div>
        <div className="bg-white m-3 p-2 w-60 h-48">Plantinha 2</div>
        <div className="bg-white m-3 p-2 w-60 h-48">Plantinha 3</div>
        <div className="bg-white m-3 p-2 w-60 h-48">Plantinha 4</div>
        <div className="bg-white m-3 p-2 w-60 h-48">Plantinha 5</div>
        <div className="bg-white m-3 p-2 w-60 h-48">Plantinha 6</div>
        <div className="bg-white m-3 p-2 w-60 h-48">Plantinha 7</div>
        <div className="bg-white m-3 p-2 w-60 h-48">Plantinha 8</div>
        <div className="bg-white m-3 p-2 w-60 h-48">Plantinha 9</div>
      </div>
      <div className="bg-lime-600 p-4 absolute inset-x-0 bottom-0">Rodapé</div>
    </div>
  );
}

export default App;
