import { uniq } from 'lodash';
import biGram from './biGram';

const halfWiden = (text: string) =>
  text
    .replace(/[！-～]/g, (match) =>
      String.fromCharCode(match.charCodeAt(0) - 0xfee0)
    )
    .replace(/[“”]/g, '"')
    .replace(/’/g, "'")
    .replace(/‘/g, '`')
    .replace(/￥/g, '\\')
    .replace(/　/g, ' ') // eslint-disable-line no-irregular-whitespace
    .replace(/[〜～]/g, '~')
    .replace(/[―─－]/g, '-');

const hira2kata = (text: string) =>
  text.replace(/[\u3041-\u3096]/g, (match) =>
    String.fromCharCode(match.charCodeAt(0) + 0x60)
  );

const kanaFullWiden = (text: string) => {
  const kanaMap = {
    ｶﾞ: 'ガ',
    ｷﾞ: 'ギ',
    ｸﾞ: 'グ',
    ｹﾞ: 'ゲ',
    ｺﾞ: 'ゴ',
    ｻﾞ: 'ザ',
    ｼﾞ: 'ジ',
    ｽﾞ: 'ズ',
    ｾﾞ: 'ゼ',
    ｿﾞ: 'ゾ',
    ﾀﾞ: 'ダ',
    ﾁﾞ: 'ヂ',
    ﾂﾞ: 'ヅ',
    ﾃﾞ: 'デ',
    ﾄﾞ: 'ド',
    ﾊﾞ: 'バ',
    ﾋﾞ: 'ビ',
    ﾌﾞ: 'ブ',
    ﾍﾞ: 'ベ',
    ﾎﾞ: 'ボ',
    ﾊﾟ: 'パ',
    ﾋﾟ: 'ピ',
    ﾌﾟ: 'プ',
    ﾍﾟ: 'ペ',
    ﾎﾟ: 'ポ',
    ｳﾞ: 'ヴ',
    ﾜﾞ: 'ヷ',
    ｦﾞ: 'ヺ',
    ｱ: 'ア',
    ｲ: 'イ',
    ｳ: 'ウ',
    ｴ: 'エ',
    ｵ: 'オ',
    ｶ: 'カ',
    ｷ: 'キ',
    ｸ: 'ク',
    ｹ: 'ケ',
    ｺ: 'コ',
    ｻ: 'サ',
    ｼ: 'シ',
    ｽ: 'ス',
    ｾ: 'セ',
    ｿ: 'ソ',
    ﾀ: 'タ',
    ﾁ: 'チ',
    ﾂ: 'ツ',
    ﾃ: 'テ',
    ﾄ: 'ト',
    ﾅ: 'ナ',
    ﾆ: 'ニ',
    ﾇ: 'ヌ',
    ﾈ: 'ネ',
    ﾉ: 'ノ',
    ﾊ: 'ハ',
    ﾋ: 'ヒ',
    ﾌ: 'フ',
    ﾍ: 'ヘ',
    ﾎ: 'ホ',
    ﾏ: 'マ',
    ﾐ: 'ミ',
    ﾑ: 'ム',
    ﾒ: 'メ',
    ﾓ: 'モ',
    ﾔ: 'ヤ',
    ﾕ: 'ユ',
    ﾖ: 'ヨ',
    ﾗ: 'ラ',
    ﾘ: 'リ',
    ﾙ: 'ル',
    ﾚ: 'レ',
    ﾛ: 'ロ',
    ﾜ: 'ワ',
    ｦ: 'ヲ',
    ﾝ: 'ン',
    ｧ: 'ァ',
    ｨ: 'ィ',
    ｩ: 'ゥ',
    ｪ: 'ェ',
    ｫ: 'ォ',
    ｯ: 'ッ',
    ｬ: 'ャ',
    ｭ: 'ュ',
    ｮ: 'ョ',
    '｡': '。',
    '､': '、',
    ｰ: 'ー',
    '｢': '「',
    '｣': '」',
    '･': '・',
  };
  const pattern = new RegExp(`(${Object.keys(kanaMap).join('|')})`, 'g');

  return text
    .replace(pattern, (match) => kanaMap[match as keyof typeof kanaMap])
    .replace(/ﾞ/g, '゛')
    .replace(/ﾟ/g, '゜');
};

export const chopChink = (text: string) =>
  text
    .replace(/[-/&!?@_,.:;"'~]/g, ' ')
    .replace(/[−‐―／＆！？＿，．：；“”‘’〜～]/g, ' ')
    .replace(/[♪、。]/g, ' ')
    .replace(/[・×☆★*＊]/g, '')
    .replace(/\(([^)]*)\)/g, ' $1')
    .replace(/（([^〕]*)）/g, ' $1')
    .replace(/〔([^〕]*)〕/g, ' $1')
    .replace(/「([^」]*)」/g, ' $1')
    .replace(/『([^』]*)』/g, ' $1')
    .replace(/【([^】]*)】/g, ' $1')
    .replace(/\[([^\]]*)\]/g, ' $1')
    .replace(/\s{2,}/g, ' ')
    .trim();

const tokenize = (...words: string[]) => {
  const resultArr: string[] = [];
  let preVal = '';

  halfWiden(hira2kata(kanaFullWiden(chopChink(words.join(' ')))))
    .toLowerCase()
    .split(' ')
    .forEach((val) => {
      if (val.match(/^[0-9a-z+]+$/)) {
        if (val.length > 3 && val.match(/[sS]$/)) {
          resultArr.push(val.substring(0, val.length - 1));
        } else {
          resultArr.push(val);
        }
        preVal = '';
      } else if (val.length === 1 && /^[亜-黑]+$/u.test(val)) {
        preVal = val;
      } else {
        biGram(`${preVal}${val}`).forEach((cut) => resultArr.push(cut));
        preVal = '';
      }
    });

  return uniq(resultArr) as string[];
};

export default tokenize;
