// Token 生成器函数
function generateTokens(count, prefix = "MIND") {
    const tokens = {};
    for (let i = 0; i < count; i++) {
        // 生成 8 位随机大写字母和数字组合
        const randomStr = Math.random().toString(36).substr(2, 8).toUpperCase();
        const token = `${prefix}_${randomStr}`;
        tokens[token] = { isUsed: false };
    }
    return tokens;
}

// 执行生成 100 个
const batchTokens = generateTokens(100);
console.log(JSON.stringify(batchTokens, null, 4));