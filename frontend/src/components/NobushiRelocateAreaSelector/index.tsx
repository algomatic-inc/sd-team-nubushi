const japanPrefectures = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
];

const japanCapitalByPrefectures = [
  {
    prefecture: "北海道",
    capital: "札幌市",
  },
  {
    prefecture: "青森県",
    capital: "青森市",
  },
  {
    prefecture: "岩手県",
    capital: "盛岡市",
  },
  {
    prefecture: "宮城県",
    capital: "仙台市",
  },
  {
    prefecture: "秋田県",
    capital: "秋田市",
  },
  {
    prefecture: "山形県",
    capital: "山形市",
  },
  {
    prefecture: "福島県",
    capital: "福島市",
  },
  {
    prefecture: "茨城県",
    capital: "水戸市",
  },
  {
    prefecture: "栃木県",
    capital: "宇都宮市",
  },
  {
    prefecture: "群馬県",
    capital: "前橋市",
  },
  {
    prefecture: "埼玉県",
    capital: "さいたま市",
  },
  {
    prefecture: "千葉県",
    capital: "千葉市",
  },
  {
    prefecture: "東京都",
    capital: "東京都",
  },
  {
    prefecture: "神奈川県",
    capital: "横浜市",
  },
  {
    prefecture: "新潟県",
    capital: "新潟市",
  },
  {
    prefecture: "富山県",
    capital: "富山市",
  },
  {
    prefecture: "石川県",
    capital: "金沢市",
  },
  {
    prefecture: "福井県",
    capital: "福井市",
  },
  {
    prefecture: "山梨県",
    capital: "甲府市",
  },
  {
    prefecture: "長野県",
    capital: "長野市",
  },
  {
    prefecture: "岐阜県",
    capital: "岐阜市",
  },
  {
    prefecture: "静岡県",
    capital: "静岡市",
  },
  {
    prefecture: "愛知県",
    capital: "名古屋市",
  },
  {
    prefecture: "三重県",
    capital: "津市",
  },
  {
    prefecture: "滋賀県",
    capital: "大津市",
  },
  {
    prefecture: "京都府",
    capital: "京都市",
  },
  {
    prefecture: "大阪府",
    capital: "大阪市",
  },
  {
    prefecture: "兵庫県",
    capital: "神戸市",
  },
  {
    prefecture: "奈良県",
    capital: "奈良市",
  },
  {
    prefecture: "和歌山県",
    capital: "和歌山市",
  },
  {
    prefecture: "鳥取県",
    capital: "鳥取市",
  },
  {
    prefecture: "島根県",
    capital: "松江市",
  },
  {
    prefecture: "岡山県",
    capital: "岡山市",
  },
  {
    prefecture: "広島県",
    capital: "広島市",
  },
  {
    prefecture: "山口県",
    capital: "山口市",
  },
  {
    prefecture: "徳島県",
    capital: "徳島市",
  },
  {
    prefecture: "香川県",
    capital: "高松市",
  },
  {
    prefecture: "愛媛県",
    capital: "松山市",
  },
  {
    prefecture: "高知県",
    capital: "高知市",
  },
  {
    prefecture: "福岡県",
    capital: "福岡市",
  },
  {
    prefecture: "佐賀県",
    capital: "佐賀市",
  },
  {
    prefecture: "長崎県",
    capital: "長崎市",
  },
  {
    prefecture: "熊本県",
    capital: "熊本市",
  },
  {
    prefecture: "大分県",
    capital: "大分市",
  },
  {
    prefecture: "宮崎県",
    capital: "宮崎市",
  },
  {
    prefecture: "鹿児島県",
    capital: "鹿児島市",
  },
  {
    prefecture: "沖縄県",
    capital: "那覇市",
  },
];

export const NobushiRelocateAreaSelector: React.FC<{
  currentAreas: string[];
  currentArea: string;
  onSelect: (area: string) => void;
}> = ({ currentAreas, currentArea, onSelect }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div>現在の地域</div>
          <div>
            <select
              value={currentArea}
              onChange={(e) => {
                // 県庁所在地も含める
                const prefecture = e.target.value;
                const capital = japanCapitalByPrefectures.find(
                  (capital) => capital.prefecture === prefecture
                )?.capital;
                if (capital) {
                  onSelect(capital);
                }
              }}
            >
              {japanPrefectures.map((area, index) => (
                <option
                  key={`${area}-${index}`}
                  value={area}
                  selected={currentArea === area ? true : false}
                  disabled={currentAreas.includes(area) ? true : false}
                >
                  {area}
                </option>
              ))}
            </select>
            <select>
              {japanCapitalByPrefectures
                .filter((prefecture) => prefecture.prefecture === currentArea)
                .map((capital) => (
                  <option key={capital.prefecture} value={capital.capital}>
                    {capital.capital}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
