import { useState } from "react";

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

export function useGuides() {
  const [guides, setGuides] = useState<Guide[]>([]);

  const addGuide = (newGuide: Guide) => {
    setGuides((prev) => [...prev, newGuide]);
  };

  const updateStatus = (guideNumber: string) => {
    setGuides((prev) =>
      prev.map((guide) => {
        if (guide.guideNumber !== guideNumber) return guide;

        let newStatus = guide.status;

        if (newStatus === "Pendiente") {
          newStatus = "En transito";
          alert('Guía ' + guide.guideNumber + ' ' + newStatus)
        }
        else if (newStatus === "En transito")
          { 
            newStatus = "Entregada";
            alert('Guía ' + guide.guideNumber + ' ' + newStatus)
        }
        else {
          alert("Esta guía ya fue entregada.");
          return guide;
        }

        return {
          ...guide,
          status: newStatus,
          history: [
            ...guide.history,
            { status: newStatus, date: new Date().toLocaleString() },
          ],
          formattedDate: new Date().toLocaleString(),
        };
      })
    );
  };

  const getStatistics = () => {
    const total = guides.length;
    const inTransit = guides.filter((g) => g.status === "En transito").length;
    const delivered = guides.filter((g) => g.status === "Entregado").length;

    return { total, inTransit, delivered };
  };

  const showHistory = (guideNumber: string) => {
    const guide = guides.find((g) => g.guideNumber === guideNumber);
    if (!guide) return;

    let historyMsg = `Historial de cambios de la guía #${guideNumber}:\n`;

    guide.history.forEach((h) => {
      historyMsg += `${h.date} → ${h.status}\n`;
    });

    alert(historyMsg);
  };

  return {
    guides,
    addGuide,
    updateStatus,
    getStatistics,
    showHistory,
  };
}
