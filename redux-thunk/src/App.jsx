import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dataFetching } from './Component/action';

function App() {
 const data = useSelector((state) => state.data);
 const dispatch = useDispatch();

 const getData = () => {
   dispatch(dataFetching());
 };

 return (
   <div>
     <button onClick={getData}>Get Data</button>
     {data && data.map((item) => (
       <div key={item.id}>
         <h1>{item.name}</h1>
         <h4>{item.email}</h4>
         <hr/>
       </div>
     ))}
   </div>
 );
}

export default App;