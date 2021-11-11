Представление получение данных с сервера API:

Имеем интерфейс отбора типов данных.

interface ITableData{
    number_statement : number,
    date_statement : string,
    name_company: string,
    fio_transporter: string,
    phone_number_transporter: string,
    commit: string,
    ati_code: string
  }

При загрузке страницы происходит запрос на сервер, после получения ответа в Json формате идёт обработка ответа, и добавление элементво в общий массив values, который после возвращает все его элементы переменной table_data 

const [table_data, setTableData] = useState(async () =>{
const API_URL = await fetch(`LINK ON A SERVER`);
const data = await API_URL.json();
let values : any[] = [];

data.map((elem: any, key: number)=>{
    let obj:ITableData = {
    number_statement : elem.number_statement ,
    date_statement : elem.date_statement ,
    name_company: elem.name_company ,
    fio_transporter: elem.fio_transporter ,
    phone_number_transporter: elem.phone_number_transporter ,
    commit: elem.commit ,
    ati_code: elem.ati_code,
    }

    return [...values, obj];
});

return [...values];
} );