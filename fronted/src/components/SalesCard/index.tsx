import NotificationButton from "../NotificationButton";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function SalesCard() {

  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min); {/*ta declarando uma variavel composta, a variavel e a função depois tem o usestat q serve para mudar o estado da variavel*/}
  const [maxDate, setMaxDate] = useState(max);

  return (
    <div className="dsmeta-card">
      Olá!
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-from-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-from-control-container">
            {/*serve para botar uma caixa de msg com o formato de data semelhante ao input*/}
            <DatePicker 
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <div>
        {" "}
        {/*div da tabela*/}
        <table className="dsmeta-sales-table">
          {" "}
          {/*especificação da tabela*/}
          <thead>
            {" "}
            {/*as linhas dos titulos é o cabeçalho da tabela*/}
            <tr>
              {" "}
              {/*linha de tabela*/}
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th> {/*titulos*/}
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {/*corpo da tabela*/}
            <tr>
              {" "}
              {/*linha da tabela*/}
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              {" "}
              {/*linha da tabela*/}
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              {" "}
              {/*linha da tabela*/}
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
