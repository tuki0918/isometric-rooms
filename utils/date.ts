import dayjs from "dayjs";

export const formatJSTDate = (date: Date) => {
  return dayjs(date).tz("Asia/Tokyo").format("YYYY-MM-DD");
};
