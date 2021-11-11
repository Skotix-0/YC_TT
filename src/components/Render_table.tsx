export default function Render_table(props:any) {

    const statement_info: object[] = [
        {title: "Номер заявки", type: "text", name: "number_statement"},
        {title: "Дата получения заявки от клиента", type: "date", name: "date_statement"},
        {title: "Название фирмы клиента", type: "text", name: "name_company"},
        {title: "ФИО перевозчика", type: "text", name: "fio_transporter"},
        {title: "Телефон перевозчика", type: "text", name: "phone_number_transporter"},
        {title: "Комментарии", type: "text", name: "commit"},
        {title: "Код сети перевозчика", type: "text", name: "ati_code"}
    ];

    return (
        <div>
            <span>Всего заявок: {props.table_arr.filter((v: any, i:number) => v !== undefined).length}</span>
            <button onClick={()=>{props.ADM(true)}}>Admin Mode On</button>
            <table className="table">
                <tbody>
                    <tr>
                        {
                            statement_info.map((elem: any)=>{
                                return  <td key={elem.title}>{elem.title}</td>;
                            })
                        }
                    </tr>
                    {
                        props.table_arr.map((elem:any, key: number)=>{
                                if(elem !== undefined){
                                    return <tr key={key}>
                                        <td>{elem.number_statement}</td>
                                        <td>{elem.date_statement}</td>
                                        <td>{elem.name_company}</td>
                                        <td>{elem.fio_transporter}</td>
                                        <td>{elem.phone_number_transporter}</td>
                                        <td>{elem.commit}</td>
                                        <td><a href={"https://ati.su/firms/"+elem.ati_code+"/info"} rel="noreferrer" target="_blank">{"https://ati.su/firms/"+elem.ati_code+"/info"}</a></td>
                                    </tr>;
                                }
                            }
                        )
                        
                    }
                </tbody>
            </table>
        </div>
    )
}
