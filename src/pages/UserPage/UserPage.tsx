// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import { publicInstance } from "../../services/Api";

// const UserPageContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;

// type Visit = {
//   _id: string;
//   country: string;
//   duration: number;
//   createdAt: string;
// };

// type Stats = {
//   totalVisits: number;
//   totalTime: number;
//   countries: Record<string, number>;
//   visits: Visit[];
// };

// const UserPage = () => {
//   const [stats, setStats] = useState<Stats | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     publicInstance
//       .get("/api/stats")
//       .then((res) => {
//         setStats(res.data);
//       })
//       .catch((err) => {
//         console.error("Помилка завантаження статистики", err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <UserPageContainer>Завантаження...</UserPageContainer>;
//   }

//   if (!stats) {
//     return <UserPageContainer>Статистика недоступна</UserPageContainer>;
//   }

//   return (
//     <UserPageContainer>
//       <h1>UserPage</h1>
//       <div>🔢 Всього переглядів: {stats.totalVisits}</div>
//       <div>⏱️ Загальний час: {stats.totalTime} с</div>

//       {stats.countries && typeof stats.countries === "object" && (
//         <>
//           <div>🌍 Країни:</div>
//           <ul>
//             {Object.entries(stats.countries).map(([country, count]) => (
//               <li key={country}>
//                 {country}: {count}
//               </li>
//             ))}
//           </ul>
//         </>
//       )}
//     </UserPageContainer>
//   );
// };

// export default UserPage;

// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import { publicInstance } from "../../services/Api";

// // 🧱 Styled Components
// const Container = styled.div`
//   padding: 2rem;
//   max-width: 800px;
//   margin: 0 auto;
//   font-family: "Segoe UI", sans-serif;
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   text-align: center;
//   margin-bottom: 2rem;
// `;

// const StatsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
//   gap: 1rem;
//   margin-bottom: 2rem;
// `;

// const StatCard = styled.div`
//   background: #f0f4ff;
//   padding: 1.5rem;
//   border-radius: 12px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
//   text-align: center;
//   font-size: 1.1rem;
// `;

// const CountriesList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const CountryItem = styled.li`
//   padding: 0.5rem 0;
//   font-size: 1rem;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// `;

// const Flag = styled.span`
//   font-size: 1.2rem;
// `;

// // 📊 Типи
// type Visit = {
//   _id: string;
//   country: string;
//   duration: number;
//   createdAt: string;
// };

// type Stats = {
//   totalVisits: number;
//   totalTime: number;
//   countries: Record<string, number>;
//   visits: Visit[];
// };

// // 🧠 Компонент
// const UserPage = () => {
//   const [stats, setStats] = useState<Stats | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     publicInstance
//       .get("/api/stats")
//       .then((res) => {
//         setStats(res.data);
//       })
//       .catch((err) => {
//         console.error("Помилка завантаження статистики", err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   const getFlagEmoji = (countryCode: string) =>
//     countryCode
//       .toUpperCase()
//       .replace(/./g, (char) =>
//         String.fromCodePoint(127397 + char.charCodeAt(0))
//       );

//   if (loading) return <Container>⏳ Завантаження...</Container>;
//   if (!stats) return <Container>❌ Статистика недоступна</Container>;

//   return (
//     <Container>
//       <Title>📊 Статистика користувача</Title>

//       <StatsGrid>
//         <StatCard>
//           🔢 <strong>{stats.totalVisits}</strong>
//           <div>Всього переглядів</div>
//         </StatCard>
//         <StatCard>
//           ⏱️ <strong>{stats.totalTime}</strong> с<div>Загальний час</div>
//         </StatCard>
//         <StatCard>
//           🌍 <strong>{Object.keys(stats.countries).length}</strong>
//           <div>Країн</div>
//         </StatCard>
//       </StatsGrid>

//       <h2>🌐 Країни:</h2>
//       <CountriesList>
//         {Object.entries(stats.countries).map(([country, count]) => (
//           <CountryItem key={country}>
//             <Flag>{getFlagEmoji(country)}</Flag>
//             {country.toUpperCase()}: {count}
//           </CountryItem>
//         ))}
//       </CountriesList>
//     </Container>
//   );
// };

