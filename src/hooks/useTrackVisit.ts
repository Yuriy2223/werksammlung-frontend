import { useEffect } from "react";
import axios from "axios";

export const useTrackVisit = () => {
  useEffect(() => {
    const start = Date.now();

    const sendData = async () => {
      const durationInSeconds = Math.floor((Date.now() - start) / 1000);

      try {
        await axios.post("/api/stats", { duration: durationInSeconds });
      } catch (err) {
        console.error("Помилка відправки статистики", err);
      }
    };

    window.addEventListener("beforeunload", sendData);
    return () => {
      sendData();
      window.removeEventListener("beforeunload", sendData);
    };
  }, []);
};
