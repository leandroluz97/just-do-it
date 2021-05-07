//https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPdfViewer(h, word) {
  const result =
    Math.max(...word.split("").map((unit) => h[unit.charCodeAt() - 97])) *
    word.length

  return result
}

console.log(
  designerPdfViewer("abc", [
    1,
    3,
    1,
    3,
    1,
    4,
    1,
    3,
    2,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
  ])
)
