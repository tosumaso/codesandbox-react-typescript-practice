export const Practice3 = () => {
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    return total.toString();
  };
  //変数宣言時に型を指定することで予期せぬ型の代入をエラーで知らせてくれる
  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFee(200);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題: 変数の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  );
};
