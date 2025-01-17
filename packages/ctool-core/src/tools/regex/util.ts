const expZh = [
    {value: "[\\u4e00-\\u9fa5]", label: "中文字符"},
    {value: "[^\\x00-\\xff]", label: "双字节字符(包括汉字在内)"},
    {value: "\\n\\s*\\r", label: "空白行"},
    {
        value: "[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?",
        label: "Email地址"
    },
    {value: "[a-zA-z]+://[^\\s]*", label: "网址URL"},
    {value: "[1][3,4,5,7,8][0-9]{9}", label: "手机"},
    {value: "\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}", label: "IP地址"},
    {value: "\\d{3}-\\d{8}|\\d{4}-\\d{7,8}", label: "国内电话号码"},
    {value: "[1-9][0-9]{4,}", label: "腾讯QQ号"},
    {value: "[1-9]\\d{5}(?!\\d)", label: "中国邮政编码"},
    {
        value: "([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))",
        label: "(年-月-日)格式日期"
    },
    {value: "[1-9]\\d*", label: "正整数"},
    {value: "-[1-9]\\d*", label: "负整数"},
    {value: "-?[1-9]\\d*", label: "整数"},
    {value: "[1-9]\\d*|0", label: "非负整数（正整数 + 0）"},
    {value: "-[1-9]\\d*|0", label: "非正整数（负整数 + 0）"},
    {value: "[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*", label: "正浮点数"},
    {value: "-[1-9]\\d*\\.\\d*|-0\\.\\d*[1-9]\\d*", label: "负浮点数"},
]

const expEn = [
    {
        value: '(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|622((12[6-9]|1[3-9][0-9])|([2-8][0-9][0-9])|(9(([0-1][0-9])|(2[0-5]))))[0-9]{10}|64[4-9][0-9]{13}|65[0-9]{14}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47][0-9]{13})*',
        label: "All major credit cards regex"
    },
    {value: '[a-zA-Z0-9]*', label: "Alpha-numeric characters"},
    {value: '[a-zA-Z0-9 ]*', label: "Alpha-numeric characters with spaces"},
    {value: '[a-zA-Z]*', label: "Alphabetic characters"},
    {value: '(3[47][0-9]{13})*', label: "Amex credit card regex"},
    {
        value: '((0[289][0-9]{2})|([1345689][0-9]{3})|(2[0-8][0-9]{2})|(290[0-9])|(291[0-4])|(7[0-4][0-9]{2})|(7[8-9][0-9]{2}))*',
        label: "Australian Postal Codes"
    },
    {value: '([ABCEGHJKLMNPRSTVXY][0-9][A-Z] [0-9][A-Z][0-9])*', label: "Canadian Postal Codes"},
    {value: '(?:AB|BC|MB|N[BLTSU]|ON|PE|QC|SK|YT)*', label: "Canadian Province Abbreviations"},
    {
        value: '(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}',
        label: "Date (MM/DD/YYYY)"
    },
    {
        value: '(19|20)?[0-9]{2}[- /.](0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])',
        label: "Date (YYYY/MM/DD)"
    },
    {value: '(3(?:0[0-5]|[68][0-9])[0-9]{11})*', label: "Diner's Club credit card regex"},
    {
        value: '((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*',
        label: "IP address regex"
    },
    {value: '([a-z])+', label: "Lowercase letters"},
    {value: '([A-Z])+', label: "Uppercase letters"},
    {value: '(5[1-5][0-9]{14})*', label: "MasterCard credit card numbers"},
    {value: '((([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4})+)*', label: "Phone number regex"},
    {value: '([0-9]{3}[-]*[0-9]{2}[-]*[0-9]{4})*', label: "SSN regex"},
    {value: '([A-Z]{1,2}[0-9][A-Z0-9]? [0-9][ABD-HJLNP-UW-Z]{2})*', label: "UK Postal Codes regex"},
    {
        value: '(?:A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])*',
        label: "US States regex"
    },
    {value: '([0-9]{5}(?:-[0-9]{4})?)*', label: "US ZIP Codes regex"},
    {value: '(4[0-9]{12}(?:[0-9]{3})?)*', label: "Visa credit card numbers"},
    {
        value: '(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47][0-9]{13})',
        label: "All major credit cards regex"
    },
    {value: '[a-zA-Z0-9]+', label: "alpha-numeric characters"},
    {value: '[a-zA-Z]+', label: "Alphabetic characters"},
    {value: '[ABCEGHJKLMNPRSTVXY][0-9][A-Z] [0-9][A-Z][0-9]', label: "Canadian Postal Codes"},
    {value: '[0-9]+', label: "digits"},
    {value: '[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}', label: "email regex"},
    {
        value: '(([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4})+',
        label: "phone number regex"
    },
    {
        value: '((http|https|ftp)://)?([[a-zA-Z0-9]\-\.])+(\.)([[a-zA-Z0-9]]){2,4}([[a-zA-Z0-9]/+=%&_\.~?\-]*)',
        label: "URL regex"
    },
    {value: '[0-9]{5}(?:-[0-9]{4})?', label: "US ZIP Codes regex"}
]

