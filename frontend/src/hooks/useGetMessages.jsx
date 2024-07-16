import React, { useEffect } from 'react'
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setMessages } from '../redux/messageSlice';
import { BASE_URL } from '..';

const useGetMessages = () => {
    const { selectedUser } = useSelector(store => store.user);
    // console.log(selectedUser);

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                axios.defaults.withCredentials = true;

                const res = await axios.get(`http://localhost:1111/api/v1/message/${selectedUser?._id}`);
                // console.log("this is a getmessage", res);

                dispatch(setMessages(res.data))
            } catch (error) {
                console.log(error);
            }
        }
        fetchMessages();
    }, [selectedUser]);



}

export default useGetMessages