// export default UserPage;

// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import { publicInstance } from "../../services/Api";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
// } from "recharts";

// // Стилі
// const Container = styled.div`
//   padding: 2rem;
//   max-width: 1000px;
//   margin: 0 auto;
// `;

// const Title = styled.h1`
//   text-align: center;
//   margin-bottom: 2rem;
// `;

// const ChartSection = styled.div`
//   margin-bottom: 3rem;
// `;

// const ChartTitle = styled.h2`
//   margin-bottom: 1rem;
// `;

// type Visit = {
//   _id: string;
//   country: string;
//   duration: number;
//   createdAt: string;
// };

// type Stats = {
//   totalVisits: number;
//   totalTime: number;
//   countries: Record<string, number>;
//   visits: Visit[];
// };

// // Графічні кольори
// const COLORS = [
//   "#8884d8",
//   "#82ca9d",
//   "#ffc658",
//   "#ff8042",
//   "#0088FE",
//   "#FFBB28",
// ];

// const UserPage = () => {
//   const [stats, setStats] = useState<Stats | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     publicInstance
//       .get("/api/stats")
//       .then((res) => {
//         setStats(res.data);
//       })
//       .catch((err) => {
//         console.error("Помилка завантаження статистики", err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <Container>⏳ Завантаження...</Container>;
//   if (!stats) return <Container>❌ Статистика недоступна</Container>;

//   // 📆 Графік по датах
//   const visitsByDate = stats.visits.reduce(
//     (acc: Record<string, number>, visit) => {
//       const date = new Date(visit.createdAt).toLocaleDateString();
//       acc[date] = (acc[date] || 0) + 1;
//       return acc;
//     },
//     {}
//   );
//   const visitsByDateData = Object.entries(visitsByDate).map(
//     ([date, count]) => ({
//       date,
//       count,
//     })
//   );

//   // 🕒 Гістограма тривалості
//   const durationData = stats.visits.map((v, i) => ({
//     name: `#${i + 1}`,
//     duration: v.duration,
//   }));

//   // 🌍 Діаграма по країнах
//   const countriesData = Object.entries(stats.countries).map(
//     ([country, value]) => ({
//       name: country.toUpperCase(),
//       value,
//     })
//   );

//   return (
//     <Container>
//       <Title>📊 Статистика користувача</Title>

//       {/* 📆 Відвідування по днях */}
//       <ChartSection>
//         <ChartTitle>📈 Відвідування по днях</ChartTitle>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={visitsByDateData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis allowDecimals={false} />
//             <Tooltip />
//             <Line type="monotone" dataKey="count" stroke="#8884d8" />
//           </LineChart>
//         </ResponsiveContainer>
//       </ChartSection>

//       {/* 🕒 Тривалість переглядів */}
//       <ChartSection>
//         <ChartTitle>⏱️ Тривалість візитів (сек)</ChartTitle>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={durationData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" hide />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="duration" fill="#82ca9d" />
//           </BarChart>
//         </ResponsiveContainer>
//       </ChartSection>

//       {/* 🌍 Діаграма по країнах */}
//       <ChartSection>
//         <ChartTitle>🌍 Відвідування по країнах</ChartTitle>
//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie
//               data={countriesData}
//               dataKey="value"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               outerRadius={100}
//               fill="#8884d8"
//               label
//             >
//               {countriesData.map((_, index) => (
//                 <Cell key={index} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       </ChartSection>
//     </Container>
//   );
// };

// export default UserPage;

// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import { publicInstance } from "../../services/Api";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
// } from "recharts";

// // 🎨 СТИЛІ
// const Container = styled.div`
//   padding: 2rem;
//   max-width: 1200px;
//   margin: auto;
//   font-family: "Segoe UI", sans-serif;
//   color: #2c3e50;
// `;

// const Title = styled.h1`
//   text-align: center;
//   font-size: 2.5rem;
//   margin-bottom: 1rem;
// `;

// const Subtitle = styled.p`
//   text-align: center;
//   margin-bottom: 3rem;
//   color: #7f8c8d;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
//   gap: 2rem;
// `;

