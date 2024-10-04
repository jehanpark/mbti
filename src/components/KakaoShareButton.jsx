import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

const { Kakao } = window;
const url = "https://reactcatmbti.netlify.app/";
const resultURL = window.location.href;

const sharekakao = () => {
  Kakao.Share.createDefaultButton({
    container: "#kakaotalk-sharing-btn",
    objectType: "feed",
    content: {
      title: "예비집사 판별기 결과",
      description: "예비집사 집이 고양이를 키운다면 가장 잘 맞는 고양이는 엑죠틱입니다",
      imageUrl:
        "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        webUrl: "https://developers.kakao.com",
      },
    },
    buttons: [
      {
        title: "나도 퀘스트 하러가기",
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    ],
  });
};

const KakaoShareButton = () => {

  useEffect(() => {
    Kakao.init("ce9d7522d9dfa6e705057ed1b87f9160");
    console.log(Kakao.isInitialized());
  }, []);

  return <Button onClick={sharekakao}>카카오톡 공유하기</Button>;
};

export default KakaoShareButton;
