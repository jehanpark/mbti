import React, { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import { QuestionData } from "../assets/questiondata";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const Wrapper = styled.div`
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #000;
`;

const Title = styled.div`
  font-size: 16px;
  width: 200px;
  text-align: center;
  margin-bottom: 10px;
  padding: 8px 16px;
  background-color: crimson;
  border-radius: 8px;
`;

const ButonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & > button {
    width: 400px;
    height: 200px;
    font-size: 16px;
  }
`;

const Question = () => {
  const navigate = useNavigate();

  const [questionNo, setquestionNo] = useState(0);
  const [totalScore, setTottalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  const handleClickButton = (no, type) => {
    // 총점을 업데이트하는 부분
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    
    setTottalScore(newScore);
  
    if (QuestionData.length !== questionNo + 1) {
      setquestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      
      navigate({
        pathname: "/result",
        search: `?${useSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };
  
  return (
    <div>
      <ProgressBar
        striped="danger"
        now={(questionNo / QuestionData.length) * 100}
      />
      <Wrapper>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButonGroup>
          <Button
            onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button
            onClick={() => handleClickButton(0, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answerb}
          </Button>
        </ButonGroup>
      </Wrapper>
    </div>
  );
};

export default Question;
