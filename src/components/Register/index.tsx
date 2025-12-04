
import { useDispatch, useSelector } from "react-redux";
import { addGuide } from "../../store/guidesSlice";
import type { RootState } from "../../store/store";
import { RegisterForm, RegisterSection } from "./style";

const Register = () => {
  const dispatch = useDispatch();
  const guides = useSelector((state: RootState) => state.guides.guides);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const guideNumber = form.guideNumber.value.trim();
    const origen = form.origen.value.trim();
    const destination = form.destination.value.trim();
    const addresses = form.addresses.value.trim();
    const status = "Pendiente";

    if (Number(guideNumber) <= 0) {
      alert("Número de guía inválido.");
      return;
    }

    const exists = guides.some((g) => g.guideNumber === guideNumber);
    if (exists) {
      alert("El número de guía ya existe.");
      return;
    }

    const date = new Date().toLocaleString();

    const newGuide = {
      guideNumber,
      origen,
      destination,
      addresses,
      status,
      formattedDate: date,
      history: [{ status, date }],
    };

    dispatch(addGuide(newGuide));
    alert("Guía registrada.");
    form.reset();
  };

  return (
    <RegisterSection id="register">
      <h1 className="register__title">Registrar guía:</h1>

      <div className="register__form">
        <RegisterForm id="form-guides" onSubmit={handleSubmit}>
          <label htmlFor="guideNumber">Número de guía:</label>
          <input type="number" name="guideNumber" id="guideNumber" required />

          <label htmlFor="origen">Origen:</label>
          <input type="text" name="origen" id="origen" required />

          <label htmlFor="destination">Destino:</label>
          <input type="text" name="destination" id="destination" required />

          <label htmlFor="addresses">Destinatario:</label>
          <input type="text" name="addresses" id="addresses" />

          <label htmlFor="status">Estado inicial:</label>
          <select name="status" id="status" disabled>
            <option value="Pendiente">Pendiente</option>
            <option value="En transito">En tránsito</option>
            <option value="Entregado">Entregado</option>
          </select>

          <input type="submit" className="button__form" value="Registrar" />
        </RegisterForm>
      </div>
    </RegisterSection>
  );
};

export default Register;


 