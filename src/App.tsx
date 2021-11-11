import { useState } from 'react';
import './App.scss';
import RENDER_TABLE from './components/Render_table';
import ADRENDER_TABLE from './components/AdRender_table';

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

  const [table_data, setTableData]: any[] = useState([]);

  const [ADM_value, setADM_value] = useState(false);

  const add_new_statement = (props: any):void =>{
    props.preventDefault();

    let newObj:ITableData;

    if(table_data.filter((v: any, i:number) => v !== undefined).length <= 0){
      newObj= {
        number_statement: 1,
        date_statement: `${props.target.elements.date_statement.value +" "+props.target.elements.time_statement.value}`,
        name_company: `${props.target.elements.name_company.value}`,
        fio_transporter: `${props.target.elements.fio_transporter.value}`,
        phone_number_transporter: `${props.target.elements.phone_number_transporter.value}`,
        commit: `${props.target.elements.commit.value}`,
        ati_code: `${props.target.elements.ati_code.value}`
      }
    }else{
      newObj = {
        number_statement: table_data[table_data.length - 1].number_statement + 1,
        date_statement: `${props.target.elements.date_statement.value +" "+props.target.elements.time_statement.value}`,
        name_company: `${props.target.elements.name_company.value}`,
        fio_transporter: `${props.target.elements.fio_transporter.value}`,
        phone_number_transporter: `${props.target.elements.phone_number_transporter.value}`,
        commit: `${props.target.elements.commit.value}`,
        ati_code: `${props.target.elements.ati_code.value}`
      }
    }

    setTableData([...table_data, newObj]);
  }

  const EnableAdminMode = (props: boolean):void =>{
    setADM_value(props);
  }

  const DeleteStatement = (props:any):void =>{
    delete table_data[props];
    setTableData([...table_data]);
  }

  const SaveEditingStatement = (props: any):void =>{
    table_data[props.id].date_statement = props.Obj.date_statement;
    table_data[props.id].name_company = props.Obj.name_company;
    table_data[props.id].fio_transporter = props.Obj.fio_transporter;
    table_data[props.id].phone_number_transporter = props.Obj.phone_number_transporter;
    table_data[props.id].commit = props.Obj.commit;
    table_data[props.id].ati_code = props.Obj.ati_code;
    setTableData([...table_data]);
  } 

  return (
    <div className="App">
      { ADM_value === false &&
        <RENDER_TABLE table_arr = {table_data} ANS = {add_new_statement} ADM = {EnableAdminMode} />
      }

      { ADM_value !== false && 
        <ADRENDER_TABLE table_arr = {table_data} SES = {SaveEditingStatement} ANS = {add_new_statement} ADM = {EnableAdminMode} Del = {DeleteStatement} />
      }
    </div>
  );
}

export default App;
