export const isExternal = function (path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path)
}