const referenceZh = [
    {
        name: "\\",
        text: "将下一个字符标记为一个特殊字符、或一个原义字符、或一个向后引用、或一个八进制转义符。例如，“<code>n</code>”匹配字符“<code>n</code>”。“<code>\\n</code>”匹配一个换行符。串行“<code>\\\\</code>”匹配“<code>\\</code>”而“<code>\\(</code>”则匹配“<code>(</code>”。"
    },
    {
        name: "^",
        text: "匹配输入字符串的开始位置。如果设置了RegExp对象的Multiline属性，^也匹配“<code>\\n</code>”或“<code>\\r</code>”之后的位置。"
    },
    {
        name: "$",
        text: "匹配输入字符串的结束位置。如果设置了RegExp对象的Multiline属性，$也匹配“<code>\\n</code>”或“<code>\\r</code>”之前的位置。"
    },
    {
        name: "*",
        text: "匹配前面的子表达式零次或多次。例如，zo*能匹配“<code>z</code>”以及“<code>zoo</code>”。*等价于{0,}。"
    },
    {
        name: "+",
        text: "匹配前面的子表达式一次或多次。例如，“<code>zo+</code>”能匹配“<code>zo</code>”以及“<code>zoo</code>”，但不能匹配“<code>z</code>”。+等价于{1,}。"
    },
    {
        name: "?",
        text: "匹配前面的子表达式零次或一次。例如，“<code>do(es)?</code>”可以匹配“<code>does</code>”或“<code>does</code>”中的“<code>do</code>”。?等价于{0,1}。"
    },
    {
        name: "{n}",
        text: "n是一个非负整数。匹配确定的n次。例如，“<code>o{2}</code>”不能匹配“<code>Bob</code>”中的“<code>o</code>”，但是能匹配“<code>food</code>”中的两个o。"
    },
    {
        name: "{n,}",
        text: "n是一个非负整数。至少匹配n次。例如，“<code>o{2,}</code>”不能匹配“<code>Bob</code>”中的“<code>o</code>”，但能匹配“<code>foooood</code>”中的所有o。“<code>o{1,}</code>”等价于“<code>o+</code>”。“<code>o{0,}</code>”则等价于“<code>o*</code>”。"
    },
    {
        name: "{n,m}",
        text: "m和n均为非负整数，其中n&lt;=m。最少匹配n次且最多匹配m次。例如，“<code>o{1,3}</code>”将匹配“<code>fooooood</code>”中的前三个o。“<code>o{0,1}</code>”等价于“<code>o?</code>”。请注意在逗号和两个数之间不能有空格。"
    },
    {
        name: "?",
        text: "当该字符紧跟在任何一个其他限制符（*,+,?，{n}，{n,}，{n,m}）后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串“<code>oooo</code>”，“<code>o+?</code>”将匹配单个“<code>o</code>”，而“<code>o+</code>”将匹配所有“<code>o</code>”。"
    },
    {
        name: ".",
        text: "匹配除“<code>\\</code><code>n</code>”之外的任何单个字符。要匹配包括“<code>\\</code><code>n</code>”在内的任何字符，请使用像“<code>(.|\\n)</code>”的模式。"
    },
    {
        name: "(pattern)",
        text: "匹配pattern并获取这一匹配。所获取的匹配可以从产生的Matches集合得到，在VBScript中使用SubMatches集合，在JScript中则使用$0…$9属性。要匹配圆括号字符，请使用“<code>\\(</code>”或“<code>\\)</code>”。"
    },
    {
        name: "(?:pattern)",
        text: "匹配pattern但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。这在使用或字符“<code>(|)</code>”来组合一个模式的各个部分是很有用。例如“<code>industr(?:y|ies)</code>”就是一个比“<code>industry|industries</code>”更简略的表达式。"
    },
    {
        name: "(?=pattern)",
        text: "正向肯定预查，在任何匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如，“<code>Windows(?=95|98|NT|2000)</code>”能匹配“<code>Windows2000</code>”中的“<code>Windows</code>”，但不能匹配“<code>Windows3.1</code>”中的“<code>Windows</code>”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。"
    },
    {
        name: "(?!pattern)",
        text: "正向否定预查，在任何不匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如“<code>Windows(?!95|98|NT|2000)</code>”能匹配“<code>Windows3.1</code>”中的“<code>Windows</code>”，但不能匹配“<code>Windows2000</code>”中的“<code>Windows</code>”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始"
    },
    {
        name: "(?&lt;=pattern)",
        text: "反向肯定预查，与正向肯定预查类拟，只是方向相反。例如，“<code>(?&lt;=95|98|NT|2000)Windows</code>”能匹配“<code>2000Windows</code>”中的“<code>Windows</code>”，但不能匹配“<code>3.1Windows</code>”中的“<code>Windows</code>”。"
    },
    {
        name: "(?&lt;!pattern)",
        text: "反向否定预查，与正向否定预查类拟，只是方向相反。例如“<code>(?&lt;!95|98|NT|2000)Windows</code>”能匹配“<code>3.1Windows</code>”中的“<code>Windows</code>”，但不能匹配“<code>2000Windows</code>”中的“<code>Windows</code>”。"
    },
    {
        name: "x|y",
        text: "匹配x或y。例如，“<code>z|food</code>”能匹配“<code>z</code>”或“<code>food</code>”。“<code>(z|f)ood</code>”则匹配“<code>zood</code>”或“<code>food</code>”。"
    },
    {
        name: "[xyz]",
        text: "字符集合。匹配所包含的任意一个字符。例如，“<code>[abc]</code>”可以匹配“<code>plain</code>”中的“<code>a</code>”。"
    },
    {
        name: "[^xyz]",
        text: "负值字符集合。匹配未包含的任意字符。例如，“<code>[^abc]</code>”可以匹配“<code>plain</code>”中的“<code>p</code>”。"
    },
    {
        name: "[a-z]",
        text: "字符范围。匹配指定范围内的任意字符。例如，“<code>[a-z]</code>”可以匹配“<code>a</code>”到“<code>z</code>”范围内的任意小写字母字符。"
    },
    {
        name: "[^a-z]",
        text: "负值字符范围。匹配任何不在指定范围内的任意字符。例如，“<code>[^a-z]</code>”可以匹配任何不在“<code>a</code>”到“<code>z</code>”范围内的任意字符。"
    },
    {
        name: "\\b",
        text: "匹配一个单词边界，也就是指单词和空格间的位置。例如，“<code>er\\b</code>”可以匹配“<code>never</code>”中的“<code>er</code>”，但不能匹配“<code>verb</code>”中的“<code>er</code>”。"
    },
    {
        name: "\\B",
        text: "匹配非单词边界。“<code>er\\B</code>”能匹配“<code>verb</code>”中的“<code>er</code>”，但不能匹配“<code>never</code>”中的“<code>er</code>”。"
    },
    {
        name: "\\cx",
        text: "匹配由x指明的控制字符。例如，<code>\\cM</code>匹配一个Control-M或回车符。x的值必须为A-Z或a-z之一。否则，将c视为一个原义的“<code>c</code>”字符。"
    },
    {
        name: "\\d",
        text: "匹配一个数字字符。等价于[0-9]。"
    },
    {
        name: "\\D",
        text: "匹配一个非数字字符。等价于[^0-9]。"
    },
    {
        name: "\\f",
        text: "匹配一个换页符。等价于\\x0c和\\cL。"
    },
    {
        name: "\\n",
        text: "匹配一个换行符。等价于\\x0a和\\cJ。"
    },
    {
        name: "\\r",
        text: "匹配一个回车符。等价于\\x0d和\\cM。"
    },
    {
        name: "\\s",
        text: "匹配任何空白字符，包括空格、制表符、换页符等等。等价于[ \\f\\n\\r\\t\\v]。"
    },
    {
        name: "\\S",
        text: "匹配任何非空白字符。等价于[^ \\f\\n\\r\\t\\v]。"
    },
    {
        name: "\\t",
        text: "匹配一个制表符。等价于\\x09和\\cI。"
    },
    {
        name: "\\v",
        text: "匹配一个垂直制表符。等价于\\x0b和\\cK。"
    },
    {
        name: "\\w",
        text: "匹配包括下划线的任何单词字符。等价于“<code>[A-Za-z0-9_]</code>”。"
    },
    {
        name: "\\W",
        text: "匹配任何非单词字符。等价于“<code>[^A-Za-z0-9_]</code>”。"
    },
    {
        name: "\\xn",
        text: "匹配n，其中n为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，“<code>\\x41</code>”匹配“<code>A</code>”。“<code>\\x041</code>”则等价于“<code>\\x04&amp;1</code>”。正则表达式中可以使用ASCII编码。."
    },
    {
        name: "\\num",
        text: "匹配num，其中num是一个正整数。对所获取的匹配的引用。例如，“<code>(.)\\1</code>”匹配两个连续的相同字符。"
    },
    {
        name: "\\n",
        text: "标识一个八进制转义值或一个向后引用。如果\\n之前至少n个获取的子表达式，则n为向后引用。否则，如果n为八进制数字（0-7），则n为一个八进制转义值。"
    },
    {
        name: "\\nm",
        text: "标识一个八进制转义值或一个向后引用。如果\\nm之前至少有nm个获得子表达式，则nm为向后引用。如果\\nm之前至少有n个获取，则n为一个后跟文字m的向后引用。如果前面的条件都不满足，若n和m均为八进制数字（0-7），则\\nm将匹配八进制转义值nm。"
    },
    {
        name: "\\nml",
        text: "如果n为八进制数字（0-3），且m和l均为八进制数字（0-7），则匹配八进制转义值nml。"
    },
    {
        name: "\\un",
        text: "匹配n，其中n是一个用四个十六进制数字表示的Unicode字符。例如，\\u00A9匹配版权符号（©）。"
    }
]

