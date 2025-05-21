import { useEffect } from "react";
import { publicInstance } from "../services/Api";

export const useTrackVisit = () => {
  useEffect(() => {
    const start = Date.now();

    const handleBeforeUnload = () => {
      const durationInSeconds = Math.floor((Date.now() - start) / 1000);
      const data = { timeSpent: durationInSeconds };

      publicInstance.post("/api/stats", data).catch((err) => {
        console.error("Помилка при відправці статистики при unload", err);
      });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
};
