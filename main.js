const getDominantColorFromRegion = (startY, endY, ctx, canvas) => {
    const colors = {};
    const data = ctx.getImageData(0, startY, canvas.width, endY - startY).data;
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const rgb = `${r},${g},${b}`;
        colors[rgb] = (colors[rgb] || 0) + 1;
    }
    let dominantColor = [0, 0, 0];
    let maxCount = 0;
    for (const color in colors) {
        const count = colors[color];
        if (count > maxCount) {
            maxCount = count;
            dominantColor = color.split(",").map(Number);
        }
    }
    return dominantColor;
}

const CalculateGradient = (img, direction, width, height) => {
    return new Promise((resolve, reject) => {
        img.addEventListener('load', () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = width || img.width;
            canvas.height = height || img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const topHeight = Math.floor(canvas.height / 5);
            const bottomHeight = Math.floor(canvas.height * 4 / 5);
            const topDominantColor = getDominantColorFromRegion(0, topHeight, ctx, canvas);
            const bottomDominantColor = getDominantColorFromRegion(bottomHeight, canvas.height, ctx, canvas);
            const gradientString = `linear-gradient(${direction}, rgb(${topDominantColor.join(", ")}), rgb(${bottomDominantColor.join(", ")}))`;
            resolve(gradientString);
        });
        img.addEventListener('error', reject);
    });
};

const getGradientFromUrl = async (url, direction = "to bottom", width = 0, height = 0) => {
    const img = document.createElement('img');
    img.crossOrigin = "Anonymous";
    img.src = url
    return await CalculateGradient(img, direction, width, height)
}

const getGradientFromId = async (id, direction = "to bottom", width = 0, height = 0) => {
    const img = document.getElementById(id)
    img.crossOrigin = "Anonymous";
    return await CalculateGradient(img, direction, width, height)
}

const getGradientFromElement = async (element, direction = "to bottom", width = 0, height = 0) => {
    element.crossOrigin = "Anonymous";
    return await CalculateGradient(element, direction, width, height)
}

export { getGradientFromUrl, getGradientFromId, getGradientFromElement }