function storage(key: string, value?: string) {
  const ctx = this || {};
  if (ctx.get) {
    return localStorage.getItem(key);
  }
  return localStorage.setItem(key, value);
}

export const setStore = storage.bind({ get: false });
export const getStore = storage.bind({ get: true });
