import { useEffect, useState } from "react";
import styled from "styled-components";
// import { Instance } from "../../services/Api";
import { privateInstance } from "../../services/Api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parseISO, isSameDay, isValid } from "date-fns";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectLoggedIn } from "../../redux/auth/selectors";
// import { useAppDispatch } from "../../redux/store";
// import { refreshToken } from "../../redux/auth/operations";

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  font-family: "Segoe UI", sans-serif;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;
const ChartGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  margin-top: 2rem;
`;
const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
`;
const ChartTitle = styled.h3`
  margin-bottom: 1rem;
`;
const Filters = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const DateLabel = styled.div`
  font-weight: bold;
`;
const InfoList = styled.ul`
  padding-left: 1rem;
`;

type Visit = {
  _id: string;
  country: string;
  timeSpent: number;
  date: string;
};

type Stats = {
  totalVisits: number;
  totalTime: number;
  countries: Record<string, number>;
  visits: Visit[];
};

const COLORS = [
  "#00b894",
  "#0984e3",
  "#e17055",
  "#6c5ce7",
  "#fdcb6e",
  "#fab1a0",
];

const UserPage = () => {
  // const dispatch = useAppDispatch();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const isLoggedIn = useSelector(selectLoggedIn);

  // useEffect(() => {
  //   dispatch(refreshToken());
  // }, [dispatch]);

  useEffect(() => {
    if (!isLoggedIn) return;

    privateInstance
      .get("/api/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error("Помилка завантаження статистики", err))
      .finally(() => setLoading(false));
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  if (loading) return <Container>Завантаження...</Container>;
  if (!stats) return <Container>Статистика недоступна...</Container>;

  const safeParseISO = (dateStr?: string | null) => {
    if (!dateStr) return null;
    const parsed = parseISO(dateStr);
    return isValid(parsed) ? parsed : null;
  };

  const filterVisits = stats.visits.filter((visit) => {
    const created = safeParseISO(visit.date);
    if (!created) return false;
    if (startDate && created < startDate) return false;
    if (endDate && created > endDate) return false;
    return true;
  });

  const visitsByDateMap = filterVisits.reduce(
    (acc: Record<string, number>, visit) => {
      const date = format(parseISO(visit.date), "yyyy-MM-dd");
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    },
    {}
  );

  const visitsByDateData = Object.entries(visitsByDateMap).map(
    ([date, count]) => ({ date, count })
  );

  const avgDuration = filterVisits.length
    ? Math.round(
        filterVisits.reduce((acc, v) => acc + v.timeSpent, 0) /
          filterVisits.length
      )
    : 0;

  const durationData = filterVisits.map((v, i) => ({
    name: `#${i + 1}`,
    duration: v.timeSpent,
  }));

  const countriesMap: Record<string, number> = {};
  filterVisits.forEach((v) => {
    countriesMap[v.country] = (countriesMap[v.country] || 0) + 1;
  });
  const countriesData = Object.entries(countriesMap).map(([name, value]) => ({
    name,
    value,
  }));

  const selectedDayVisits = selectedDay
    ? filterVisits.filter((v) => isSameDay(parseISO(v.date), selectedDay))
    : [];

  const formatSec = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return m ? `${m} хв ${sec} с` : `${sec} с`;
  };

  return (
    <Container>
      <Title>📊 Дашборд користувача</Title>

      <Filters>
        <DateLabel>Фільтр з:</DateLabel>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Початкова дата"
          isClearable
        />
        <DateLabel>по:</DateLabel>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          placeholderText="Кінцева дата"
          isClearable
        />
        <DateLabel>| Середній час візиту:</DateLabel> {formatSec(avgDuration)}
      </Filters>

      <ChartGrid>
        <Card>
          <ChartTitle>📅 Календар з відвідуваннями</ChartTitle>
          <DatePicker
            selected={selectedDay}
            onChange={(date) => setSelectedDay(date)}
            placeholderText="Оберіть дату"
            inline
          />
          {selectedDay && (
            <>
              <h4>📆 Візити на {format(selectedDay, "dd.MM.yyyy")}</h4>
              {selectedDayVisits.length === 0 ? (
                <p>Немає даних</p>
              ) : (
                <InfoList>
                  {selectedDayVisits.map((v) => (
                    <li key={v._id}>
                      🕒 {formatSec(v.timeSpent)} | 🌍 {v.country}
                    </li>
                  ))}
                </InfoList>
              )}
            </>
          )}
        </Card>

        <Card>
          <ChartTitle>📈 Відвідування по днях</ChartTitle>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={visitsByDateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#0984e3" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <ChartTitle>⏱️ Тривалість візитів</ChartTitle>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={durationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" hide />
              <YAxis />
              <Tooltip formatter={(v: number) => formatSec(v)} />
              <Bar dataKey="duration" fill="#00b894" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <ChartTitle>🌍 Країни</ChartTitle>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={countriesData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {countriesData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </ChartGrid>
    </Container>
  );
};

export default UserPage;
