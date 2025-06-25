import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [time, setTime] = useState(new Date());

  // Atualiza o relógio a cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Formatação do tempo (2 dígitos)
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  // Dia da semana
  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const dayOfWeek = daysOfWeek[time.getDay()];

  return (
    <>
      <div className="contene">
        <div className="digital">
          <div className="dia">
            <div className="hoje">{dayOfWeek}</div>
          </div>
          <div className="hora">
            <div className="hr">{hours}</div>
            <div className="meio">:</div>
            <div className="min">{minutes}</div>
            <div className="meio">:</div>
            <div className="min">{seconds}</div>
          </div>
        </div>
      </div>
    </>
  );
}
