export const toHexString = (bytes: any) => {
  return Array.from(bytes, (byte: any) => {
    return ('0' + (byte & 0xff).toString(16)).slice(-2)
  }).join('')
}
