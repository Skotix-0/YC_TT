export default function Render_table(props:any) {

    const statement_info: object[] = [
        {title: "Номер заявки", type: "text", name: "number_statement"},
        {title: "Дата и время получения заявки от клиента", type: "date", name: "date_statement"},
        {title: "Название фирмы клиента", type: "text", name: "name_company"},
        {title: "ФИО перевозчика", type: "text", name: "fio_transporter"},
        {title: "Контактный телефон перевозчика", type: "text", name: "phone_number_transporter"},
        {title: "Комментарии", type: "text", name: "commit"},
        {title: "ATI код сети перевозчика", type: "text", name: "ati_code"}
    ];

    return (
        <div>
            <span>Всего заявок: {props.table_arr.length}</span>

            <form onSubmit={props.ANS}>
                {
                    statement_info.map((elem: any, key: number)=>{
                        return <div key={elem.title} className="form_input_div">
                                <span>{elem.title}</span>
                                <input type={elem.type} name={elem.name} />
                            </div>;
                    })
                }
                <button type="submit">Submit</button>
            </form>

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
                        return <tr key={key}>
                                <td>{elem.number_statement}</td>
                                <td>{elem.date_statement}</td>
                                <td>{elem.name_company}</td>
                                <td>{elem.fio_transporter}</td>
                                <td>{elem.phone_number_transporter}</td>
                                <td>{elem.commit}</td>
                                <td>{elem.ati_code}</td>
                            </tr>;
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
