import React from "react";
import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";
import { MdKeyboard } from "react-icons/md";

const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Logo = styled.img`
  max-width: 272px;
  margin-top: 12.4em;
`;

const FormContainer = styled.div`
  padding: 25px;
`;

const SearchIcon = styled(IoMdSearch)`
  font-size: 20px;
  color: #9aa0a6;
  margin: 15px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  margin: 0 auto;
  width: 584px;
`;

const SearchBtns = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const KeyboardIcon = styled(MdKeyboard)`
  color: #70757a;
  font-size: 20px;
  margin: 7px;
`;

const MicIcon = styled.img`
  width: 30px;
  margin: 7px;
`;

const LensIcon = styled.img`
  width: 24px;
  margin: 7px;
`;

const BtnsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const MainBtn = styled.button`
  background-color: #f8f9fa;
  border: 1px solid #f8f9fa;
  border-radius: 4px;
  font-size: 14px;
  margin: 11px 6px;
  padding: 0 16px;
  line-height: 27px;
  height: 36px;
  min-width: 54px;
  text-align: center;
`;

const Main = () => {
  return (
    <MainComponent>
      <Logo
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
        alt="구글 로고"
      />
      <FormContainer>
        <SearchBar>
          <SearchIcon />
          <SearchBtns>
            <KeyboardIcon />
            <MicIcon
              src="https://www.gstatic.com/marketing-cms/assets/images/75/bd/22a04c9f4050a468691d05c06f97/google-mic-icon.webp=s96-fcrop64=1,00000000ffffffff-rw"
              alt="구글마이크"
            />
            <LensIcon
              src="https://www.gstatic.com/marketing-cms/assets/images/dd/24/49a3320d4a25ad88a67b349e65e1/google-lens.webp=s96-fcrop64=1,00000000ffffffff-rw"
              alt="구글렌즈"
            />
          </SearchBtns>
        </SearchBar>
        <BtnsSection>
          <MainBtn>Google 검색</MainBtn>
          <MainBtn>I'm Feeling Lucky</MainBtn>
        </BtnsSection>
      </FormContainer>
    </MainComponent>
  );
};

export default Main;
