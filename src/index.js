module.exports = function reverse(n) {

    let NumToStr = String(Math.abs(n));
    let strResult = '';

    for (i = 0; i < NumToStr.length; i += 1) {
        strResult = `${NumToStr[i]}${strResult}`;
    }
    return Number(strResult);

};





