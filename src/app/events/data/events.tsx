type Event = {
  id: string;
  link: string;
  img: string[]; // 文字列の配列として定義
  title: string;
  description: string;
  date: string;
};

type Events = {
  text: {
    subTitle: string;
    title: string;
    description: string;
  };
  blog: Event[];
};

export const events: Events = {
  text: {
    subTitle: "EVENTS",
    title: "イベント実績",
    description: "随時更新予定",
  },
  blog: [
    {
      id: "1",
      link: "/events/genz-night-out",
      img: [
        "/images/GenZ Night Out01.jpg",
        "/images/GenZ Night Out02.jpg",
        "/images/GenZ Night Out03.jpg",
        "/images/GenZ Night Out04.jpg",
      ],
      title: "GenZ Night Out",
      description:
        "2024年7月13日に開催された「GenZ Night Out」は、Z世代のために企画された大規模なコミュニティイベントです。\n\n" +
        "当日は700名以上の学生が集まり、会場は熱気と活気に包まれました。\n\n" +
        "KOMOREBIやISSEI UNO FIFITHといった人気アーティストをゲストに迎え、\n" +
        "音楽と交流を通じて新しいつながりが生まれる場を提供しました。\n\n" +
        "このイベントはSNSやメディアでも話題を集め、\n" +
        "Z世代が自分らしく楽しみながら交流できる貴重な機会として大きな注目を浴びました。",
      date: "2024年7月13日",
    },
    {
      id: "2",
      link: "/events/snap-house",
      img: [
        "/images/Snap House01.jpg",
        "/images/Snap House02.jpg",
        "/images/Snap House03.jpg",
        "/images/Snap House04.jpg",
        "/images/Snap House05.jpg",
      ],
      title: "Snap House",
      description:
        "2024年9月28日に開催された「SNAPHOUSE」は、Snapchatと協力して開催された若者向けのインタラクティブイベントで、最新のAR（拡張現実）技術を体験できる場を提供しました。\n\n" +
        "参加者はSnapchatのユニークなフィルターやエフェクトを使い、\n" +
        "クリエイティブなコンテンツ制作を楽しみました。\n\n" +
        "マーケティングと会場運営の効果的な取り組みにより、\n" +
        "集客数は予想を大きく上回り、SNS上でも話題となりました。\n\n" +
        "イベントの目的であった「Gen Zとの交流強化」を成功させると同時に、\n" +
        "企業協力型の学生イベントとしても新たな可能性を示す結果となりました。",
      date: "2024年9月28日",
    },
  ],
};
