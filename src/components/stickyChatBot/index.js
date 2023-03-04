import { faMessage, faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { BASEURL_Chat_Bot } from "../../connection/BaseUrl";
import { MessageRecievded, MessageRecievdedLoading, MessageSent } from "../ChatBot/ChatBot";
import "./stickyFooter.css";

const StickyChatBot = () => {
    const [openChatBot, setOPenChatBot] = useState(false);
    const initialData = {
        message:
            "👋 Hello! My name is Ssebowa Chat, I’m an AI that can answer general questions, explain things, suggest ideas, translate, summarize text, compose emails, and write code for you. I’m powered by Ssebowa Artificial Neural Networks and Natural Language Processing, allowing you to have human-like conversations with me. I am constantly learning from huge amounts of information on the internet, which means I sometimes may get some answers wrong. My AI is always improving and I will often share sources for my answers. Some example queries you can try asking me:",
        type: "r",
        first: true,
    };
    const [messages, SetMessages] = useState([]);
    const [splitMessages, setSplitedMessage] = useState();
    const [MessageLoading, SetMessageLoading] = useState(false);
    const [Active, SetActive] = useState(true);
    const [inputVal, SetinputVal] = useState("");

    useEffect(() => {
        fetch(BASEURL_Chat_Bot + "Checking")
            .then((r) => r.json())
            .then((r) => {
                SetActive(true);
            })
            .catch((e) => {
                console.log(e);
                SetActive(false);
            });
    }, []);

    const pushMessageAndSet = (m) => {
        SetMessages((old_messages) => [m, ...old_messages]);
        // console.log(messages);
        messages.map((msg) => {
            // console.log(msg.message.split("\\"));
            // setSplitedMessage(msg.message.split("\\"));
            // console.log(splitMessages);
        });
        // try {
        //     localStorage.setItem("ssebowa-chat-messages", messages);
        //     return true;
        // } catch (e) {
        //     console.log(e);
        //     return e;
        // }
    };
    const onChangeInput = (e) => {
        SetinputVal(e.target.value);
    };
    const FetchMessage = (inputVal) => {
        SetMessageLoading(true);
        var url = BASEURL_Chat_Bot + inputVal;
        fetch(url, { method: "GET" })
            .then((r) => r.json())
            .then((r) => {
                var s = {
                    message: r?.generated_text,
                    type: "r",
                    first: false,
                };
                let zain;
                zain = s.message.split("\\");
                setSplitedMessage(zain);
                // zain= zain.map((z)=>{

                //     setSplitedMessage(z);
                // });

                pushMessageAndSet(s);
                SetMessageLoading(false);
            })
            .catch((e) => {
                console.log(e);
                var b = {
                    message: "Error While Reaching out to the servers TRY AGAIN LATER",
                    type: "r",
                    first: false,
                };
                pushMessageAndSet(b);
                SetMessageLoading(false);
            });
    };
    const SubmitMessageRequest = (e) => {
        e.preventDefault();
        if (inputVal.replace(/\s/g, "").length) {
            var v = { message: inputVal, type: "q", first: false };
            pushMessageAndSet(v);
            SetinputVal("");
            FetchMessage(v?.message);
        }
    };

    const handleclose = () => {
        if (openChatBot)
            window.addEventListener("click", function (e) {
                if (document.getElementById("chat-bot") && document.getElementById("chat-bot")?.contains(e.target)) {
                    // Clicked in box
                } else {
                    setOPenChatBot(false);
                }
            });
    };

    // useEffect(() => {
    //     if (openChatBot) handleclose();
    // }, []);

    return (
        <div className="chat-container">
            {!openChatBot ? (
                <Button onClick={() => setOPenChatBot(true)} className="border border-0">
                    <FontAwesomeIcon
                        icon={faMessage}
                        size="xl"
                        style={{
                            color: "#181c51",
                        }}
                    />
                </Button>
            ) : (
                <div className="stickyChatBotContainer">
                    <div className="ChatBotMain">
                        <div className="ChatBotNav">
                            <h6 className="fw-bold text-success">SSEBOWA CHAT</h6>
                            <div className="d-flex align-items-center">
                                {Active ? (
                                    <span className="text-primary fw-bold" style={{ fontSize: 13 }}>
                                        • ACTIVE
                                    </span>
                                ) : (
                                    <span className="text-danger fw-bold" style={{ fontSize: 13 }}>
                                        • INACTIVE
                                    </span>
                                )}
                                <button onClick={() => setOPenChatBot(false)} className="ms-5">
                                    <FontAwesomeIcon
                                        icon={faXmark}
                                        className="pt-1 "
                                        size="lg"
                                        style={{
                                            color: "#181c51",
                                        }}
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="ChatBotResponceDiv">
                            {MessageLoading ? <MessageRecievdedLoading /> : <></>}
                            {messages.map((e, i) => {
                                if (e.type === "q" || !e.type) {
                                    return <MessageSent message={e.message} key={i} />;
                                } else {
                                    return <MessageRecievded message={e.message} splition={splitMessages} first={e.first} key={i} />;
                                }
                            })}
                        </div>
                        <div className="ChatBotFormDiv">
                            <form className="ChatBotForm" method="get" onSubmit={(e) => SubmitMessageRequest(e)}>
                                <input
                                    placeholder="Try asking anything..."
                                    className="ChatBotInput"
                                    type={"search"}
                                    value={inputVal}
                                    onChange={(e) => onChangeInput(e)}
                                />
                                <button type="submit" className="ChatBotButton">
                                    <FontAwesomeIcon
                                        icon={faPaperPlane}
                                        className="pt-1 "
                                        size="lg"
                                        style={{
                                            color: "#181c51",
                                        }}
                                    />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StickyChatBot;
