/*
    大多数的编译器分为三个主要阶段： 解析（Parsing）、 转换（Transformation）、 代码生成（Code Generation）。

    1. Parsing： 解析是将原始代码(raw code)转换成更抽象的代码的表示(representation of code).
    2. Transformation: 对这种抽象的表示进行操作以实现任何编译器想让它做的事情。
    3. Code Generaiton: 将转换后的代码表示转变成新的代码。
*/

/**
 *   The tokenizer (词法器)
 *   目标： 把代码字符串分解成一个令牌(Token)数组
 *   (add 2 (subtract 4 2)) => [{ type: 'paren', value: '('}, ...]
 */

function tokenizer(input) {
  // 指针，用于跟踪当前在代码中的位置。
  let current = 0;

  // 存取令牌的数组
  let tokens = [];

  // 通过循环来获取令牌。
  while (current < input.length) {
    // 获取当前的字符
    let char = input[current];

    // 判断这个字符是否是一个开括号(open parenthesis)
    if (char === "(") {
      // 设置开括号的type为‘paren’
      tokens.push({
        type: "paren",
        value: "(",
      });

      // 然后移动指针
      current++;

      // 然后进入下一轮循环
      continue;
    }

    // 判断是否是闭括号(closing parenthesis)
    if (char === ")") {
      // 里面的操作就跟上面一样了
      tokens.push({
        type: "paren",
        value: ")",
      });
      current++;
      continue;
    }

    // 判断是否为空格(whitespace),因为代码中空格的存在是为了分割字符，但实际上没必要为了它来存储一个Token，所以可以直接抛弃掉。
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // 判断数字，有可能数字是几位数，所以需要将整个数字作为一个Token
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {
      let value = "";

      while (NUMBERS.test(char)) {
        value += char;
        current++;
        char = input[current];
      }

      tokens.push({ type: "number", value });
      continue;
    }
  }
}
