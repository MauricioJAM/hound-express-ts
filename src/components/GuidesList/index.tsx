import type { Guide } from "../../hooks/useGuides";
import { ListSection, TableButton } from "./style";
import update from '../../assets/img/update-black.png';
import history from '../../assets/img/history--black.png'

interface Props {
  guides: Guide[];
  updateStatus: (guideNumber: string) => void;
  showHistory: (guideNumber: string) => void;
}

const GuidesList = ({ guides, updateStatus, showHistory }: Props) => {
  return (
    <ListSection>
      <h1 className="guides__title">Lista de guías</h1>

      <table id="guides__body">
        <thead>
          <tr>
            <th id="columnId">N° de guía</th>
            <th id="columnStat">Estado actual</th>
            <th id="columnOrig">Origen</th>
            <th id="columnDest">Destino</th>
            <th id="columnDate">Ultima actualización</th>
            <th>Actualizar</th>
            <th>Historial</th>
          </tr>
        </thead>

        <tbody>
          {guides.map((g) => (
            <tr key={g.guideNumber}>
              <td id="columnId">{g.guideNumber}</td>
              <td id="columnStat">{g.status}</td>
              <td id="columnOrig">{g.origen}</td>
              <td id="columnDest">{g.destination}</td>
              <td id="columnDate">{g.formattedDate}</td>

              <td id="columnUpd">
                <TableButton>
                  <i className="logo--table" onClick={() => updateStatus(g.guideNumber)}>
                    <img src={update} alt="actualizar" />
                  </i>
                </TableButton>
              </td>

              <td id="columnHist">
                <TableButton>
                  <i className="logo--table" onClick={() => showHistory(g.guideNumber)}>
                    <img src={history} alt="historial" />
                  </i>
                </TableButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ListSection>
  );
};

export default GuidesList;
