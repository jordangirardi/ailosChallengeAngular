import { InfoDisplay } from "./info-display";

export interface CardInfo {
  infoType: number;
  title: string;
  subtitle: string;
  infos: Array<InfoDisplay>;
}
