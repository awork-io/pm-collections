export interface ICertificate {
  name?: string;
  matches?: string[];
  key?: {
    src: string;
  };
  cert?: {
    src: string;
  };
  passphrase?: string;
}
