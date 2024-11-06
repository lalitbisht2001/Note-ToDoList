import { useEffect, useState } from 'react';
import { collection, getDocs, query, where, getFirestore } from 'firebase/firestore';
import { app3 } from '../../firebase';
import style from "./List.module.css";

const db = getFirestore(app3);

const List = ({ email }) => {
  const [isData, setIsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const notesRef = collection(db, "Note-Data");
        const notesQuery = query(notesRef, where("email", "==", email));
        const querySnapshot = await getDocs(notesQuery);

        const notes = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setIsData(notes);
      } catch (error) {
        console.error("Error fetching notes: ", error);
      }
    };

    if (email) {
      fetchData();
    }
  }, [email]);

  const getBackgroundColor = (index) => {
    const colors = ["#FFB6C1", "#ADD8E6", "#98FB98", "#FFD700", "#FF6347"]; // Example color array
    return colors[index % colors.length];
  }
  return (
    <div className={style.main}>
      <div className={style.heading}>Notes</div>
      <div className={style.note_box}>
        {isData.length > 0 ? (
          isData.map(({ id, time, date, title, content } , index) => (
            content !== "" && (
              <div key={id} className={style.box} style={{ backgroundColor: getBackgroundColor(index) }}>
                <p className={style.title}>
                  <strong>{title}</strong>
                </p>
                <div className={style.content}>
                  {content.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
                <div className={style.date_time}>
                  <p className={style.time}>{time}</p>
                  <p className={style.date}>{date}</p>
                </div>
              </div>
            )
          ))
        ) : (
          <p>No notes available.</p>
        )}
      </div>
    </div>
  );
};

export default List;
