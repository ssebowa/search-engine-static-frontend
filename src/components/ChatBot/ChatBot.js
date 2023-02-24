import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Typewriter from "typewriter-effect";
import { BASEURL_Chat_Bot } from "../../connection/BaseUrl";

function ChatBot() {
    const initialData = {
        message:
            "👋 Hello! My name is Ssebowa Chat, I’m an AI that can answer general questions, explain things, suggest ideas, translate, summarize text, compose emails, and write code for you. I’m powered by Ssebowa Artificial Neural Networks and Natural Language Processing, allowing you to have human-like conversations with me. I am constantly learning from huge amounts of information on the internet, which means I sometimes may get some answers wrong. My AI is always improving and I will often share sources for my answers. Some example queries you can try asking me:",
        type: "r",
        first: true,
    };
    const [messages, SetMessages] = useState([initialData]);
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
        console.log(messages);
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
    return (
        <div className="ChatBotContainer">
            <div className="ChatBotMain">
                <div className="ChatBotNav">
                    <h6 className="fw-bold text-success">SSEBOWA CHAT</h6>
                    {Active ? (
                        <span className="text-primary fw-bold" style={{ fontSize: 13 }}>
                            • ACTIVE
                        </span>
                    ) : (
                        <span className="text-danger fw-bold" style={{ fontSize: 13 }}>
                            • INACTIVE
                        </span>
                    )}
                </div>
                <div className="ChatBotResponceDiv">
                    {MessageLoading ? <MessageRecievdedLoading /> : <></>}
                    {messages.map((e, i) => {
                        if (e.type === "q") {
                            return <MessageSent message={e.message} key={i} />;
                        } else {
                            return <MessageRecievded message={e.message} first={e.first} key={i} />;
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
    );
}

export default ChatBot;

export const MessageSent = ({ message }) => {
    return (
        <div className="MessageSentMain">
            <div className="MessageSentInner">{message}</div>
        </div>
    );
};

export const MessageRecievded = ({ message, splition, first }) => {
    const [firstt, setfirstt] = useState(``);
    let zain;
    zain = splition.map((msg) => msg);
    // var i = 0;

    const [rendered, SetRendered] = useState(true);
    if (rendered) {
        return (
            <div className="MessageRecievdedMain">
                <div className="MessageRecievdedInner">
                    {zain.map((t, index) => (
                        <>
                            <div key={index}>{t}</div>
                            {/* <SsebowaQuick quicknotes={t} key={index}/> */}
                        </>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className="MessageRecievdedMain">
                <div className="MessageRecievdedInner">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(message)
                                .callFunction(() => {
                                    SetRendered(true);
                                })
                                .start();
                        }}
                        options={{
                            delay: first ? 0 : 1,
                        }}
                    />
                </div>
            </div>
        );
    }
};
export const MessageRecievdedLoading = () => {
    return (
        <div className="MessageRecievdedMain">
            <div className="MessageRecievdedInner">
                <ThreeDots height="20" width="20" radius="9" color="#fff" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
            </div>
        </div>
    );
};

MessageRecievded.propTypes = {
    message: PropTypes.string,
    first: PropTypes.bool,
};

MessageSent.propTypes = {
    message: PropTypes.string,
};
