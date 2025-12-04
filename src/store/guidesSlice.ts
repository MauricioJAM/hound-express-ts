import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface HistoryEntry {
  status: string;
  date: string;
}

export interface Guide {
  guideNumber: string;
  origen: string;
  destination: string;
  addresses: string;
  status: string;
  formattedDate: string;
  history: HistoryEntry[];
}

interface GuidesState {
  guides: Guide[];
}

const initialState: GuidesState = {
  guides: [],
};

const GUIDE_STATUS = {
  PENDING: "Pendiente",
  IN_TRANSIT: "En transito",
  DELIVERED: "Entregado",
};

export const guidesSlice = createSlice({
  name: "guides",
  initialState,
  reducers: {
    addGuide: (state, action: PayloadAction<Guide>) => {
      state.guides.push(action.payload);
    },

    updateStatus: (state, action: PayloadAction<string>) => {
      const guide = state.guides.find(
        (g) => g.guideNumber === action.payload
      );

      if (!guide) return;

      let newStatus = guide.status;

      if (newStatus === GUIDE_STATUS.PENDING) {
        newStatus = GUIDE_STATUS.IN_TRANSIT;
        alert(`Guía ${guide.guideNumber} marcada como "En transito".`);
      } else if (newStatus === GUIDE_STATUS.IN_TRANSIT) {
        newStatus = GUIDE_STATUS.DELIVERED;
        alert(`Guia ${guide.guideNumber} marcada como "Entregada".`);
      } else {
        alert("Esta guía ya fue entregada.");
        return;
      }

      const date = new Date().toLocaleString();

      guide.status = newStatus;
      guide.formattedDate = date;
      guide.history.push({ status: newStatus, date });
    },

    showHistory: (state, action: PayloadAction<string>) => {
      const guide = state.guides.find(
        (g) => g.guideNumber === action.payload
      );

      if (!guide) return;

      let msg = `Historial de la guía #${guide.guideNumber}:\n`;

      guide.history.forEach((h) => {
        msg += `${h.date} → ${h.status}\n`;
      });

      alert(msg);
    },
  },
});

export const { addGuide, updateStatus, showHistory } = guidesSlice.actions;
export default guidesSlice.reducer;
