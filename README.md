# The super tiny compiler demo

大多数的编译器分为三个主要阶段： **解析**（Parsing）、 **转换**（Transformation）、 **代码生成**（Code Generation）。

1. `Parsing`： 解析是将原始代码(raw code)转换成更抽象的代码的表示(representation of code).
2. `Transformation`: 对这种抽象的表示进行操作以实现任何编译器想让它做的事情。
3. `Code Generaiton`: 将转换后的代码表示转变成新的代码。

# Parsing

解析通常被分解成两个阶段： **词法分析** 和 **语法分析**

## 词法分析

通过一个叫做词法器(lexer or tokenizer)的东西将原始代码分割成这些叫做令牌(token)的东西。

- 令牌(Token)是一个微笑的对象数组，用来描述语法的一个孤立(isolated)部分。可以是数字、标签、标点符号、运算符等。

## 语法分析

将这些令牌(Token)重新格式化为描述语法的每个部分及其相互关系的表述。 也就是**抽象语法树(Ast)**。

- 抽象语法树，简称 AST，是一个深度嵌套的对象，它是一种即容易操作又能告诉我们很多信息的表示代码。