// const Card = styled.div`
//   background: #fff;
//   border-radius: 16px;
//   padding: 1.5rem;
//   box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
//   transition: transform 0.2s ease;
//   &:hover {
//     transform: translateY(-4px);
//   }
// `;

// const ChartTitle = styled.h3`
//   font-size: 1.2rem;
//   margin-bottom: 1rem;
//   color: #34495e;
// `;

// const Centered = styled.div`
//   text-align: center;
//   font-size: 1.2rem;
// `;

// // 📊 Типи
// type Visit = {
//   _id: string;
//   country: string;
//   duration: number;
//   createdAt: string;
// };

// type Stats = {
//   totalVisits: number;
//   totalTime: number;
//   countries: Record<string, number>;
//   visits: Visit[];
// };

// // 🎨 Кольори
// const COLORS = [
//   "#00b894",
//   "#0984e3",
//   "#e17055",
//   "#6c5ce7",
//   "#fdcb6e",
//   "#fab1a0",
// ];

// // 🚀 Головний компонент
// const UserPage = () => {
//   const [stats, setStats] = useState<Stats | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     publicInstance
//       .get("/api/stats")
//       .then((res) => setStats(res.data))
//       .catch((err) => console.error("Помилка завантаження статистики", err))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <Centered>🔄 Завантаження...</Centered>;
//   if (!stats) return <Centered>⚠️ Статистика недоступна</Centered>;

//   // 🔢 Дані
//   const visitsByDate = stats.visits.reduce(
//     (acc: Record<string, number>, visit) => {
//       const date = new Date(visit.createdAt).toLocaleDateString();
//       acc[date] = (acc[date] || 0) + 1;
//       return acc;
//     },
//     {}
//   );
//   const visitsByDateData = Object.entries(visitsByDate).map(
//     ([date, count]) => ({ date, count })
//   );

//   const durationData = stats.visits.map((v, i) => ({
//     name: `#${i + 1}`,
//     duration: v.duration,
//   }));

//   const countriesData = Object.entries(stats.countries).map(
//     ([country, value]) => ({
//       name: country.toUpperCase(),
//       value,
//     })
//   );

//   const formatSeconds = (sec: number) => {
//     const m = Math.floor(sec / 60);
//     const s = sec % 60;
//     return m > 0 ? `${m} хв ${s} с` : `${s} с`;
//   };

//   return (
//     <Container>
//       <Title>📊 Дашборд користувача</Title>
//       <Subtitle>
//         Переглянь детальну статистику використання вашого застосунку
//       </Subtitle>

//       <Grid>
//         <Card>
//           <ChartTitle>📈 Відвідування по днях</ChartTitle>
//           {visitsByDateData.length > 0 ? (
//             <ResponsiveContainer width="100%" height={240}>
//               <LineChart data={visitsByDateData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis allowDecimals={false} />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="count" stroke="#0984e3" />
//               </LineChart>
//             </ResponsiveContainer>
//           ) : (
//             <Centered>Немає даних</Centered>
//           )}
//         </Card>

//         <Card>
//           <ChartTitle>🕒 Тривалість візитів</ChartTitle>
//           {durationData.length > 0 ? (
//             <ResponsiveContainer width="100%" height={240}>
//               <BarChart data={durationData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" hide />
//                 <YAxis />
//                 <Tooltip formatter={(value: number) => formatSeconds(value)} />
//                 <Bar dataKey="duration" fill="#00b894" />
//               </BarChart>
//             </ResponsiveContainer>
//           ) : (
//             <Centered>Немає даних</Centered>
//           )}
//         </Card>

//         <Card>
//           <ChartTitle>🌍 Відвідування по країнах</ChartTitle>
//           {countriesData.length > 0 ? (
//             <ResponsiveContainer width="100%" height={240}>
//               <PieChart>
//                 <Pie
//                   data={countriesData}
//                   dataKey="value"
//                   nameKey="name"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={80}
//                   label
//                 >
//                   {countriesData.map((_, i) => (
//                     <Cell key={i} fill={COLORS[i % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           ) : (
//             <Centered>Немає даних</Centered>
//           )}
//         </Card>
//       </Grid>
//     </Container>
//   );
// };

// export default UserPage;

// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import { publicInstance } from "../../services/Api";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
// } from "recharts";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { format, parseISO, isSameDay, isValid } from "date-fns";

