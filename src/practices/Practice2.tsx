export const Practice2 = () => {
  /**
   * (引数: 型) : 戻り値の型 。
   * 引数にとる型を指定しておくことで実行前にエラーに気付ける。
   * 引数の後に戻り値の型を指定できる。
   */
  const calcTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice = () => console.log(calcTotalFee(2000));
  return (
    <div>
      <p>練習問題: 返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  );
};
