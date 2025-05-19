import React from "react";
import styled from "styled-components";

const FooterComponent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const FooterTop = styled.div`
  border-bottom: 1px solid #dadce0;
  height: 51px;
`;

const FooterTopText = styled.p`
  font-size: 15px;
  padding-left: 30px;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  height: 48px;
`;

const FooterBottomText = styled.p`
  font-size: 14px;
`;

const FooterBottomLeft = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-around;
  padding-left: 20px;
`;

const FooterBottomRight = styled.div`
  display: flex;
  width: 258px;
  justify-content: space-around;
  padding-right: 20px;
`;

const Footer = () => {
  return (
    <FooterComponent>
      <FooterTop>
        <FooterTopText>대한민국</FooterTopText>
      </FooterTop>
      <FooterBottom>
        <FooterBottomLeft>
          <FooterBottomText>광고</FooterBottomText>
          <FooterBottomText>비즈니스</FooterBottomText>
          <FooterBottomText>검색의 원리</FooterBottomText>
        </FooterBottomLeft>
        <FooterBottomRight>
          <FooterBottomText>개인정보처리방침</FooterBottomText>
          <FooterBottomText>약관</FooterBottomText>
          <FooterBottomText>설정</FooterBottomText>
        </FooterBottomRight>
      </FooterBottom>
    </FooterComponent>
  );
};

export default Footer;
