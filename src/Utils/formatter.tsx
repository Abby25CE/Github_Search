import dayjs from "dayjs";

export function joinedDate(ISO: string): string {
  const date = dayjs(ISO);
  const formateDate = `Joined ${date.format("DD MM YY")}`;
  return formateDate;
}
