
export type Plugin = {
  name: string;
  description: string;
  version: string;
  directory: string;
  config: PluginConfig;
  module: any;
};

export type PluginConfig = {
  disabled: boolean;
};

export type GitlabServiceConfig = {
  api_url: string,
  token: string,
  id_project: number,
  files: string[],
  branch: string,
  timeout: number;
}
