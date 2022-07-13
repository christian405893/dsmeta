import './styles.css'

function SalesCard() {
  return (
        <div className="dsmeta-card">
                    Olá!
                    <h2 className="dsmeta-sales-title">Vendas</h2>
                    <div>
                        <div className="dsmeta-from-control-container" >
                            <input className="dsmeta-from-control" type="text" />
                        </div>
                        <div className="dsmeta-from-control-container" >
                            <input className="dsmeta-from-control" type="text" />
                        </div>
                    </div>

                    <div> {/*div da tabela*/}
                        <table className="dsmeta-sales-table" > {/*especificação da tabela*/}
                            <thead> {/*as linhas dos titulos é o cabeçalho da tabela*/}
                                <tr> {/*linha de tabela*/}
                                    <th className="show992" >ID</th>
                                    <th className="show576" >Data</th>
                                    <th>Vendedor</th> {/*titulos*/}
                                    <th className="show992" >Visitas</th>
                                    <th className="show992" >Vendas</th>
                                    <th>Total</th>
                                    <th>Notificar</th>
                                </tr>
                            </thead>
                            <tbody> {/*corpo da tabela*/}
                                <tr> {/*linha da tabela*/}
                                    <td className="show992" >#341</td>
                                    <td className="show576" >08/07/2022</td>
                                    <td>anakin</td>
                                    <td className="show992" >15</td>
                                    <td className="show992" >11</td>
                                    <td>R$ 55300.00</td>
                                    <td>
                                        <div className="dsmeta-red-btn-container" >
                                            <div className="dsmeta-red-btn" >
                                                <img src="notification-icon.svg" alt="imagem de notificação"/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr> {/*linha da tabela*/}
                                    <td className="show992" >#341</td>
                                    <td className="show576" >08/07/2022</td>
                                    <td>anakin</td>
                                    <td className="show992" >15</td>
                                    <td className="show992" >11</td>
                                    <td>R$ 55300.00</td>
                                    <td>
                                        <div className="dsmeta-red-btn-container" >
                                            <div className="dsmeta-red-btn" >
                                                <img src="notification-icon.svg" alt="imagem de notificação"/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr> {/*linha da tabela*/}
                                    <td className="show992" >#341</td>
                                    <td className="show576" >08/07/2022</td>
                                    <td>anakin</td>
                                    <td className="show992" >15</td>
                                    <td className="show992" >11</td>
                                    <td>R$ 55300.00</td>
                                    <td>
                                        <div className="dsmeta-red-btn-container" >
                                            <div className="dsmeta-red-btn" >
                                                <img src="notification-icon.svg" alt="imagem de notificação"/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
  )
}

export default SalesCard;
