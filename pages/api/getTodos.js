import { table, minifyRecords } from "./utils/AirTable";

export default async (req, res) => {
  try {
    const records = await table.select({}).firstPage();
    res.statusCode = 200;
    res.json(minifyRecords(records));
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
};
