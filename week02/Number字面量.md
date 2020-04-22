// Number字面量BNF
NumericLiteral ::
    DecimalLiteral
    BinaryIntegerLiteral
    OctalIntegerLiteral
    HexIntegerLiteral

// Number字面量正则表达式
/^(\. \d+ | (0|[1-9]\d*)\.?\d*?)([e|E][+|-][1-9]\d+)?$) | (^0[b|B][01]+$) | (^0[oO][0-7]+$) | (^[0-9a-fA-F]+$)/

// 十进制
DecimalLiteral ::
    DecimalIntegerLiteral . DecimalDigits ExponentPart
    . DecimalDigits ExponentPart
    DecimalIntegerLiteral ExponentParto
/^(\.\d+ | (0|[1-9]\d*)\.?\d*?)([e|E][+|-][1-9]\d+)?$/

// 十进制
/^0|[1-9]\d*$/

// 十进制整数
DecimalIntegerLiteral ::
    0
    NonZeroDigit DecimalDigits
/^0|[1-9]\d*$/

DecimalDigits ::
    DecimalDigit
    DecimalDigits DecimalDigit
/^[0-9]+$/

DecimalDigit :: one of
    0 1 2 3 4 5 6 7 8 9
/^[0-9]$/

NonZeroDigit :: one of
    1 2 3 4 5 6 7 8 9
/^[1-9]$/

ExponentPart ::
    ExponentIndicator SignedInteger
/^[e|E][+|-][0-9]$/

ExponentIndicator :: one of
    e E
/^[eE]$/

SignedInteger ::
    DecimalDigits
    + DecimalDigits
    - DecimalDigits
/^[+|-][0-9]$/

BinaryIntegerLiteral ::
    0b BinaryDigits
    0B BinaryDigits
/^$/
/^0[b|B][01]$/

BinaryDigits ::
    BinaryDigit
    BinaryDigits BinaryDigit
/^[01]+$/

BinaryDigit :: one of
    0 1
/^[01]$/

OctalIntegerLiteral ::
    0o OctalDigits
    0O OctalDigits
/^0[oO][0-7]+$/

OctalDigits ::
    OctalDigit
    OctalDigits OctalDigit
/^[0-7]+$/

OctalDigit :: one of
    0 1 2 3 4 5 6 7
/^[0-7]$/

HexIntegerLiteral ::
    0x HexDigits
    0X HexDigits
 /^0[x|X][0-9a-fA-F]+$/ 

HexDigits ::
    HexDigit
    HexDigits HexDigit
 /^[0-9a-fA-F]+$/   

HexDigit :: one of
    0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F
/^[0-9a-fA-F]$/