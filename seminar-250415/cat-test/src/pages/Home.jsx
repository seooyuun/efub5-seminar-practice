import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>😺 고양이 유형 테스트</h1>
      <button onClick={() => navigate("/question/1")}>시작하기</button>
    </div>
  );
}
