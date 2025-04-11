import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../pages/firebaseConfig";

export default function Ferramentas() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      try {
        const q = query(collection(db, "Ferramentas"), where("type", "==", "Ferramentas"));
        const querySnapshot = await getDocs(q);
        const fetchedItems = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(fetchedItems);
      } catch (error) {
        console.error("Erro ao buscar itens do Firebase:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  if (loading) {
    return <p className="text-white">Carregando itens...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 gap-4">
          {items.map(item => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700/90 text-white rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center shadow-lg border border-gray-700/50 overflow-hidden aspect-[21/9]"
              style={{ height: "calc(250% - 0.5rem)", width: "calc(80% - 0.5rem)", margin: "0" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 transition-opacity duration-300 hover:opacity-40"
                style={{
                  backgroundImage: `url(${item.image || ''})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transform: "scale(0.6) translateY(-15%)",
                }}
              />
              <span className="text-lg font-semibold absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
                {item.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
