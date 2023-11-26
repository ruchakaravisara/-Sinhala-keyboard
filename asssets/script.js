
const singlishToSinhalaMap = {
    'a': 'අ', 'aa': 'ආ', 'A': 'ඇ', 'Aa': 'ඈ', 'AA': 'ඈ', 'i': 'ඉ', 'ii': 'ඊ',
    'u': 'උ', 'uu': 'ඌ', 'R': 'ඍ', 'Ru': 'ඎ', 'RR': 'ඎ', 'e': 'එ', 'ee': 'ඒ', 'E': 'ඓ', 'ai': 'ඓ', 'o': 'ඔ', 'oo': 'ඕ', 'ou': 'ඖ', 'au': 'ඖ',
    'k': 'ක්', 'ka': 'ක', 'kaa': 'කා', 'kA': 'කැ', 'kAA': 'කෑ', 'kAa': 'කෑ', 'ki': 'කි', 'kii': 'කී', 'ku': 'කු', 'kuu': 'කූ', 'kru': 'ක්ෘ', 'kruu': 'ක්ෲ', 'ke': 'කෙ', 'kee': 'කේ', 'kai': 'කෛ', 'ko': 'කො', 'koo': 'කෝ', 'kau': 'කෞ', 'kaH': 'කඃ', 'kax': 'කං', 'kaX': 'කඞ', 'kya': 'ක්‍ය', 'kYa': 'ක්‍ය', 'kra': 'ක්‍ර',
    'g': 'ග්', 'ga': 'ග', 'gaa': 'ගා', 'gA': 'ගැ', 'gAA': 'ගෑ', 'gAa': 'ගෑ', 'gi': 'ගි', 'gii': 'ගී', 'gu': 'ගු', 'guu': 'ගූ', 'gru': 'ග්ෘ', 'gruu': 'ග්ෲ', 'ge': 'ගෙ', 'gee': 'ගේ', 'gai': 'ගෛ', 'go': 'ගො', 'goo': 'ගෝ', 'gau': 'ගෞ', 'gaH': 'ගඃ', 'gax': 'ගං', 'gaX': 'ගඞ', 'gya': 'ග්‍ය', 'gYa': 'ග්‍ය', 'gra': 'ග්‍ර',
    'ch': 'ච්', 'cha': 'ච', 'chaa': 'චා', 'chA': 'චැ', 'chAA': 'චෑ', 'chAa': 'චෑ', 'chi': 'චි', 'chii': 'චී', 'chu': 'චු', 'chuu': 'චූ', 'chru': 'ච්ෘ', 'chruu': 'ච්ෲ', 'che': 'චෙ', 'chee': 'චේ', 'chai': 'චෛ', 'cho': 'චො', 'choo': 'චෝ', 'chau': 'චෞ', 'chaH': 'චඃ', 'chax': 'චං', 'chaX': 'චඞ', 'chya': 'ච්‍ය', 'chYa': 'ච්‍ය', 'chra': 'ච්‍ර',
    'j': 'ජ්', 'ja': 'ජ', 'jaa': 'ජා', 'jA': 'ජැ', 'jAA': 'ජෑ', 'jAa': 'ජෑ', 'ji': 'ජි', 'jii': 'ජී', 'ju': 'ජු', 'juu': 'ජු', 'jru': 'ජ්ෘ', 'jruu': 'ජ්ෲ', 'je': 'ජෙ', 'jee': 'ජේ', 'jai': 'ජෛ', 'jo': 'ජො', 'joo': 'ජෝ', 'jau': 'ජෞ', 'jaH': 'ජඃ', 'jax': 'ජං', 'jaX': 'ජඞ', 'jya': 'ජ්‍ය', 'kYa': 'ජ්‍ය', 'jra': 'ජ්‍ර',
    't': 'ට්', 'ta': 'ට', 'taa': 'ටා', 'tA': 'ටැ', 'tAA': 'ටෑ', 'tAa': 'ටෑ', 'ti': 'ටි', 'tii': 'ටී', 'tu': 'ටු', 'tuu': 'ටූ', 'tru': 'ට්ෘ', 'truu': 'ට්ෲ', 'te': 'ටෙ', 'tee': 'ටේ', 'tai': 'ටෛ', 'to': 'ටො', 'too': 'ටෝ', 'tau': 'ටෞ', 'taH': 'ටඃ', 'tax': 'ටං', 'taX': 'ටඞ', 'tya': 'ට්‍ය', 'tYa': 'ට්‍ය', 'tra': 'ට්‍ර',
    'd': 'ඩ්', 'da': 'ඩ', 'daa': 'ඩා', 'dA': 'ඩැ', 'dAA': 'ඩෑ', 'dAa': 'ඩෑ', 'di': 'ඩි', 'dii': 'ඩී', 'du': 'ඩු', 'duu': 'ඩූ', 'dru': 'ඩ්ෘ', 'druu': 'ඩ්ෲ', 'de': 'ඩෙ', 'dee': 'ඩේ', 'dai': 'ඩෛ', 'do': 'ඩො', 'doo': 'ඩෝ', 'dau': 'ඩෞ', 'daH': 'ඩඃ', 'dax': 'ඩං', 'daX': 'ඩඞ', 'dya': 'ඩ්‍ය', 'dYa': 'ඩ්‍ය', 'dra': 'ඩ්‍ර',
    'th': 'ත්', 'tha': 'ත', 'thaa': 'තා', 'thA': 'තැ', 'thAA': 'තෑ', 'thAa': 'තෑ', 'thi': 'ති', 'thii': 'තී', 'thu': 'තු', 'thuu': 'තූ', 'thru': 'ත්ෘ', 'thruu': 'ත්ෲ', 'the': 'තෙ', 'thee': 'තේ', 'thai': 'තෛ', 'tho': 'තො', 'thoo': 'තෝ', 'thau': 'තෞ', 'thaH': 'තඃ', 'thax': 'තං', 'thaX': 'තඞ', 'thya': 'ත්‍ය', 'thYa': 'ත්‍ය', 'thra': 'ත්‍ර',
    'dh': 'ද්', 'dha': 'ද', 'dhaa': 'දා', 'dhA': 'දැ', 'dhAA': 'දෑ', 'dhAa': 'දෑ', 'dhi': 'දි', 'dhii': 'දී', 'dhu': 'දු', 'dhuu': 'දූ', 'dhru': 'ද්ෘ', 'dhruu': 'ද්ෲ', 'dhe': 'දෙ', 'dhee': 'දේ', 'dhai': 'දෛ', 'dho': 'දො', 'dhoo': 'දෝ', 'dhau': 'දෞ', 'dhaH': 'දඃ', 'dhax': 'දං', 'dhaX': 'දඞ', 'dhya': 'ද්‍ය', 'dhYa': 'ද්‍ය', 'dhra': 'ද්‍ර',
    'n': 'න්', 'na': 'න', 'naa': 'නා', 'nA': 'නැ', 'nAA': 'නෑ', 'nAa': 'නෑ', 'ni': 'නි', 'nii': 'නී', 'nu': 'නු', 'nuu': 'නූ', 'nru': 'න්ෘ', 'nruu': 'න්ෲ', 'ne': 'නෙ', 'nee': 'නේ', 'nai': 'නෛ', 'no': 'නො', 'noo': 'නෝ', 'nau': 'නෞ', 'naH': 'නඃ', 'nax': 'නං', 'naX': 'නඞ', 'nya': 'න්‍ය', 'nYa': 'න්‍ය', 'nra': 'න්‍ර',
    'N': 'ණ්', 'Na': 'ණ', 'Naa': 'ණා', 'NA': 'ණැ', 'NAA': 'ණෑ', 'NAa': 'ණෑ', 'Ni': 'ණි', 'Nii': 'ණී', 'Nu': 'ණු', 'Nuu': 'ණූ', 'Nru': 'ණ්ෘ', 'Nruu': 'ණ්ෲ', 'Ne': 'ණෙ', 'Nee': 'ණේ', 'Nai': 'ණෛ', 'No': 'ණො', 'Noo': 'ණෝ', 'Nau': 'ණෞ', 'NaH': 'ණඃ', 'Nax': 'ණං', 'NaX': 'ණඞ', 'Nya': 'ණ්‍ය', 'NYa': 'ණ්‍ය', 'Nra': 'ණ්‍ර',
    'p': 'ප්', 'pa': 'ප', 'paa': 'පා', 'pA': 'පැ', 'pAA': 'පෑ', 'pAa': 'පෑ', 'pi': 'පි', 'pii': 'පී', 'pu': 'පු', 'puu': 'පූ', 'pru': 'ප්ෘ', 'pruu': 'ප්ෲ', 'pe': 'පෙ', 'pee': 'පේ', 'pai': 'පෛ', 'po': 'පො', 'poo': 'පෝ', 'pau': 'පෞ', 'paH': 'පඃ', 'pax': 'පං', 'paX': 'පඞ', 'pya': 'ප්‍ය', 'pYa': 'ප්‍ය', 'pra': 'ප්‍ර',
    'b': 'බ්', 'ba': 'බ', 'baa': 'බා', 'bA': 'බැ', 'bAA': 'බෑ', 'bAa': 'බෑ', 'bi': 'බි', 'bii': 'බී', 'bu': 'බු', 'buu': 'බූ', 'bru': 'බ්ෘ', 'bruu': 'බ්ෲ', 'be': 'බෙ', 'bee': 'බේ', 'bai': 'බෛ', 'bo': 'බො', 'boo': 'බෝ', 'bau': 'බෞ', 'baH': 'බඃ', 'bax': 'බං', 'baX': 'බඞ', 'bya': 'බ්‍ය', 'bYa': 'බ්‍ය', 'bra': 'බ්‍ර',
    'm': 'ම්', 'ma': 'ම', 'maa': 'මා', 'mA': 'මැ', 'mAA': 'මෑ', 'mAa': 'මෑ', 'mi': 'මි', 'mii': 'මී', 'mu': 'මු', 'muu': 'මූ', 'mru': 'ම්ෘ', 'mruu': 'ම්ෲ', 'me': 'මෙ', 'mee': 'මේ', 'mai': 'මෛ', 'mo': 'මො', 'moo': 'මෝ', 'mau': 'මෞ', 'maH': 'මඃ', 'max': 'මං', 'maX': 'මඞ', 'mya': 'ම්‍ය', 'mYa': 'ම්‍ය', 'mra': 'ම්‍ර',
    'y': 'ය්', 'ya': 'ය', 'yaa': 'යා', 'yA': 'යැ', 'yAA': 'යෑ', 'yAa': 'යෑ', 'yi': 'යි', 'yii': 'යී', 'yu': 'යු', 'yuu': 'යූ', 'yru': 'ය්ෘ', 'yruu': 'ය්ෲ', 'ye': 'යෙ', 'yee': 'යේ', 'yai': 'යෛ', 'yo': 'යො', 'yoo': 'යෝ', 'yau': 'යෞ', 'yaH': 'යඃ', 'yax': 'යං', 'yaX': 'යඞ', 'yya': 'ය්‍ය', 'yYa': 'ය්‍ය', 'yra': 'ය්‍ර',
    'r': 'ර්', 'ra': 'ර', 'raa': 'රා', 'rA': 'රැ', 'rAA': 'රෑ', 'rAa': 'රෑ', 'ri': 'රි', 'rii': 'රී', 'ru': 'රු', 'ruu': 'රූ', 'rru': 'ර්ෘ', 'rruu': 'ර්ෲ', 're': 'රෙ', 'ree': 'රේ', 'rai': 'රෛ', 'ro': 'රො', 'roo': 'රෝ', 'rau': 'රෞ', 'raH': 'රඃ', 'rax': 'රං', 'raX': 'රඞ', 'rya': 'ර්‍ය', 'rYa': 'ර්‍ය', 'rra': 'ර්‍ර',
    'l': 'ල්', 'la': 'ල', 'laa': 'ලා', 'lA': 'ලැ', 'lAA': 'ලෑ', 'lAa': 'ලෑ', 'li': 'ලි', 'lii': 'ලී', 'lu': 'ලු', 'luu': 'ලූ', 'lru': 'ල්ෘ', 'lruu': 'ල්ෲ', 'le': 'ලෙ', 'lee': 'ලේ', 'lai': 'ලෛ', 'lo': 'ලො', 'loo': 'ලෝ', 'lau': 'ලෞ', 'laH': 'ලඃ', 'lax': 'ලං', 'laX': 'ලඞ', 'lya': 'ල්‍ය', 'lYa': 'ල්‍ය', 'lra': 'ල්‍ර',
    'L': 'ළ්', 'La': 'ළ', 'Laa': 'ළා', 'LA': 'ළැ', 'LAA': 'ළෑ', 'LAa': 'ළෑ', 'Li': 'ළි', 'Lii': 'ළී', 'Lu': 'ළු', 'Luu': 'ළූ', 'Lru': 'ළ්ෘ', 'Lruu': 'ළ්ෲ', 'Le': 'ළෙ', 'Lee': 'ළේ', 'Lai': 'ළෛ', 'Lo': 'ළො', 'Loo': 'ළෝ', 'Lau': 'ළෞ', 'LaH': 'ළඃ', 'Lax': 'ළං', 'LaX': 'ළඞ', 'Lya': 'ළ්‍ය', 'LYa': 'ළ්‍ය', 'Lra': 'ළ්‍ර',
    'w': 'ව්', 'wa': 'ව', 'waa': 'වා', 'wA': 'වැ', 'wAA': 'වෑ', 'wAa': 'වෑ', 'wi': 'වි', 'wii': 'වී', 'wu': 'වු', 'wuu': 'වූ', 'wru': 'ව්ෘ', 'wruu': 'ව්ෲ', 'we': 'වෙ', 'wee': 'වේ', 'wai': 'වෛ', 'wo': 'වො', 'woo': 'වෝ', 'wau': 'වෞ', 'waH': 'වඃ', 'wax': 'වං', 'waX': 'වඞ', 'wya': 'ව්‍ය', 'wYa': 'ව්‍ය', 'wra': 'ව්‍ර',
    's': 'ස්', 'sa': 'ස', 'saa': 'සා', 'sA': 'සැ', 'sAA': 'සෑ', 'sAa': 'සෑ', 'si': 'සි', 'sii': 'සී', 'su': 'සු', 'suu': 'සූ', 'sru': 'ස්ෘ', 'sruu': 'ස්ෲ', 'se': 'සෙ', 'see': 'සේ', 'sai': 'සෛ', 'so': 'සො', 'soo': 'සෝ', 'sau': 'සෞ', 'saH': 'සඃ', 'sax': 'සං', 'saX': 'සඞ', 'sya': 'ස්‍ය', 'sYa': 'ස්‍ය', 'sra': 'ස්‍ර',
    'sh': 'ශ්', 'sha': 'ශ', 'shaa': 'ශා', 'shA': 'ශැ', 'shAA': 'ශෑ', 'shAa': 'ශෑ', 'shi': 'ශි', 'shii': 'ශී', 'shu': 'ශු', 'shuu': 'ශූ', 'shru': 'ශ්ෘ', 'shruu': 'ශ්ෲ', 'she': 'ශෙ', 'shee': 'ශේ', 'shai': 'ශෛ', 'sho': 'ශො', 'shoo': 'ශෝ', 'shau': 'ශෞ', 'shaH': 'ශඃ', 'shax': 'ශං', 'shaX': 'ශඞ', 'shya': 'ශ්‍ය', 'shYa': 'ශ්‍ය', 'shra': 'ශ්‍ර',
    'Sh': 'ෂ්', 'Sha': 'ෂ', 'Shaa': 'ෂා', 'ShA': 'ෂැ', 'ShAA': 'ෂෑ', 'ShAa': 'ෂෑ', 'Shi': 'ෂි', 'Shii': 'ෂී', 'Shu': 'ෂු', 'Shuu': 'ෂූ', 'Shru': 'ෂ්ෘ', 'Shruu': 'ෂ්ෲ', 'She': 'ෂෙ', 'Shee': 'ෂේ', 'Shai': 'ෂෛ', 'Sho': 'ෂො', 'Shoo': 'ෂෝ', 'Shau': 'ෂෞ', 'ShaH': 'ෂඃ', 'Shax': 'ෂං', 'ShaX': 'ෂඞ', 'Shya': 'ෂ්‍ය', 'ShYa': 'ෂ්‍ය', 'Shra': 'ෂ්‍ර',
    'h': 'හ්', 'ha': 'හ', 'haa': 'හා', 'hA': 'හැ', 'hAA': 'හෑ', 'hAa': 'හෑ', 'hi': 'හි', 'hii': 'හී', 'hu': 'හු', 'huu': 'හූ', 'hru': 'හ්ෘ', 'hruu': 'හ්ෲ', 'he': 'හෙ', 'hee': 'හේ', 'hai': 'හෛ', 'ho': 'හො', 'hoo': 'හෝ', 'hau': 'හෞ', 'haH': 'හඃ', 'hax': 'හං', 'haX': 'හඞ', 'hya': 'හ්‍ය', 'hYa': 'හ්‍ය', 'hra': 'හ්‍ර',
    'f': 'ෆ්', 'fa': 'ෆ', 'faa': 'ෆා', 'fA': 'ෆැ', 'fAA': 'ෆෑ', 'fAa': 'ෆෑ', 'fi': 'ෆි', 'fii': 'ෆී', 'fu': 'ෆු', 'fuu': 'ෆූ', 'fru': 'ෆ්ෘ', 'fruu': 'ෆ්ෲ', 'fe': 'ෆෙ', 'fee': 'ෆේ', 'fai': 'ෆෛ', 'fo': 'ෆො', 'foo': 'ෆෝ', 'fau': 'ෆෞ', 'faH': 'ෆඃ', 'fax': 'ෆං', 'faX': 'ෆඞ', 'fya': 'ෆ්‍ය', 'fYa': 'ෆ්‍ය', 'fra': 'ෆ්‍ර',
    'kh': 'ඛ්', 'kha': 'ඛ', 'khaa': 'ඛා', 'khA': 'ඛැ', 'khAA': 'ඛෑ', 'khAa': 'ඛෑ', 'khi': 'ඛි', 'khii': 'ඛී', 'khu': 'ඛු', 'khuu': 'ඛූ', 'khru': 'ඛ්ෘ', 'khruu': 'ඛ්ෲ', 'khe': 'ඛෙ', 'khee': 'ඛේ', 'khai': 'ඛෛ', 'kho': 'ඛො', 'khoo': 'ඛෝ', 'khau': 'ඛෞ', 'khaH': 'ඛඃ', 'khax': 'ඛං', 'khaX': 'ඛඞ', 'khya': 'ඛ්‍ය', 'khYa': 'ඛ්‍ය', 'khra': 'ඛ්‍ර',
    'gh': 'ඝ්', 'gha': 'ඝ', 'ghaa': 'ඝා', 'ghA': 'ඝැ', 'ghAA': 'ඝෑ', 'ghAa': 'ඝෑ', 'ghi': 'ඝි', 'ghii': 'ඝී', 'ghu': 'ඝු', 'ghuu': 'ඝූ', 'ghru': 'ඝ්ෘ', 'ghruu': 'ඝ්ෲ', 'ghe': 'ඝෙ', 'ghee': 'ඝේ', 'ghai': 'ඝෛ', 'gho': 'ඝො', 'ghoo': 'ඝෝ', 'ghau': 'ඝෞ', 'ghaH': 'ඝඃ', 'ghax': 'ඝං', 'ghaX': 'ඝඞ', 'ghya': 'ඝ්‍ය', 'ghYa': 'ඝ්‍ය', 'ghra': 'ඝ්‍ර',
    'chh': 'ඡ්', 'chha': 'ඡ', 'chhaa': 'ඡා', 'chhA': 'ඡැ', 'chhAA': 'ඡෑ', 'chhAa': 'ඡෑ', 'chhi': 'ඡි', 'chhii': 'ඡී', 'chhu': 'ඡු', 'chhuu': 'ඡූ', 'chhru': 'ඡ්ෘ', 'chhruu': 'ඡ්ෲ', 'chhe': 'ඡෙ', 'chhee': 'ඡේ', 'chhai': 'ඡෛ', 'chho': 'ඡො', 'chhoo': 'ඡෝ', 'chhau': 'ඡෞ', 'chhaH': 'ඡඃ', 'chhax': 'ඡං', 'chhaX': 'ඡඞ', 'chhya': 'ඡ්‍ය', 'chhYa': 'ඡ්‍ය', 'chhra': 'ඡ්‍ර',
    'J': 'ඣ්', 'Ja': 'ඣ', 'Jaa': 'ඣා', 'JA': 'ඣැ', 'JAA': 'ඣෑ', 'JAa': 'ඣෑ', 'Ji': 'ඣි', 'Jii': 'ඣී', 'Ju': 'ඣු', 'Juu': 'ඣූ', 'Jru': 'ඣ්ෘ', 'Jruu': 'ඣ්ෲ', 'Je': 'ඣෙ', 'Jee': 'ඣේ', 'Jai': 'ඣෛ', 'Jo': 'ඣො', 'Joo': 'ඣෝ', 'Jau': 'ඣෞ', 'JaH': 'ඣඃ', 'Jax': 'ඣං', 'JaX': 'ඣඞ', 'Jya': 'ඣ්‍ය', 'JYa': 'ඣ්‍ය', 'Jra': 'ඣ්‍ර',
    'T': 'ඨ්', 'Ta': 'ඨ', 'Taa': 'ඨා', 'TA': 'ඨැ', 'TAA': 'ඨෑ', 'TAa': 'ඨෑ', 'Ti': 'ඨි', 'Tii': 'ඨී', 'Tu': 'ඨු', 'Tuu': 'ඨූ', 'Tru': 'ඨ්ෘ', 'Truu': 'ඨ්ෲ', 'Te': 'ඨෙ', 'Tee': 'ඨේ', 'Tai': 'ඨෛ', 'To': 'ඨො', 'Tooo': 'ඨෝ', 'Tau': 'ඨෞ', 'TaH': 'ඨඃ', 'Tax': 'ඨං', 'TaX': 'ඨඞ', 'Tya': 'ඨ්‍ය', 'TYa': 'ඨ්‍ය', 'Tra': 'ඨ්‍ර',
    'D': 'ඪ්', 'Da': 'ඪ', 'Daa': 'ඪා', 'DA': 'ඪැ', 'DAA': 'ඪෑ', 'DAa': 'ඪෑ', 'Di': 'ඪි', 'Dii': 'ඪී', 'Du': 'ඪු', 'Duu': 'ඪූ', 'Dru': 'ඪ්ෘ', 'Druu': 'ඪ්ෲ', 'De': 'ඪෙ', 'Dee': 'ඪේ', 'Dai': 'ඪෛ', 'Do': 'ඪො', 'Doo': 'ඪෝ', 'Dau': 'ඪෞ', 'DaH': 'ඪඃ', 'Dax': 'ඪං', 'DaX': 'ඪඞ', 'Dya': 'ඪ්‍ය', 'DYa': 'ඪ්‍ය', 'Dra': 'ඪ්‍ර',
    'thh': 'ථ්', 'thha': 'ථ', 'thhaa': 'ථා', 'thhA': 'ථැ', 'thhAA': 'ථෑ', 'thhAa': 'ථෑ', 'thhi': 'ථි', 'thhii': 'ථී', 'thhu': 'ථු', 'thhuu': 'ථූ', 'thhru': 'ථ්ෘ', 'thhruu': 'ථ්ෲ', 'thhe': 'ථෙ', 'thhee': 'ථේ', 'thhai': 'ථෛ', 'thho': 'ථො', 'thhoo': 'ථෝ', 'thhau': 'ථෞ', 'thhaH': 'ථඃ', 'thhax': 'ථං', 'thhaX': 'ථඞ', 'thhya': 'ථ්‍ය', 'thhYa': 'ථ්‍ය', 'thhra': 'ථ්‍ර',
    'dhh': 'ධ්', 'dhha': 'ධ', 'dhhaa': 'ධා', 'dhhA': 'ධැ', 'dhhAA': 'ධෑ', 'dhhAa': 'ධෑ', 'dhhI': 'ධි', 'dhhIi': 'ධී', 'dhhU': 'ධු', 'dhhUu': 'ධූ', 'dhhRu': 'ධ්ෘ', 'dhhRuu': 'ධ්ෲ', 'dhhe': 'ධෙ', 'dhhee': 'ධේ', 'dhhai': 'ධෛ', 'dhho': 'ධො', 'dhhoo': 'ධෝ', 'dhhau': 'ධෞ', 'dhhAH': 'ධඃ', 'dhhAx': 'ධං', 'dhhAX': 'ධඞ', 'dhhya': 'ධ්‍ය', 'dhhYa': 'ධ්‍ය', 'dhhra': 'ධ්‍ර',
    'ph': 'ඵ්', 'pha': 'ඵ', 'phaa': 'ඵා', 'phA': 'ඵැ', 'phAA': 'ඵෑ', 'phAa': 'ඵෑ', 'phi': 'ඵි', 'phii': 'ඵී', 'phu': 'ඵු', 'phuu': 'ඵූ', 'phru': 'ඵ්ෘ', 'phruu': 'ඵ්ෲ', 'phe': 'ඵෙ', 'phee': 'ඵේ', 'phai': 'ඵෛ', 'pho': 'ඵො', 'phoo': 'ඵෝ', 'phau': 'ඵෞ', 'phaH': 'ඵඃ', 'phax': 'ඵං', 'phaX': 'ඵඞ', 'phya': 'ඵ්‍ය', 'phYa': 'ඵ්‍ය', 'phra': 'ඵ්‍ර',
    'bh': 'භ්', 'bha': 'භ', 'bhaa': 'භා', 'bhA': 'භැ', 'bhAA': 'භෑ', 'bhAa': 'භෑ', 'bhi': 'භි', 'bhii': 'භී', 'bhu': 'භු', 'bhuu': 'භූ', 'bhru': 'භ්ෘ', 'bhruu': 'භ්ෲ', 'bhe': 'භෙ', 'bhee': 'භේ', 'bhai': 'භෛ', 'bho': 'භො', 'bhoo': 'භෝ', 'bhau': 'භෞ', 'bhaH': 'භඃ', 'bhax': 'භං', 'bhaX': 'භඞ', 'bhya': 'භ්‍ය', 'bhYa': 'භ්‍ය', 'bhra': 'භ්‍ර',
    'zg': 'ඟ්', 'zga': 'ඟ', 'zgaa': 'ඟා', 'zgA': 'ඟැ', 'zgAA': 'ඟෑ', 'zgAa': 'ඟෑ', 'zgi': 'ඟි', 'zgii': 'ඟී', 'zgu': 'ඟු', 'zguu': 'ඟූ', 'zgru': 'ඟ්ෘ', 'zgruu': 'ඟ්ෲ', 'zge': 'ඟෙ', 'zgee': 'ඟේ', 'zgai': 'ඟෛ', 'zgo': 'ඟො', 'zgoo': 'ඟෝ', 'zgau': 'ඟෞ', 'zgaH': 'ඟඃ', 'zgax': 'ඟං', 'zgaX': 'ඟඞ', 'zgya': 'ඟ්‍ය', 'zgYa': 'ඟ්‍ය', 'zgra': 'ඟ්‍ර',
    'zj': 'ඦ්', 'zja': 'ඦ', 'zjaa': 'ඦා', 'zjA': 'ඦැ', 'zjAA': 'ඦෑ', 'zjAa': 'ඦෑ', 'zji': 'ඦි', 'zjii': 'ඦී', 'zju': 'ඦු', 'zjuu': 'ඦූ', 'zjru': 'ඦ්ෘ', 'zjruu': 'ඦ්ෲ', 'zje': 'ඦෙ', 'zjee': 'ඦේ', 'zjai': 'ඦෛ', 'zjo': 'ඦො', 'zjoo': 'ඦෝ', 'zjau': 'ඦෞ', 'zjaH': 'ඦඃ', 'zjax': 'ඦං', 'zjaX': 'ඦඞ', 'zjya': 'ඦ්‍ය', 'zjYa': 'ඦ්‍ය', 'zjra': 'ඦ්‍ර',
    'zd': 'ඬ්', 'zda': 'ඬ', 'zdaa': 'ඬා', 'zdA': 'ඬැ', 'zdAA': 'ඬෑ', 'zdAa': 'ඬෑ', 'zdi': 'ඬි', 'zdii': 'ඬී', 'zdu': 'ඬු', 'zduu': 'ඬූ', 'zdru': 'ඬ්ෘ', 'zdruu': 'ඬ්ෲ', 'zde': 'ඬෙ', 'zdee': 'ඬේ', 'zdai': 'ඬෛ', 'zdo': 'ඬො', 'zdoo': 'ඬෝ', 'zdau': 'ඬෞ', 'zdaH': 'ඬඃ', 'zdax': 'ඬං', 'zdaX': 'ඬඞ', 'zdya': 'ඬ්‍ය', 'zdYa': 'ඬ්‍ය', 'zdra': 'ඬ්‍ර',
    'zdh': 'ඳ්', 'zdha': 'ඳ', 'zdhaa': 'ඳා', 'zdhA': 'ඳැ', 'zdhAA': 'ඳෑ', 'zdhAa': 'ඳෑ', 'zdhi': 'ඳි', 'zdhii': 'ඳී', 'zdhu': 'ඳු', 'zdhuu': 'ඳූ', 'zdhru': 'ඳ්ෘ', 'zdhruu': 'ඳ්ෲ', 'zdhe': 'ඳෙ', 'zdhee': 'ඳේ', 'zdhai': 'ඳෛ', 'zdho': 'ඳො', 'zdhoo': 'ඳෝ', 'zdhou': 'ඳෞ', 'zdhaH': 'ඳඃ', 'zdhaX': 'ඳඞ', 'zdhya': 'ඳ්‍ය', 'zdhYa': 'ඳ්‍ය', 'zdhra': 'ඳ්‍ර',
    'zk': 'ඤ්', 'zka': 'ඤ', 'zkaa': 'ඤා', 'zkA': 'ඤැ', 'zkAA': 'ඤෑ', 'zkAa': 'ඤෑ', 'zki': 'ඤි', 'zkii': 'ඤී', 'zku': 'ඤු', 'zkuu': 'ඤූ', 'zkru': 'ඤ්ෘ', 'zkruu': 'ඤ්ෲ', 'zke': 'ඤෙ', 'zkee': 'ඤේ', 'zkai': 'ඤෛ', 'zko': 'ඤො', 'zkoo': 'ඤෝ', 'zkau': 'ඤෞ', 'zkaH': 'ඤඃ', 'zkax': 'ඤං', 'zkaX': 'ඤඞ', 'zkya': 'ඤ්‍ය', 'zkYa': 'ඤ්‍ය', 'zkra': 'ඤ්‍ර',
    'zh': 'ඥ්', 'zha': 'ඥ', 'zhaa': 'ඥා', 'zhA': 'ඥැ', 'zhAA': 'ඥෑ', 'zhAa': 'ඥෑ', 'zhi': 'ඥි', 'zhii': 'ඥී', 'zhu': 'ඥු', 'zhuu': 'ඥූ', 'zhru': 'ඥ්ෘ', 'zhruu': 'ඥ්ෲ', 'zhe': 'ඥෙ', 'zhee': 'ඥේ', 'zhai': 'ඥෛ', 'zho': 'ඥො', 'zhoo': 'ඥෝ', 'zhau': 'ඥෞ', 'zhaH': 'ඥඃ', 'zhax': 'ඥං', 'zhaX': 'ඥඞ', 'zhya': 'ඥ්‍ය', 'zhYa': 'ඥ්‍ය', 'zhra': 'ඥ්‍ර',
    /*'B': 'ඹ්', 'Ba': 'ඹ', 'Baa': 'ඹා', 'BA': 'ඹැ', 'BAA': 'ඹෑ', 'BAa': 'ඹෑ', 'Bi': 'ඹි', 'Bii': 'ඹී', 'Bu': 'ඹු', 'Buu': 'ඹූ', 'Bru': 'ඹ්ෘ', 'Bruu': 'ඹ්ෲ', 'Be': 'ඹෙ', 'Bee': 'ඹේ', 'Bai': 'ඹෛ', 'Bo': 'ඹො', 'Boo': 'ඹෝ', 'Bau': 'ඹෞ', 'BaH': 'ඹඃ', 'Bax': 'ඹං', 'BaX': 'ඹඞ', 'Bya': 'ඹ්‍ය', 'BYa': 'ඹ්‍ය', 'Bra': 'ඹ්‍ර',*/
    'c': 'ක්', 'ca': 'ක', 'caa': 'කා', 'cA': 'කැ', 'cAA': 'කෑ', 'cAa': 'කෑ', 'ci': 'කි', 'cii': 'කී', 'cu': 'කු', 'cuu': 'කූ', 'cru': 'ක්ෘ', 'cruu': 'ක්ෲ', 'ce': 'කෙ', 'cee': 'කේ', 'cai': 'කෛ', 'co': 'කො', 'coo': 'කෝ', 'cau': 'කෞ', 'caH': 'කඃ', 'cax': 'කං', 'caX': 'කඞ', 'cya': 'ක්‍ය', 'cYa': 'ක්‍ය', 'cra': 'ක්‍ර',
    'q': 'ද්', 'qa': 'ද', 'qaa': 'දා', 'qA': 'දැ', 'qAA': 'දෑ', 'qAa': 'දෑ', 'qi': 'දි', 'qii': 'දී', 'qu': 'දු', 'quu': 'දූ', 'qru': 'ද්ෘ', 'qruu': 'ද්ෲ', 'qe': 'දෙ', 'qee': 'දේ', 'qai': 'දෛ', 'qo': 'දො', 'qoo': 'දෝ', 'qau': 'දෞ', 'qaH': 'දඃ', 'qax': 'දං', 'qaX': 'දඞ', 'qya': 'ද්‍ය', 'qYa': 'ද්‍ය', 'qra': 'ද්‍ර',
    'v': 'ව්', 'va': 'ව', 'vaa': 'වා', 'vA': 'වැ', 'vAA': 'වෑ', 'vAa': 'වෑ', 'vi': 'වි', 'vii': 'වී', 'vu': 'වු', 'vuu': 'වූ', 'vru': 'ව්ෘ', 'vruu': 'ව්ෲ', 've': 'වෙ', 'vee': 'වේ', 'vai': 'වෛ', 'vo': 'වො', 'voo': 'වෝ', 'vau': 'වෞ', 'vaH': 'වඃ', 'vax': 'වං', 'vaX': 'වඞ', 'vya': 'ව්‍ය', 'vYa': 'ව්‍ය', 'vra': 'ව්‍ර',
    'x':'ං','z':'ེ'




};

const inputText = document.getElementById('input');
const outputText = document.getElementById('output');

function updateOutput() {
    const inputValue = inputText.value.toLowerCase();
    let sinhalaOutput = '';

    for (let i = 0; i < inputValue.length; i++) {
        let currentChar = inputValue[i];

        // Check for multi-character mappings
        while (i < inputValue.length - 1) {
            const nextChar = inputValue[i + 1];
            const combinedChar = currentChar + nextChar;

            if (singlishToSinhalaMap[combinedChar]) {
                currentChar = combinedChar;
                i++;
            } else {
                break;
            }
        }

        const sinhalaChar = singlishToSinhalaMap[currentChar] || currentChar;

        if (currentChar === ' ') {
            sinhalaOutput += ' ';
        } else {
            sinhalaOutput += sinhalaChar;
        }
    }

    outputText.value = sinhalaOutput;
}


