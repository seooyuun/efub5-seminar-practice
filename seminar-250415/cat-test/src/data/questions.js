const questions = [
  {
    id: 1,
    question: "아무도 없는 집, 당신은?",
    options: [
      { text: "혼자서도 잘 놀지~", type: "independent" },
      { text: "누가 좀 와줬으면 좋겠어!", type: "social" },
    ],
  },
  {
    id: 2,
    question: "좋아하는 하루 루틴은?",
    options: [
      { text: "느긋하게 혼자 낮잠 → 산책", type: "independent" },
      { text: "사람 품 → 간식 → 또 사람 품", type: "social" },
    ],
  },
  {
    id: 3,
    question: "낯선 손님이 찾아왔다!",
    options: [
      { text: "어디서 많이 본 듯...? (관찰 모드)", type: "independent" },
      { text: "후다닥 나가서 먼저 인사!", type: "social" },
    ],
  },
];

export default questions;
