document.getElementById('convertToLowercaseButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = convertToLowercase(inputText);
    document.getElementById('outputText').innerText = outputText;
    updateStats(outputText);
});

document.getElementById('convertToUppercaseButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = convertToUppercase(inputText);
    document.getElementById('outputText').innerText = outputText;
    updateStats(outputText);
});

document.getElementById('languageToggleButton').addEventListener('click', function() {
    toggleLanguage();
});

document.getElementById('darkModeToggleButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.getElementById('inputText').classList.toggle('dark-mode');
    document.getElementById('outputTextContainer').classList.toggle('dark-mode');
    document.querySelectorAll('button').forEach(button => button.classList.toggle('dark-mode'));
    document.getElementById('outputStats').classList.toggle('dark-mode');
});

let currentLanguage = 'zh';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';

    if (currentLanguage === 'zh') {
        document.getElementById('headerTitle').innerText = '文本转换工具';
        document.getElementById('mainTitle').innerText = '英文首字母大小写转换器';
        document.getElementById('inputText').placeholder = '输入英文文本...';
        document.getElementById('convertToLowercaseButton').innerText = '转换为小写';
        document.getElementById('convertToUppercaseButton').innerText = '转换为大写';
        document.getElementById('resultTitle').innerText = '转换结果';

        document.getElementById('charCountLabel').innerText = '字符数:';
        document.getElementById('wordCountLabel').innerText = '字数:';
        document.getElementById('sentenceCountLabel').innerText = '句子数:';
        document.getElementById('lineCountLabel').innerText = '行数:';
    } else {
        document.getElementById('headerTitle').innerText = 'Text Conversion Tool';
        document.getElementById('mainTitle').innerText = 'English Letter Case Converter';
        document.getElementById('inputText').placeholder = 'Type or paste your content here';
        document.getElementById('convertToLowercaseButton').innerText = 'Convert to Lowercase';
        document.getElementById('convertToUppercaseButton').innerText = 'Convert to Uppercase';
        document.getElementById('resultTitle').innerText = 'Conversion Result';

        document.getElementById('charCountLabel').innerText = 'Characters:';
        document.getElementById('wordCountLabel').innerText = 'Words:';
        document.getElementById('sentenceCountLabel').innerText = 'Sentences:';
        document.getElementById('lineCountLabel').innerText = 'Lines:';
    }
}

function convertToLowercase(text) {
    return text.split(' ')
               .map(word => word.charAt(0).toLowerCase() + word.slice(1))
               .join(' ');
}

function convertToUppercase(text) {
    return text.split(' ')
               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
               .join(' ');
}

function updateStats(text) {
    const charCount = text.length;
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const sentenceCount = text.split(/[.!?]/).filter(sentence => sentence.trim().length > 0).length;
    const lineCount = text.split('\n').length;

    document.getElementById('charCount').innerText = charCount;
    document.getElementById('wordCount').innerText = wordCount;
    document.getElementById('sentenceCount').innerText = sentenceCount;
    document.getElementById('lineCount').innerText = lineCount;
}
