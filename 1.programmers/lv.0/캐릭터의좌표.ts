// https://school.programmers.co.kr/learn/courses/30/lessons/120861

const 캐릭터의좌표 = (keyinput: string[], board: [number, number]): [number, number] => {
  let [x, y] = [0, 0];
  const xAbs = Math.floor(board[0] / 2);
  const yAbs = Math.floor(board[1] / 2);
  const inputStr = (str: string): void => {
    switch (str) {
      case 'up':
        if (y < yAbs) y++;
        break;
      case 'down':
        if (y > -yAbs) y--;
        break;
      case 'left':
        if (x > -xAbs) x--;
        break;
      case 'right':
        if (x < xAbs) x++;
        break;
    }
  };
  for (const xy of keyinput) inputStr(xy);
  return [x, y];
};

console.log(캐릭터의좌표(['left', 'right', 'up', 'right', 'right'], [11, 11])); // [2, 1]
console.log(캐릭터의좌표(['down', 'down', 'down', 'down', 'down'], [7, 9])); // [0, -4]
console.log(캐릭터의좌표(['right', 'right', 'right', 'right', 'right', 'left'], [9, 5])); // [3,0]
