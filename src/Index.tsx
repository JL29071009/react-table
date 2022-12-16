import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";
import { IUser } from "./Types";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState<IUser[]>([]);

  const fetchData = async () => {
    const uri = "https://api.sampleapis.com/countries/countries";
    const response = await axios.get<IUser[]>(uri);
    setData(response.data);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Table data={data} />
    </>
  );
}
export default App;
