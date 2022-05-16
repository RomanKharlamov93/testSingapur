export class StorageProvider {
  public get(key: string): any {
    const item: string | null = sessionStorage.getItem(key);

    return item ? JSON.parse(item) : null;
  }

  public set(key: string, obj: any): void {
    sessionStorage.setItem(key, JSON.stringify(obj));
  }

  public delete(key: string): void {
    sessionStorage.removeItem(key);
  }

  public clear(): void {
    sessionStorage.clear();
  }
}
