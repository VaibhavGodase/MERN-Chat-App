import React from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import { useSelector } from "react-redux";
import useGetRealTimeMessage from "../hooks/useGetRealTimeMessage";

const Messages = () => {
    useGetMessages();
    useGetRealTimeMessage();

    const { messages } = useSelector(store => store.message);
    if (!messages) return
    return (
        <div className="px-4 flex-1 overflow-auto">
            {
                messages?.map((message) => {
                    return (
                        <Message key={message._id} message={message} />
                    )
                })
            }

            {/* <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message /> */}
        </div>
    )
};

export default Messages;
