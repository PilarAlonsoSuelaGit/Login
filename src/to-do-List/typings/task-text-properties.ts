export type TaskTextProperties =
{
  text: string;
  fontSize: string;
  color?: "grey";
  imagen?: string;
  align?: "center";
  onDelete?: (index: number) => void;
  index?: number;
};
