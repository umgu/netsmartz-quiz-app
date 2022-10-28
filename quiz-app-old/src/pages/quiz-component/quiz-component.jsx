import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegistrationForm from "../../components/registration/registration-form";
import Quiz from "../../components/quiz/quiz";
import { saveUserDetails, loadData } from '../../redux/actions';
import { URL } from "../../constants/constant";
import axios from "axios";
import Message from '../../components/message/message';

const QuizComponent = () => {
    const quizState = useSelector((state) => state.quiz);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(saveUserDetails(undefined));
        axios.get(`${URL}/admin/load-questions`).then((response) => {
            dispatch(loadData(response.data));
        });
    }, [])
    return (
        <>
            {quizState.questionList.length?quizState.detail ? <Quiz /> : <RegistrationForm />: <Message msg="No Quiz available!!!" />}
        </>
    )
}

export default QuizComponent;
