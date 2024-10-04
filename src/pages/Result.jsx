import React from 'react'
import styled from 'styled-components';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { ResultData } from '../assets/resultdata';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  align-items: center;
  color: #fff;
  background: #000;
`;

const Header = styled.div`
  font-size: 40px;
`;
const Desc = styled.div`
  margin: 10px;
  font-size: 20px;
  text-align: center;
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  margin: 20px 0 10px;
`;

const Logo = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 4px solid #fff;
  }
`;

const Result = () => {
  const [resultData, setResultData ]= useState({})
  const [searchParams] = useSearchParams()
  const mbti = searchParams.get("mbti")
  const handleCilckButton = ()=>{
    navigate("/")
  }
  useEffect(()=>{
    const result = ResultData.find((s)=> s.best === mbti)
    setResultData(result)
  },[mbti])
  return (
    <Wrapper>
      <Header>예비집사판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인은?</Title>
        <Logo>
          <img src={resultData.image} />
        </Logo>
        <Desc>예비집사님과 찰떡궁합인 고양이는{resultData.best}형 {resultData.name}</Desc>
        <Button onClick={handleCilckButton}>테스트 다시 시작하기</Button>
      </Contents>
    </Wrapper>
  )
}

export default Result
