import React, { useState, useEffect } from "react";

const MotivationMessage = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMotivationMessage = async () => {
      try {
        const res = await fetch("/api/motivation");
        const data = await res.json();

        if (res.ok) {
          setMessage(data.message);
        } else {
          setMessage("Bir sorun oluştu, lütfen tekrar deneyin.");
        }
      } catch (error) {
        setMessage("Mesaj getirilemedi, internet bağlantınızı kontrol edin.");
      } finally {
        setLoading(false);
      }
    };

    fetchMotivationMessage();
  }, []);

  if (loading) return <p>Yükleniyor...</p>;

  return (
    <div className="p-6 mb-10 bg-gray-800 text-white rounded-lg">
      <h3 className="text-center text-xl font-bold text-green-400 mb-2">Motivasyon Mesajı</h3>
      <p className="text-center">{message}</p>
    </div>
  );
};

export default MotivationMessage;
