import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/resultData";
import KakaoShareButton from "../components/KakaoShareButton";

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

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`

const Result = () => {
  const [resultData, setResultData] = useState({});
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const mbti = searchParams.get("mbti");

  const handleClickButton = () => {
    navigate("/");
  };

  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>예비집사판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인은?</Title>
        <Logo>
          <img src={resultData.image} alt={resultData.name} />
        </Logo>
        <Desc>
          예비집사님과 찰떡궁합인 고양이는 {resultData.best}형 {resultData.name}
        </Desc>
<ButtonGroup>
          <Button onClick={handleClickButton}>테스트 다시 시작하기</Button>
          <KakaoShareButton /> 
</ButtonGroup>
      </Contents>
    </Wrapper>
  );
};

export default Result;
