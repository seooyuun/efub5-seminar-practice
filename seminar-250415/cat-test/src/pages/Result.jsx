import { useNavigate, useSearchParams } from "react-router-dom";
import results from "../data/results";

export default function Result() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const result = results[type];
  const navigate = useNavigate();

  if (!result) {
    return (
      <div className="page">
        <h2>😿 결과를 찾을 수 없습니다</h2>
        <p>테스트를 다시 진행해주세요!</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>
        {result.emoji} 당신은 {result.name}!
      </h1>
      <p>{result.description}</p>
      <div>
        <img src={result.image} alt={result.name} style={{ width: "350px" }} />
      </div>
      <button
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: `나는 ${result.name} 🐱`,
              text: result.description,
              url: window.location.href,
            });
          } else {
            alert("공유 기능은 모바일에서만 지원됩니다!");
          }
        }}
      >
        결과 공유하기
      </button>
      <button onClick={() => navigate("/")}>테스트 다시하기</button>
    </div>
  );
}
