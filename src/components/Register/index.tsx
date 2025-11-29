import type { Guide } from "../../hooks/useGuides";
import { RegisterForm, RegisterSection } from "./style";

interface Props {
  addGuide: (guide: Guide) => void;
  guides: Guide[];
}

const Register = ({ addGuide, guides }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const guideNumber = (form.guideNumber.value as string).trim();
    const origen = form.origen.value.trim();
    const destination = form.destination.value.trim();
    const addresses = form.addresses.value.trim();
    const status = "Pendiente";

    if (Number(guideNumber) <= 0) {
      alert("El número de guía es inválido");
      return;
    }

    const exists = guides.some((g) => g.guideNumber === guideNumber);
    if (exists) {
      alert("El número de guía ya existe.");
      return;
    }

    const date = new Date().toLocaleString();

    const newGuide: Guide = {
      guideNumber,
      origen,
      destination,
      addresses,
      status,
      formattedDate: date,
      history: [{ status, date }],
    };

    addGuide(newGuide);
    alert("Registro de guía exitoso.");
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
