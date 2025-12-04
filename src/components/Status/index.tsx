import { StatusSection, StatusStatistics } from "./style";
import recibido from '../../assets/img/received_logo-black.png'
import enCamino from '../../assets/img/inWay-black.png'
import lista from '../../assets/img/list-black.png'
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";



const Status = () => {
  const guides = useSelector((state: RootState) => state.guides.guides);

  const total = guides.length;
  const inTransit = guides.filter(g => g.status === "En transito").length;
  const delivered = guides.filter(g => g.status === "Entregado").length;

  return (
    <StatusSection>
      <h1 className="status__title">Estado general</h1>

      <StatusStatistics>
        <div className="status__statistics--item">
          <div className="status__logo">
            <i><img src={lista} alt="" /></i>
          </div>
          <p>Número total de guias:</p>
          <h5 id="total__guides">{total}</h5>
        </div>

        <div className="status__statistics--item">
          <div className="status__logo">
            <i><img src={enCamino} alt="" /></i>
          </div>
          <p>Guía en transito:</p>
          <h5 id="inTransit__guides">{inTransit}</h5>
        </div>

        <div className="status__statistics--item">
          <div className="status__logo">
            <i><img src={recibido} alt="" /></i>
          </div>
          <p>Guías entregadas:</p>
          <h5 id="delivered__guides">{delivered}</h5>
        </div>
      </StatusStatistics>
    </StatusSection>
  );
};

export default Status;