// // СТИЛІ
// const Container = styled.div`
//   padding: 2rem;
//   max-width: 1200px;
//   margin: auto;
//   font-family: "Segoe UI", sans-serif;
// `;
// const Title = styled.h1`
//   text-align: center;
//   font-size: 2.2rem;
//   margin-bottom: 1rem;
// `;
// const ChartGrid = styled.div`
//   display: grid;
//   gap: 2rem;
//   grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
//   margin-top: 2rem;
// `;
// const Card = styled.div`
//   background: #fff;
//   border-radius: 16px;
//   padding: 1.5rem;
//   box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
// `;
// const ChartTitle = styled.h3`
//   margin-bottom: 1rem;
// `;
// const Filters = styled.div`
//   display: flex;
//   gap: 1rem;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
// `;
// const DateLabel = styled.div`
//   font-weight: bold;
// `;
// const InfoList = styled.ul`
//   padding-left: 1rem;
// `;

// type Visit = {
//   _id: string;
//   country: string;
//   duration: number;
//   createdAt: string;
// };
// type Stats = {
//   totalVisits: number;
//   totalTime: number;
//   countries: Record<string, number>;
//   visits: Visit[];
// };

// const COLORS = [
//   "#00b894",
//   "#0984e3",
//   "#e17055",
//   "#6c5ce7",
//   "#fdcb6e",
//   "#fab1a0",
// ];

// const UserPage = () => {
//   const [stats, setStats] = useState<Stats | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [endDate, setEndDate] = useState<Date | null>(null);
//   const [selectedDay, setSelectedDay] = useState<Date | null>(null);

//   useEffect(() => {
//     publicInstance
//       .get("/api/stats")
//       .then((res) => setStats(res.data))
//       .catch((err) => console.error("Помилка завантаження статистики", err))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <Container>🔄 Завантаження...</Container>;
//   if (!stats) return <Container>❌ Статистика недоступна</Container>;

//   const safeParseISO = (dateStr?: string | null) => {
//     if (!dateStr) return null;
//     const parsed = parseISO(dateStr);
//     return isValid(parsed) ? parsed : null;
//   };

//   const filterVisits = stats.visits.filter((visit) => {
//     const created = safeParseISO(visit.createdAt);
//     if (!created) return false;
//     if (startDate && created < startDate) return false;
//     if (endDate && created > endDate) return false;
//     return true;
//   });

//   const visitsByDateMap = filterVisits.reduce(
//     (acc: Record<string, number>, visit) => {
//       const date = format(parseISO(visit.createdAt), "yyyy-MM-dd");
//       acc[date] = (acc[date] || 0) + 1;
//       return acc;
//     },
//     {}
//   );
//   const visitsByDateData = Object.entries(visitsByDateMap).map(
//     ([date, count]) => ({ date, count })
//   );

//   const avgDuration =
//     filterVisits.length > 0
//       ? Math.round(
//           filterVisits.reduce((acc, v) => acc + v.duration, 0) /
//             filterVisits.length
//         )
//       : 0;

//   const durationData = filterVisits.map((v, i) => ({
//     name: `#${i + 1}`,
//     duration: v.duration,
//   }));

//   const countriesMap: Record<string, number> = {};
//   filterVisits.forEach((v) => {
//     countriesMap[v.country] = (countriesMap[v.country] || 0) + 1;
//   });
//   const countriesData = Object.entries(countriesMap).map(([name, value]) => ({
//     name,
//     value,
//   }));

//   const selectedDayVisits = selectedDay
//     ? filterVisits.filter((v) => isSameDay(parseISO(v.createdAt), selectedDay))
//     : [];

//   const formatSec = (s: number) => {
//     const m = Math.floor(s / 60);
//     const sec = s % 60;
//     return m ? `${m} хв ${sec} с` : `${sec} с`;
//   };

//   return (
//     <Container>
//       <Title>📊 Дашборд користувача</Title>

//       <Filters>
//         <DateLabel>Фільтр з:</DateLabel>
//         <DatePicker
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//           placeholderText="Початкова дата"
//         />
//         <DateLabel>по:</DateLabel>
//         <DatePicker
//           selected={endDate}
//           onChange={(date) => setEndDate(date)}
//           placeholderText="Кінцева дата"
//         />
//         <DateLabel>| Середній час візиту:</DateLabel> {formatSec(avgDuration)}
//       </Filters>

