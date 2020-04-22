// UTF-8 Encoding 的函数

function UTF8Encoding (val) {
    return Array.from(val).map((char) => charToUTF8(char));
}

function charToUTF8(char) {
    const binary = char.codePointAt().toString(2);
    if (binary.length < 8) {
      return binary.padStart(8, '0');
    }
    const headers = ['0', '110', '1110', '11110'];
    const sequence = [];
    for (let end = binary.length; end > 0; end -= 6) {
      const sub = binary.slice(Math.max(end - 6, 0), end);
  
      if (sub.length === 6) {
        sequence.unshift(`10${sub}`);
      } else {
        const header = headers[sequence.length];
        sequence.unshift(`${header}${sub.padStart(8 - header.length, '0')}`);
      }
    }
    return sequence.join('|');
  }
  
