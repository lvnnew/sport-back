export interface EnvVarConfig {
  id: string;
  type: 'string' | 'int' | 'float' | 'bigint' | 'datetime' | 'date' | 'bool';
  title: string;
  required: boolean;
  hidden: boolean;
  editable: boolean;
}

export interface EnvVarConfigBaseValues extends EnvVarConfig {
  environment?: any;
  file?: any;
}

export interface EnvVarConfigValues extends EnvVarConfigBaseValues {
  db?: any;
  resulted?: any;
}
