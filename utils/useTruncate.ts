export function useTruncate(string: string, value:number): string {
  if(string.length <= value) {
    return string;
  }

  return string.substring(0, value) + '…';
}
