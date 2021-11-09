import { useState } from 'react';
import './App.scss';
import Render_table from './components/Render_table';

function App() {
  interface ITableData{
    number_statement : number,
    date_statement : Date,
    name_company: string,
    fio_transporter: string,
    phone_number_transporter: string,
    commit: string,
    ati_code: string
  }

  const [table_data, setTableData] = useState([
    {
      number_statement: 1,
      date_statement: "Tue Nov 09 2021 16:15:34",
      name_company: "Test",
      fio_transporter: "VV PUTIN",
      phone_number_transporter: "880005553535",
      commit: "привези чтоб было норм",
      ati_code: "https://ati.su/firms/12345/info"
    },
  ]);

  const add_new_statement = (props: any) =>{
    props.preventDefault();
    console.log(props.target.elements.name_company.value);
  }

  return (
    <div className="App">
      <Render_table table_arr = {table_data} ANS = {add_new_statement} />
    </div>
  );
}

export default App;
