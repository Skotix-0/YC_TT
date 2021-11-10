import { useState } from 'react';
import './App.scss';
import Render_table from './components/Render_table';
import AdRender_table from './components/AdRender_table';

function App() {

  interface ITableData{
    number_statement : number,
    date_statement : string,
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
      commit: "фыв",
      ati_code: "12345"
    },
  ]);

  const [ADM_value, setADM_value] = useState(false);

  const add_new_statement = (props: any):void =>{
    props.preventDefault();

    let newObj:ITableData = {
      number_statement: table_data.length + 1,
      date_statement: `${props.target.elements.date_statement.value}`,
      name_company: `${props.target.elements.name_company.value}`,
      fio_transporter: `${props.target.elements.fio_transporter.value}`,
      phone_number_transporter: `${props.target.elements.phone_number_transporter.value}`,
      commit: `${props.target.elements.commit.value}`,
      ati_code: `${props.target.elements.ati_code.value}`
    }

    setTableData([...table_data, newObj]);
  }

  const EnableAdminMode = (props: boolean):void =>{
    setADM_value(props);
  }

  const DeleteStatement = (props:any):void =>{
    table_data.splice(props-1, 1);
    setTableData([...table_data]);
  }

  const SaveEditingStatement = (props: any):void =>{
    let arr_elem = table_data[props[0]-1];
    console.log(arr_elem);
    console.log(props);
    arr_elem.date_statement = props[1];
    arr_elem.name_company = props[2];
    arr_elem.fio_transporter = props[3];
    arr_elem.phone_number_transporter = props[4];
    arr_elem.commit = props[5];
    arr_elem.ati_code = props[6];

    setTableData([...table_data]);
  } 

  return (
    <div className="App">
      { ADM_value === false &&
        <Render_table table_arr = {table_data} ANS = {add_new_statement} ADM = {EnableAdminMode} />
      }

      { ADM_value !== false &&
        <AdRender_table table_arr = {table_data} SES = {SaveEditingStatement} ANS = {add_new_statement} ADM = {EnableAdminMode} Del = {DeleteStatement} />
      }
      
    </div>
  );
}

export default App;