//       <ChartGrid>
//         <Card>
//           <ChartTitle>📅 Календар з відвідуваннями</ChartTitle>
//           <DatePicker
//             selected={selectedDay}
//             onChange={(date) => setSelectedDay(date)}
//             placeholderText="Оберіть дату"
//             inline
//           />
//           {selectedDay && (
//             <>
//               <h4>📆 Візити на {format(selectedDay, "dd.MM.yyyy")}</h4>
//               {selectedDayVisits.length === 0 ? (
//                 <p>Немає даних</p>
//               ) : (
//                 <InfoList>
//                   {selectedDayVisits.map((v) => (
//                     <li key={v._id}>
//                       🕒 {formatSec(v.duration)} | 🌍 {v.country}
//                     </li>
//                   ))}
//                 </InfoList>
//               )}
//             </>
//           )}
//         </Card>

//         <Card>
//           <ChartTitle>📈 Відвідування по днях</ChartTitle>
//           <ResponsiveContainer width="100%" height={240}>
//             <LineChart data={visitsByDateData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis allowDecimals={false} />
//               <Tooltip />
//               <Line type="monotone" dataKey="count" stroke="#0984e3" />
//             </LineChart>
//           </ResponsiveContainer>
//         </Card>

//         <Card>
//           <ChartTitle>⏱️ Тривалість візитів</ChartTitle>
//           <ResponsiveContainer width="100%" height={240}>
//             <BarChart data={durationData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" hide />
//               <YAxis />
//               <Tooltip formatter={(v: number) => formatSec(v)} />
//               <Bar dataKey="duration" fill="#00b894" />
//             </BarChart>
//           </ResponsiveContainer>
//         </Card>

//         <Card>
//           <ChartTitle>🌍 Країни</ChartTitle>
//           <ResponsiveContainer width="100%" height={240}>
//             <PieChart>
//               <Pie
//                 data={countriesData}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={80}
//                 label
//               >
//                 {countriesData.map((_, i) => (
//                   <Cell key={i} fill={COLORS[i % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </Card>
//       </ChartGrid>
//     </Container>
//   );
// };

// export default UserPage;

import { useEffect, useState } from "react";
import styled from "styled-components";
import { publicInstance } from "../../services/Api";
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
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);

  useEffect(() => {
    publicInstance
      .get("/api/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error("Помилка завантаження статистики", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Container>🔄 Завантаження...</Container>;
  if (!stats) return <Container>❌ Статистика недоступна</Container>;

  const safeParseISO = (dateStr?: string | null) => {
    if (!dateStr) return null;
    const parsed = parseISO(dateStr);
    return isValid(parsed) ? parsed : null;
  };

  // Фільтруємо відвідування за датами, якщо вони вказані
  const filterVisits = stats.visits.filter((visit) => {
    const created = safeParseISO(visit.date);
    if (!created) return false;
    if (startDate && created < startDate) return false;
    if (endDate && created > endDate) return false;
    return true;
  });

  // Групуємо по датах для графіка відвідувань по днях
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

  // Середній час відвідування
  const avgDuration = filterVisits.length
    ? Math.round(
        filterVisits.reduce((acc, v) => acc + v.timeSpent, 0) /
          filterVisits.length
      )
    : 0;

  // Дані для графіка тривалості відвідувань
  const durationData = filterVisits.map((v, i) => ({
    name: `#${i + 1}`,
    duration: v.timeSpent,
  }));

  // Дані по країнах (для кругової діаграми)
  const countriesMap: Record<string, number> = {};
  filterVisits.forEach((v) => {
    countriesMap[v.country] = (countriesMap[v.country] || 0) + 1;
  });
  const countriesData = Object.entries(countriesMap).map(([name, value]) => ({
    name,
    value,
  }));

  // Відвідування на обрану дату
  const selectedDayVisits = selectedDay
    ? filterVisits.filter((v) => isSameDay(parseISO(v.date), selectedDay))
    : [];

  // Формат часу у хвилинах та секундах
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