const referenceEn = [
    {
        "name": "\\",
        "text": "Used to indicate that the next character should NOT be interpreted literally. For example, the character 'w' by itself will be interpreted as 'match the character w', but using '\\w' signifies 'match an alpha-numeric character including underscore'. Used to indicate that a metacharacter is to be interpreted literally. For example, the '.' metacharacter means 'match any single character but a new line', but if we would rather match a dot character instead, we would use '\\.'."
    },
    {
        "name": "^",
        "text": "Matches the beginning of the input. If in multiline mode, it also matches after a line break character, hence every new line. When used in a set pattern ([^abc]), it negates the set; match anything not enclosed in the brackets"
    },
    {
        "name": "$",
        "text": "Matches the end of the input. If in multiline mode, it also matches before a line break character, hence every end of line."
    },
    {
        "name": "*",
        "text": "Matches the preceding character 0 or more times."
    },
    {
        "name": "+",
        "text": "Matches the preceding character 1 or more times."
    },
    {
        "name": "?",
        "text": "Matches the preceding character 0 or 1 time. When used after the quantifiers *, +, ? or {}, makes the quantifier non-greedy; it will match the minimum number of times as opposed to matching the maximum number of times."
    },
    {
        "name": ".",
        "text": "Matches any single character except the newline character."
    },
    {
        "name": "(x)",
        "text": "Matches 'x' and remembers the match. Also known as capturing parenthesis."
    },
    {
        "name": "(?:x)",
        "text": "Matches 'x' but does NOT remember the match. Also known as NON-capturing parenthesis."
    },
    {
        "name": "x(?=y)",
        "text": "Matches 'x' only if 'x' is followed by 'y'. Also known as a lookahead."
    },
    {
        "name": "x(?!y)",
        "text": "Matches 'x' only if 'x' is NOT followed by 'y'. Also known as a negative lookahead."
    },
    {
        "name": "x|y",
        "text": "Matches 'x' OR 'y'."
    },
    {
        "name": "{n}",
        "text": "Matches the preceding character exactly n times."
    },
    {
        "name": "{n,m}",
        "text": "Matches the preceding character at least n times and at most m times. n and m can be omitted if zero.."
    },
    {
        "name": "[abc]",
        "text": "Matches any of the enclosed characters. Also known as a character set. You can create range of characters using the hyphen character such as A-Z (A to Z). Note that in character sets, special characters (., *, +) do not have any special meaning."
    },
    {
        "name": "[^abc]",
        "text": "Matches anything NOT enclosed by the brackets. Also known as a negative character set."
    },
    {
        "name": "[\\b]",
        "text": "Matches a backspace."
    },
    {
        "name": "\\b",
        "text": "Matches a word boundary. Boundaries are determined when a word character is NOT followed or NOT preceded with another word character."
    },
    {
        "name": "\\B",
        "text": "Matches a NON-word boundary. Boundaries are determined when two adjacent characters are word characters OR non-word characters."
    },
    {
        "name": "\\cX",
        "text": "Matches a control character. X must be between A to Z inclusive."
    },
    {
        "name": "\\d",
        "text": "Matches a digit character. Same as [0-9] or [0123456789]."
    },
    {
        "name": "\\D",
        "text": "Matches a NON-digit character. Same as [^0-9] or [^0123456789]."
    },
    {
        "name": "\\f",
        "text": "Matches a form feed."
    },
    {
        "name": "\\n",
        "text": "Matches a line feed."
    },
    {
        "name": "\\r",
        "text": "Matches a carriage return."
    },
    {
        "name": "\\s",
        "text": "Matches a single white space character. This includes space, tab, form feed and line feed."
    },
    {
        "name": "\\S",
        "text": "Matches anything OTHER than a single white space character. Anything other than space, tab, form feed and line feed."
    },
    {
        "name": "\\t",
        "text": "Matches a tab."
    },
    {
        "name": "\\v",
        "text": "Matches a vertical tab."
    },
    {
        "name": "\\w",
        "text": "Matches any alphanumeric character including underscore. Equivalent to [A-Za-z0-9_]."
    },
    {
        "name": "\\W",
        "text": "Matches anything OTHER than an alphanumeric character including underscore. Equivalent to [^A-Za-z0-9_]."
    },
    {
        "name": "\\x",
        "text": "A back reference to the substring matched by the x parenthetical expression. x is a positive integer."
    },
    {
        "name": "\\0",
        "text": "Matches a NULL character."
    },
    {
        "name": "\\xhh",
        "text": "Matches a character with the 2-digits hexadecimal code."
    },
    {
        "name": "\\uhhhh",
        "text": "Matches a character with the 4-digits hexadecimal code."
    }
]
export const getCommonExpression = () => {
    if ($t('main_locale') === 'zh_CN') {
        return expZh
    }
    return expEn
}

export const getReference = () => {
    if ($t('main_locale') === 'zh_CN') {
        return referenceZh
    }
    return referenceEn
}
