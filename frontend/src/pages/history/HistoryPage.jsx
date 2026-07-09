import { useEffect, useState } from "react";

import HistoryCard from "../../components/history/HistoryCard";
import EmptyHistory from "../../components/history/EmptyHistory";

import { getHistory } from "../../services/historyService";

export default function HistoryPage() {

  const [history, setHistory] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchHistory = async () => {

      try {

        const data = await getHistory();

        setHistory(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    fetchHistory();

  }, []);

  if (loading) {

    return (
      <div className="text-white">

        Loading...

      </div>
    );

  }

  if (!history.length) {

    return <EmptyHistory />;

  }

  return (
    <div className="space-y-5">

      {history.map((item) => (

        <HistoryCard
          key={item.id}
          item={item}
        />

      ))}

    </div>
  );

}