export const writeCorrectly = (id, totalItems) => {
  const stringNumber = totalItems.toString();
  const lastDigit = stringNumber.charAt(stringNumber.length - 1);

  if (id === 'services') {
    switch (lastDigit) {
      case '1':
        if (totalItems === 1) {
          return 'usługę';
        }
        return 'usług';
      case '2':
      case '3':
      case '4':
        return 'usługi';
      default:
        return 'usług';
    }
  } else if (id === 'products') {
    switch (lastDigit) {
      case '1':
        if (totalItems === 1) {
          return 'produkt';
        }
        return 'produktów';
      case '2':
      case '3':
      case '4':
        return 'produkty';
      default:
        return 'produktów';
    }
  } else {
    if (totalItems === 1) {
      return 'item';
    } else {
      return 'items';
    }
  }
};
