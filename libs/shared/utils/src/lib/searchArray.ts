export function searchArray(arr: any[], searchTerm: string): any[] {
  if (!!searchTerm === false) {
    return arr;
  } else {
    return arr.filter(val => searchObject(val, searchTerm));
  }
}

export function searchObject(obj: any, searchTerm: string): boolean {
  if (obj instanceof Object) {
    const matchedValues = Object.values(obj).filter(val => {
      return compareStrings(val, searchTerm);
    });

    return !!matchedValues.length;
  }

  return false;
}

export function compareStrings(target: any, searchTerm: string): boolean {
  const formattedTarget: string = target.toString().toLowerCase();
  const formattedSearchTerm = searchTerm.toLowerCase();

  return formattedTarget.includes(formattedSearchTerm);
}
