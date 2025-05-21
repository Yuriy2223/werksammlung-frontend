import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { publicInstance } from "../../services/Api";
import { Container } from "../../shared/Container";

export const UserPageContainer = styled(Container)`
  padding: 2rem;
`;

const Stat = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`;

type Visit = {
  _id: string;
  ip: string;
  country: string;
  duration: number;
  createdAt: string;
};

type Stats = {
  totalVisits: number;
  totalTime: number;
  countries: Record<string, number>;
  visits: Visit[];
};

const UserPage: React.FC = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    publicInstance
      .get("/api/stats")
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.error("Помилка завантаження статистики", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <UserPageContainer>Завантаження...</UserPageContainer>;
  }

  if (!stats) {
    return <UserPageContainer>Статистика недоступна</UserPageContainer>;
  }

  return (
    <UserPageContainer>
      <h1>UserPage</h1>
      <Stat>🔢 Всього переглядів: {stats.totalVisits}</Stat>
      <Stat>⏱️ Загальний час: {stats.totalTime} с</Stat>

      {stats.countries && typeof stats.countries === "object" && (
        <>
          <Stat>🌍 Країни:</Stat>
          <ul>
            {Object.entries(stats.countries).map(([country, count]) => (
              <li key={country}>
                {country}: {count}
              </li>
            ))}
          </ul>
        </>
      )}
    </UserPageContainer>
  );
};

export default UserPage;
