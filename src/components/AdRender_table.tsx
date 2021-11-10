

export default function AdRender_table(props: any) {

    const statement_info_form: object[] = [
        {title: "Дата получения заявки от клиента", type: "date", name: "date_statement"},
        {title: "Название фирмы клиента", type: "text", name: "name_company"},
        {title: "ФИО перевозчика", type: "text", name: "fio_transporter"},
        {title: "Телефон перевозчика", type: "text", name: "phone_number_transporter"},
        {title: "Комментарии", type: "text", name: "commit"},
        {title: "Код сети перевозчика", type: "text", name: "ati_code"}
    ];

    const statement_info: object[] = [
        {title: "Номер заявки", type: "text", name: "number_statement"},
        {title: "Дата получения заявки от клиента", type: "date", name: "date_statement"},
        {title: "Название фирмы клиента", type: "text", name: "name_company"},
        {title: "ФИО перевозчика", type: "text", name: "fio_transporter"},
        {title: "Телефон перевозчика", type: "text", name: "phone_number_transporter"},
        {title: "Комментарии", type: "text", name: "commit"},
        {title: "Код сети перевозчика", type: "text", name: "ati_code"}
    ];

    let Progress: any[] = [];

    const EditRow = (props: any): void =>{
        let child = Progress[props].children;
        for(let i = 0; i < child.length-1; i++){
            child[i].children[0].style.border = "1px solid black";
            child[i].children[0].style.background = 'white';
            child[i].children[0].removeAttribute('readOnly');
        }
    }
    
    return (
        <div>
            <span>Всего заявок: {props.table_arr.length}</span>
            <button onClick={()=>{props.ADM(false)}}>Admin Mode Off</button>
            <form id="form_add_statement" onSubmit={props.ANS}>
                {
                    statement_info_form.map((elem: any, key: number)=>{
                        return <div key={elem.title} className="form_input_div">
                                <span>{elem.title}</span>
                                <input type={elem.type} name={elem.name} id={"form_add_"+elem.name} />
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
                        return <tr key={key} id={"ADM_table"+elem.number_statement} ref={(input) => {Progress[elem.number_statement] = input }}>
                                <td><input className="ADM_table" defaultValue={elem.number_statement} readOnly /></td>
                                <td><input className="ADM_table" defaultValue={elem.date_statement} readOnly /></td>
                                <td><input className="ADM_table" defaultValue={elem.name_company} readOnly /></td>
                                <td><input className="ADM_table" defaultValue={elem.fio_transporter} readOnly /></td>
                                <td><input className="ADM_table" defaultValue={elem.phone_number_transporter} readOnly /></td>
                                <td><input className="ADM_table" defaultValue={elem.commit} readOnly /></td>
                                <td><input className="ADM_table" defaultValue={elem.ati_code} readOnly /></td>
                                <td>
                                    <div id={'Tool_'+elem.number_statement}>
                                        <button onClick={()=>{
                                            props.Del(elem.number_statement);
                                        }}>Del</button>
                                        <button onClick={()=>{
                                            EditRow(elem.number_statement);
                                        }}>Edit</button>
                                    </div>
                                    <div id={"Save_"+elem.number_statement}>
                                        <button onClick={()=>{
                                            let child = Progress[elem.number_statement].children;
                                            let arr_data = [];
                                            for(let i = 0; i < child.length-1; i++){
                                                arr_data.push(child[i].children[0].value);
                                            }
                                            props.SES(arr_data);
                                        }}>Save</button>
                                    </div>
                                </td>
                            </tr>;
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
