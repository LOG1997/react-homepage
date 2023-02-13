// 生成随机渐变颜色
export function randomGradientColor() {
    const color1 = randomColor();
    const color2 = randomColor();
    return `linear-gradient(${randomAngle()}deg, ${color1}, ${color2})`;
}

// 随机颜色
function randomColor() {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`;
}
// 随机角度
function randomAngle() {
    return Math.floor(Math.random() * 360);
}