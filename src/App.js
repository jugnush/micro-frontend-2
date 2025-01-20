import React from "react";
import Table from './components/Table.jsx';
import customeReactQuery from './customeReactQuery.jsx';

const App = () => {
  const [data, error, loading] = customeReactQuery('https://fakestoreapi.com/products?limit=5');

  console.log('data', data);

  const [sear, setSear] = React.useState('');
  return (
    <div style={{
      margin: "10px",
      padding:"10px",
      textAlign:"center",
      backgroundColor:"cyan"
    }}>
     <h1 className="text-5xl font-bold underline">
   List of Products
    </h1>
      <Table data={data}/>
    </div>
  )
}

export default App;
