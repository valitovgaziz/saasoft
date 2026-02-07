// Преобразование строки в массив объектов
const parseLabel = (label: string): Array<{text: string}> => {
  return label.split(',')
    .map(item => item.trim())
    .filter(item => item.length > 0)
    .map(item => ({ text: item }));
};