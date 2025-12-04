
import { ListSection, TableButton } from "./style";
import update from '../../assets/img/update-black.png';
import history from '../../assets/img/history--black.png'
import { useDispatch } from "react-redux";
import { showHistory, updateStatus } from "../../store/guidesSlice";
import { useAppSelector } from "../../hooks";

const GuidesList = () => {
  const dispatch = useDispatch();
  const guides = useAppSelector((state) => state.guides.guides);

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
                    <i onClick={() => dispatch(updateStatus(g.guideNumber))}>
                      <img src={update} />
                    </i>
                </TableButton>
              </td>
              <td id="columnHist">
                <TableButton>
                  <i onClick={() => dispatch(showHistory(g.guideNumber))}>
                    <img src={history} />
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

