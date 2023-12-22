import "./App.css";

import { useState, useEffect } from "react";
import { supabase } from "./api";

function App() {
  useEffect(() => {
    fetchPlants();
  }, []);

  const [plants, setPlants] = useState([]);

  const fetchPlants = async () => {
    let { data, error } = await supabase
      .from("plants")
      .select("*")
      .order("id", { ascending: false });
    if (error) console.log("error", error);
    else {
      setPlants(data);
    }
  };

  return (
    <>
      <div className="container mx-auto grid grid-cols-12 gap-4">
        <div className="col-start-3 col-end-11 pt-28 text-8xl font-berkshire ">
          Meu Jardim
        </div>
        <div className="col-start-3 col-end-11 text-xl font-inter">
          Dê uma olhada no meu jardim, as plantas são bem legais, cada uma tem
          sua própria história.
        </div>
        <div className="col-start-3 col-end-11 grid grid-cols-8 gap-4">
          {plants.map((plant) => {
            return (
              <div
                className="transition col-span-8 lg:col-span-2 h-56 relative bg-cover bg-center rounded-lg shadow-lg hover:scale"
                style={{ backgroundImage: `url(${plant.photo_url})` }}
              >
                <div className="bg-green-500 bg-opacity-70 p-2 absolute bottom-0 rounded-b-lg w-full text-green-50 font-medium text-right text-xl font-inter hover:bg-green-400 hover:bg-opacity-70">
                  {plant.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-4 h-full flex-1 justify-end items-end mt-5 font-extralight text-xs text-green-900 text-right">
        <span>
          Criado e plantado por
          <br />
          Alice Cantele
        </span>
      </div>
    </>
  );
}

export default App;
