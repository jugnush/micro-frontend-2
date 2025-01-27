import React from "react";
import Table from './components/Table.jsx';
import customeReactQuery from './customeReactQuery.jsx';

import { Card }  from 'react-ui-library-jugnush';

const App = () => {
  const [data, error, loading] = customeReactQuery('https://fakestoreapi.com/products');

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
    {/* <Card title= {"Card Title from component lib"} description={"Card Title from component lib"}/> */}
      <Table data={data}/>
    </div>
  )
}

export default App;
