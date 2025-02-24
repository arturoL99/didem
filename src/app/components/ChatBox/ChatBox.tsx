"use client";
import { Dispatch, FC, SetStateAction, useState } from "react";
import Image from "next/image";
import illustration1 from "../../images/illustration 1@2x.png";
import illustration2 from "../../images/illustration 2@2x.png";
import Link from "next/link";

type Props = {
    started: boolean;
    setStarted: Dispatch<SetStateAction<boolean>>;
};

type Message = {
    isQuery: boolean;
    message: string;
};

const ChatBox: FC<Props> = ({ started, setStarted }) => {
    const [message, setMessage] = useState<string>("");
    const [chat, setChat] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);

    // const fetchData = async () => {
    //     const queryMessage = message;
    //     setStarted(true);
    //     addMessage(true, message);
    //     setMessage("... sta scrivendo ...");
    //     try {
    //         const response = await fetch("/api/query", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ query: queryMessage }),
    //         });

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }


    //         const data = await response.json();
    //         setIsTyping(false);
    //         setMessage("");
    //         console.log("Response from API:", data);
    //         addMessage(false, data.answer);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };

    const queryAll = async () => {
        const queryMessage = message;
        setStarted(true);
        addMessage(true, message);
        setMessage("... sta scrivendo ...");
        try {
            const response = await fetch("https://rag-libri-2.onrender.com/query-all", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify({ query: queryMessage }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            setIsTyping(false);
            setMessage("");
            addMessage(false, data.answer);
            console.log("API Response:", data);
            return data;
        } catch (error) {
            console.error("Error querying API:", error);
            return null;
        }
    };

    const handleSend = () => {
        if (message.trim() !== "") {
            setIsTyping(true);
            console.log(message)
            // fetchData();
            queryAll();
        }
    };

    const addMessage = (isQuery: boolean, message: string) => {
        setChat(prevChat => [...prevChat, { isQuery: isQuery, message: message }]);
    };

    return (
        <section className={started ? "chatContainer expanded" : "chatContainer"}>
            <h2 className="title">Testalo con i poemi greci antichi!</h2>
            <div className="chat">
                {
                    chat.map((message, i) => {
                        return (
                            <div className={message.isQuery ? "chat_message_container query" : "chat_message_container"} key={i}>
                                <span className={message.isQuery ? "chat_message query" : "chat_message"}>
                                    {message.message}
                                </span>
                            </div>
                        );
                    })
                }
            </div>
            <div className="inputWrapper">
                <input
                    type="text"
                    placeholder="Fammi una domanda!"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="input"
                />
                <button onClick={handleSend} className="sendButton">

                </button>
            </div>



        </section>
    );
};

export default ChatBox;
