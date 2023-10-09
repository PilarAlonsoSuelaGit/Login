export type TaskTextProperties = {
  text: string;
  fontSize: string;
  color?: "grey";
  imagen?: string;
  align?: "center";
  onDelete?: (index: number) => void;
  onCopy?: (index: number) => void;
  index?: number;
};
