import React from "react";
import styled from "styled-components";
import { CgMenuGridO } from "react-icons/cg";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 5px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 10px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 7px;
`;

const HeaderLeftText = styled.p`
  padding: 5px;
  margin: 0 5px;
  font-size: 14px;
`;

const HeaderRightText = styled.p`
  padding: 5px;
  margin: 0 3px;
  margin-top: -3px;
  font-size: 13px;
`;

const AppsIcon = styled(CgMenuGridO)`
  color: #5f6368;
  margin: 0px 20px;
  font-size: 24px;
`;

const LoginBtn = styled.button`
  width: 96px;
  height: 36px;
  background: #1a73e8;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 5px;
  padding-bottom: 7px;
  margin: 9px 5px;
  font-size: 14px;
  margin-left: 0px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderLeftText>Google 정보</HeaderLeftText>
        <HeaderLeftText>스토어</HeaderLeftText>
      </HeaderLeft>
      <HeaderRight>
        <HeaderRightText>Gmail</HeaderRightText>
        <HeaderRightText>이미지</HeaderRightText>
        <AppsIcon />
        <LoginBtn>로그인</LoginBtn>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
