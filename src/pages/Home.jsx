import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import styled from "styled-components";

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

const Home = () => {
  const navigate = useNavigate()
  const handleCilckButton = ()=>{
    navigate("/question")
  }
  return (
    <Wrapper>
      <Header>예비집사판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인은?</Title>
        <Logo>
          <img src="/cat/ggompang.jpeg" />
        </Logo>
        <Desc>나랑 잘 맞는 MBTI 찾기</Desc>
        <Button onClick={handleCilckButton}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
