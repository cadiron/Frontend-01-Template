StringLiteral ::
    " DoubleStringCharactersopt " ' SingleStringCharactersopt '


DoubleStringCharacters ::
    DoubleStringCharacter DoubleStringCharactersopt

SingleStringCharacters ::
    SingleStringCharacter SingleStringCharactersopt

DoubleStringCharacter ::
    SourceCharacter but not one of " or \ or LineTerminator
    <LS> ^\u2028$
    <PS> ^\u2029$
    \ EscapeSequence
    LineContinuation
/[^"\\\n\r\u2028\u2029]$ | ^\u2028$ | ^\u2029$/ | ^\\(u([0-9a-fA-F]{4}|\{(10|0?[0-9a-fA-F])[0-9a-fA-F]{0,4}\})|x[0-9a-fA-F]{2}|0(?!=\d)|[^\n\r\u2028\u2029\dxu])$ | ^\\(\n|\r\n?|\u2028|\u2029)$/

SingleStringCharacter ::
    SourceCharacter but not one of ' or \ or LineTerminator ^[^'\\\n\r\u2028\u2029]$
    <LS> ^\u2028$
    <PS> ^\u2029$
    \ EscapeSequence  /^\\(u([0-9a-fA-F]{4}|\{(10|0?[0-9a-fA-F])[0-9a-fA-F]{0,4}\})|x[0-9a-fA-F]{2}|0(?!=\d)|[^\n\r\u2028\u2029\dxu])$/u
    LineContinuation /^\\(\n|\r\n?|\u2028|\u2029)$/u
/[^'\\\n\r\u2028\u2029]$ | ^\u2028$ | ^\u2029$/ | ^\\(u([0-9a-fA-F]{4}|\{(10|0?[0-9a-fA-F])[0-9a-fA-F]{0,4}\})|x[0-9a-fA-F]{2}|0(?!=\d)|[^\n\r\u2028\u2029\dxu])$ | ^\\(\n|\r\n?|\u2028|\u2029)$/


LineContinuation ::
    \ LineTerminatorSequence
/^\\(\n|\r\n?|\u2028|\u2029)$/u


LineTerminatorSequence :
    <LF>
    <CR>[lookahead ≠ <LF>]
    <LS> ^\u2028$
    <PS> ^\u2029$
    <CR><LF>
/^(\n|\r\n?|\u2028|\u2029)$/u

EscapeSequence ::
    CharacterEscapeSequence
    0 [lookahead ∉ DecimalDigit] /^0(?!=\d)$/
    HexEscapeSequence /^x[0-9a-fA-F]{2}$/
    UnicodeEscapeSequence /^u([0-9a-fA-F]{4}|\{(10|0?[0-9a-fA-F])[0-9a-fA-F]{0,4}\})$/
/^u([0-9a-fA-F]{4}|\{(10|0?[0-9a-fA-F])[0-9a-fA-F]{0,4}\})$|^x[0-9a-fA-F]{2}$|^0(?!=\d)$|^[^\n\r\u2028\u2029\dxu]$/u

CharacterEscapeSequence ::
    SingleEscapeCharacter
    NonEscapeCharacter
/^['"\\bfnrtv]$ | ^['"\\bfnrtv\dxu]$/

SingleEscapeCharacter :: one of
    ' " \ b f n r t v
/^['"\\bfnrtv]$/

NonEscapeCharacter ::
    SourceCharacter but not one of EscapeCharacter or LineTerminator
/^[^\n\r\u2028\u2029'"\\bfnrtv\dxu]$/u

EscapeCharacter ::
    SingleEscapeCharacter
    DecimalDigit
    x
    u
/^['"\\bfnrtv]\dxu$/

HexEscapeSequence ::
    x HexDigit HexDigit
/^x[0-9a-fA-F]{2}$/

UnicodeEscapeSequence ::
    u Hex4Digits
    u{ CodePoint }
/^([0-9a-fA-F]{4}) | (0|10?[0-9a-fA-F])[0-9a-fA-F]{0,4}$/

CodePoint ::
    HexDigits but only if MV of HexDigits ≤ 0x10FFFF
/^(0|10?[0-9a-fA-F])[0-9a-fA-F]{0,4}$/

Hex4Digits ::
    HexDigit HexDigit HexDigit HexDigit
/^[0-9a-fA-F]{4}$/

HexDigits ::
    HexDigit
    HexDigits HexDigit
/^[0-9a-fA-F]+$/

HexDigit :: one of
    0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F
/^[0-9a-fA-F]$/