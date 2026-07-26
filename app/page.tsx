const gameFeatures = [
  {
    number: "01",
    title: "おぼえる",
    body: "数秒だけ見えるボムの場所を、目と頭に焼きつけます。",
  },
  {
    number: "02",
    title: "すすむ",
    body: "ボムが消えた盤面を、ひよこの足あとと記憶をたよりに進みます。",
  },
  {
    number: "03",
    title: "だっしゅつ",
    body: "ゴールの旗へたどり着けばクリア。星を集めて次のステージへ。",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Memory Escape トップへ">
          <span>MEMORY</span>
          <strong>ESCAPE</strong>
        </a>
        <nav aria-label="ページ内ナビゲーション">
          <a href="#about">あそびかた</a>
          <a href="#support">サポート</a>
          <a href="#privacy">プライバシー</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">iOS MEMORY PUZZLE</p>
          <h1 id="hero-title">
            おぼえて、
            <br />
            だっしゅつ！
          </h1>
          <p className="lede">
            数秒だけ表示されるボムの配置を記憶して、
            <br />
            見えなくなった盤面をゴールまで進むパズルゲームです。
          </p>
          <div className="hero-notes" aria-label="ゲームの特徴">
            <span>オフラインで遊べる</span>
            <span>iOS 17以降</span>
          </div>
        </div>
        <div className="board-scene" aria-label="ひよことボムのゲーム盤イラスト">
          <div className="flag"><i /><b /></div>
          <div className="bomb bomb-one"><i /></div>
          <div className="bomb bomb-two"><i /></div>
          <div className="bomb bomb-three"><i /></div>
          <div className="chick" aria-hidden="true">
            <span className="tuft" />
            <span className="eye left" />
            <span className="eye right" />
            <span className="beak" />
            <span className="cheek left" />
            <span className="cheek right" />
          </div>
        </div>
      </section>

      <section className="how-to" id="about" aria-labelledby="how-title">
        <div className="section-heading">
          <p className="eyebrow">HOW TO PLAY</p>
          <h2 id="how-title">かんたん3ステップ</h2>
        </div>
        <ol className="feature-list">
          {gameFeatures.map((feature) => (
            <li key={feature.number}>
              <span>{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="modes" aria-labelledby="modes-title">
        <div>
          <p className="eyebrow">PLAY YOUR WAY</p>
          <h2 id="modes-title">少しずつ、
            <br />記憶の冒険を。</h2>
        </div>
        <div className="mode-cards">
          <article>
            <p>れんしゅう</p>
            <strong>10 STAGES</strong>
            <span>星を集めながら、じっくりコツをつかもう。</span>
          </article>
          <article>
            <p>ハイスコアモード</p>
            <strong>ENDLESS</strong>
            <span>大きくなる盤面で、どこまで進める？</span>
          </article>
        </div>
      </section>

      <section className="support" id="support" aria-labelledby="support-title">
        <p className="eyebrow">SUPPORT</p>
        <h2 id="support-title">サポート</h2>
        <div className="support-grid">
          <article>
            <h3>あそびかた</h3>
            <p>ボムの位置を覚えたら、十字キーまたはスワイプでひよこを動かし、旗のマスを目指してください。</p>
          </article>
          <article>
            <h3>記録について</h3>
            <p>ステージの進行、星、ハイスコアはこの端末内だけに保存されます。アプリを削除すると、端末内の記録は削除される場合があります。</p>
          </article>
          <article>
            <h3>動作環境</h3>
            <p>Memory Escape は iOS 17 以降に対応しています。ログイン、アカウント作成、インターネット接続は必要ありません。</p>
          </article>
        </div>
        <p className="support-note">不具合の確認には、アプリのバージョン・iPhoneの機種・iOSのバージョン・発生手順をご用意ください。</p>
      </section>

      <section className="privacy" id="privacy" aria-labelledby="privacy-title">
        <p className="eyebrow">PRIVACY POLICY</p>
        <h2 id="privacy-title">プライバシーポリシー</h2>
        <p className="effective">制定日：2026年7月26日</p>
        <div className="policy-copy">
          <div>
            <h3>収集する情報</h3>
            <p>Memory Escape は、個人情報、利用状況、端末識別子、位置情報、連絡先、写真その他のデータを収集しません。広告、解析、トラッキングのための SDK も使用しません。</p>
          </div>
          <div>
            <h3>端末内の記録</h3>
            <p>ステージの進行状況、星の数、ハイスコアは、ゲームを動作させるために端末内へ保存されます。これらの記録が開発者その他の第三者へ送信されることはありません。</p>
          </div>
          <div>
            <h3>第三者への共有</h3>
            <p>当アプリは情報を収集しないため、第三者への販売、共有、広告利用を行いません。アカウント作成やログインもありません。</p>
          </div>
          <div>
            <h3>ポリシーの変更</h3>
            <p>機能の追加などにより本ポリシーを変更する場合は、このページに最新の内容と制定日を掲載します。</p>
          </div>
        </div>
      </section>

      <footer>
        <a className="wordmark small" href="#top"><span>MEMORY</span><strong>ESCAPE</strong></a>
        <p>© 2026 Memory Escape</p>
        <a href="#privacy">プライバシーポリシー</a>
      </footer>
    </main>
  );
}
