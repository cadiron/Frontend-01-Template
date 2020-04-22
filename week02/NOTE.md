


JavaScript
        编程原理通识
                语言按语法分类
                        非形式语言
                                中英文
                        形式语言 |　乔姆斯基谱系
                                ０型　无限制文法
                                        ？：＝？
                                １型　上下文相关文法
                                        对引擎设计不友好
                                        只有A和B能变
                                        ？<A> ? ::= ？<B> ?
                                ２型　上下文无关文法
                                        <A> ::= ?
                                ３型　正则文法
                                        限制表达能力
                                        左递归
                                        绝大多数表达式可以用正则表达
                                        思考题： 把四则运算用正则表达式来做
                                        词法分析
                                                用正则表达式分析
                                        语法分析
                                                ???没听懂
                                                子主题 2
                                        红× 是什么意思？没听清9点左右
                BNF｜产生式
                        语法结构
                                基础结构
                                复合结构
                        终结符
                                ＜＞
                                其他都是非终结符
                        ×　重复多次
                        ｜　或
                        ＋　至少一次
                        可以有括号
                其他产生式
                        EBNF
                        ABNF
                        javascript的产生式
                                ecma262中的 lexical grammar
                                        A1-A5
                                非终结符 加粗
                                        其他是终结符
                                ？？？重听
                                await / yeild / return
                                ：相当：：=
                                换行 相当于 |
                        学会方便看标准
                        现代语言的特例
                                C++中的*
                                        ??？是什么型
                                VB
                                        <
                                                1型
                                Python 行首的tab符和空格
                                js
                                        正则上的/
                                                1型
                图灵完备性
                        图灵停机不可计算问题
                        计算机语言必须具备图灵完备性
                        命令式 - 图灵机
                                goto语言
                                if和while
                        声明式 - lambda演算
                                递归
                                一个东西凡是能递归，就可以关心它是否具备图灵完备性
                动态与静态
                        动态语言
                                在用户的设备/在线服务器上
                                产品实际运行时
                                runtiem
                        静态语言
                                在程序员的设备上
                                产品开发时
                                Compiletime
                        越静态越适应大规模开发
                类型系统
                        动态类型系统与静态类型系统
                        强类型与弱类型
                                c++是静态弱类型，因为有隐式转换
                        复合类型
                                结构体
                                函数签名
                                        参数个数/参数位置/参数类型等必须一一对应
                        子类型 | 继承
                                逆变
                                        C# ？？不懂 21：38
                                协变
                                        给父类型传个子类型，可以的
                一般的命令式编程语言
                        Atom
                                Identifier
                                Literal
                        Expression
                                Atom
                                Operator
                                Punctuator
                        Statement
                                Expression
                                Keyword
                                Punctuator
                        Structrue
                                Function
                                        Pure Function
                                Class
                                Process
                                Namespace
                                ....
                        Program
                                Program
                                Module
                                Package
                                Library
        字符集
                Ascll
                Unicode
                        unicode block
                                CJK
                        https://www.fileformat.info/info/unicode/
                        BMP
                                超了4位的字符
                        category
                                子主题 1
                InputElement
                        WhiteSpace
                                <TAB>
                                子主题 2
                        LineTerminator
                        Comment
                        Token
                                Punctuator
                                        符号<>.,
                                Literal
                                        ？？
                                IndentifierName
                                        Keywords
                                                关键字可以做属性名
                                                        var get = 1
                                                        get a() {}
                                        Identifier
                                                标志符
                                        Future reserved Keywords: enum
                子主题 4
                        
        types
                Number
                        IEEE 754 双精度
                                sign
                                        1
                                Exponent
                                        11
                                Fraction
                                        52

