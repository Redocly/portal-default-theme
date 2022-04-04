export interface Typography {
  fontSize?: string;
  fontWeight?: string | number;
  fontFamily?: string;
  lineHeight?: string;
  color?: string;
  transform?: string;
}

export type Token =
  | 'comment'
  | 'prolog'
  | 'doctype'
  | 'cdata'
  | 'punctuation'
  | 'property'
  | 'tag'
  | 'number'
  | 'constant'
  | 'symbol'
  | 'boolean'
  | 'selector'
  | 'string'
  | 'char'
  | 'builtin'
  | 'inserted'
  | 'operator'
  | 'entity'
  | 'url'
  | 'variable'
  | 'atrule'
  | 'keyword'
  | 'regex'
  | 'important'
  | 'important'
  | 'bold'
  | 'italic'
  | 'entity'
  | 'deleted';

export type Tokens = {
  [P in Token]?: {
    color: string;
  };
} & {
  default?: Typography;
};
