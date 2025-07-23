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
  const defaultAvatar =
    "https://ui-avatars.com/api/?name=User&background=23272f&color=fff";
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
      {/* Header */}
      <div className="forum-header">
        <div className="forum-title">
          <h1>Live Chat</h1>
          <span className="online-count">
            {messages.length > 0
              ? `${new Set(messages.map((m) => m.user)).size} participants`
              : "No participants yet"}
          </span>
        </div>
      </div>

      {/* Messages Section */}
      <div className="messages-section">
        {messages.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">💬</div>
            <h3>Welcome to the chat!</h3>
            <p>Start the conversation by sending your first message</p>
          </div>
        ) : (
          <div className="messages-list">
            {messages
              .slice()
              .filter((message) => message.text && message.text.trim() !== "") // Filter out empty messages
              .sort((a, b) => {
                // Get timestamps for comparison
                const timeA = a.createdAt?.seconds
                  ? dayjs(a.createdAt.seconds * 1000)
                  : a.sentAt
                  ? dayjs(a.sentAt)
                  : dayjs(0); // Default to epoch if no timestamp
                const timeB = b.createdAt?.seconds
                  ? dayjs(b.createdAt.seconds * 1000)
                  : b.sentAt
                  ? dayjs(b.sentAt)
                  : dayjs(0); // Default to epoch if no timestamp

                // Sort in ascending order (oldest first)
                return timeA.valueOf() - timeB.valueOf();
              })
              .map((message) => {
                const isOwn = user && message.user === user.displayName;
                // Format timestamp
                let time = "";
                let dateLabel = "";
                if (message.createdAt && message.createdAt.seconds) {
                  const messageDate = dayjs(message.createdAt.seconds * 1000);
                  time = messageDate.format("h:mm A");
                  dateLabel = messageDate.format("MMM D");
                } else if (message.sentAt) {
                  const messageDate = dayjs(message.sentAt);
                  time = messageDate.format("h:mm A");
                  dateLabel = messageDate.format("MMM D");
                }

                return (
                  <div
                    className={`message-wrapper ${
                      isOwn ? "own-message" : "other-message"
                    }`}
                    key={message.id}
                  >
                    {!isOwn && (
                      <div className="message-avatar">
                        <img
                          src={message.photoURL || defaultAvatar}
                          alt={message.user || "User"}
                          className="avatar-img"
                        />
                        <div className="online-indicator"></div>
                      </div>
                    )}

                    <div className="message-content">
                      <div className="message-header">
                        <span className="username">
                          {message.user || "Anonymous"}
                        </span>
                        <span className="timestamp">{time}</span>
                      </div>
                      <div className="message-bubble">
                        <p>{message.text}</p>
                      </div>
                    </div>

                    {isOwn && (
                      <div className="message-avatar own">
                        <img
                          src={message.photoURL || defaultAvatar}
                          alt={message.user || "User"}
                          className="avatar-img"
                        />
                        <div className="online-indicator"></div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="input-section">
        <form onSubmit={handleSubmit} className="message-form">
          <div className="input-wrapper">
            <div className="input-icons-left">
              <button
                type="button"
                className="icon-button"
                title="Attach Image"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21,19V5c0,-1.1 -0.9,-2 -2,-2H5c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2zM8.5,13.5l2.5,3.01L14.5,12l4.5,6H5l3.5,-4.5z" />
                </svg>
              </button>
              <button type="button" className="icon-button" title="Add Emoji">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10s10,-4.48 10,-10S17.52,2 12,2zM12,20c-4.41,0 -8,-3.59 -8,-8s3.59,-8 8,-8s8,3.59 8,8S16.41,20 12,20zM15.5,11C16.33,11 17,10.33 17,9.5S16.33,8 15.5,8S14,8.67 14,9.5S14.67,11 15.5,11zM8.5,11C9.33,11 10,10.33 10,9.5S9.33,8 8.5,8S7,8.67 7,9.5S7.67,11 8.5,11zM12,17.5c2.33,0 4.31,-1.46 5.11,-3.5H6.89C7.69,16.04 9.67,17.5 12,17.5z" />
                </svg>
              </button>
            </div>
            <input
              className="message-input"
              placeholder="Type your message..."
              value={TypeQuery}
              onChange={(e) => setTypeQuery(e.target.value)}
              maxLength={500}
            />
            <button
              type="submit"
              className={`send-button ${TypeQuery.trim() ? "active" : ""}`}
              disabled={!TypeQuery.trim()}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
          <div className="input-footer">
            <span className="char-count">{TypeQuery.length}/500</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forum;
