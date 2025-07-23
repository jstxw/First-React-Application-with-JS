import React, { useState } from "react";
import "../css/Forum.css";
import Auth from "../Pages/AuthenticationPage";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
} from "firebase/firestore"; //add documents in collections

import Cookies from "universal-cookie";
import { auth, db } from "../services/firebaseconfig";
import { useEffect } from "react";
import dayjs from "dayjs";
const cookies = new Cookies();

function Forum() {
  const [isAuth, setisAuth] = useState(cookies.get("auth-token")); //bascially, if there is a cookie anywhere,
  //the user is authenticated. If the user is not authenticated, render the authentication component
  const [TypeQuery, setTypeQuery] = useState("");
  const [messages, setMessages] = useState([]);

  const messageRef = collection(db, "Messages"); //reference to the collection in the database called Messages
  const defaultAvatar = "https://ui-avatars.com/api/?name=User&background=23272f&color=fff";
  const user = auth.currentUser;

  if (!isAuth) {
    return (
      <>
        <div>
          <Auth setisAuth={setisAuth} />
        </div>
      </>
    );
  }

  useEffect(() => {
    //useEffect cleanup to prevent memory leaks
    const queryMessages = query(messageRef);
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = []; //create empty array, for each snapshot, push the element to the array
      snapshot.forEach((doc) => {
        //loop through every snapshot (array), grab the doc from each element on the array
        messages.push({ ...doc.data(), id: doc.id }); //grabbing data from the document
      });
      setMessages(messages); //state
    });

    return () => unsuscribe(); //cleanup
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (TypeQuery === "") return; //if the message is empty upon submit
    const user = auth.currentUser;
    await addDoc(messageRef, {
      //4 types of information
      text: TypeQuery,
      createdAt: serverTimestamp(),
      user: user ? user.displayName : "Anonymous",
      photoURL: user && user.photoURL ? user.photoURL : defaultAvatar,
      sentAt: new Date().toISOString(),
    });
    setTypeQuery("");
  };

  return (
    <div className="forum-container">
      <div className="comments-section">
        {messages.length === 0 ? (
          <div className="forum-empty-centered">
            <span className="forum-empty-icon">💬</span>
            <div className="forum-empty-title">No messages yet</div>
            <div className="forum-empty-desc">Start the conversation by sending a message!</div>
          </div>
        ) : (
          messages.map((message) => {
            const isOwn = user && message.user === user.displayName;
            // Format timestamp
            let time = "";
            if (message.createdAt && message.createdAt.seconds) {
              time = dayjs(message.createdAt.seconds * 1000).format("h:mm A");
            } else if (message.sentAt) {
              time = dayjs(message.sentAt).format("h:mm A");
            }
            return (
              <div
                className={`comment-box${isOwn ? ' own-message' : ''}`}
                key={message.id}
                style={{
                  flexDirection: isOwn ? 'row-reverse' : 'row',
                  alignSelf: isOwn ? 'flex-end' : 'flex-start',
                  background: isOwn ? '#2e2e2e' : '#23272f',
                  borderLeft: isOwn ? 'none' : '4px solid #e50914',
                  borderRight: isOwn ? '4px solid #e50914' : 'none',
                  animation: 'fadeIn 0.5s',
                  boxShadow: isOwn ? '0 2px 8px #e5091440' : '0 2px 8px #00000020',
                }}
              >
                <img
                  src={message.photoURL || defaultAvatar}
                  alt={message.user || "User"}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: isOwn ? 0 : 16,
                    marginLeft: isOwn ? 16 : 0,
                    border: isOwn ? "2px solid #e50914" : "2px solid #fff",
                    background: "#23272f",
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column", alignItems: isOwn ? 'flex-end' : 'flex-start' }}>
                  <span style={{ fontWeight: 600, color: isOwn ? "#e50914" : "#e50914", fontSize: 16 }}>
                    {message.user || "Anonymous"}
                  </span>
                  <span style={{ color: "#fff", fontSize: 15, marginTop: 2, textAlign: isOwn ? 'right' : 'left' }}>{message.text}</span>
                  <span style={{ color: '#bbb', fontSize: 12, marginTop: 4, textAlign: isOwn ? 'right' : 'left' }}>{time}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          className="comment-input"
          placeholder="Type your message here..."
          value={TypeQuery}
          onChange={(e) => setTypeQuery(e.target.value)}
        />
        <button type="submit" className="comment-submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Forum;
