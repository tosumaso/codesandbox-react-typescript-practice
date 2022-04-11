export const Practice4 = () => {
  /**
   * tsconfig.json
   *  "strict": true : typescriptのエラー検知を厳しくする
   *    暗黙の型予測を行わないなど。
   *    引数の型に拘らない場合は(変数: any)と書く
   *  "noImplicitAny" : false : strict: trueのとき変数の暗黙の型予測をエラー表示するのを無効
   */
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>練習問題: 設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
