export interface SearchChampProps {
  championData: Array<{
    name: string | undefined;
    id? : string;
    title: string;
    full: any;
  }>;
}
