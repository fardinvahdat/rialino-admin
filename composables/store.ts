import moment from "moment";
export const baseLoading = ref(false);
export const errors = ref([]);

export function money(input: any) {
  try {
    return input.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  } catch (e) {
    return input;
  }
}

export function datetime(input: string, format?: string, def?: string) {
  try {
    if (input == null || input.length <= 0) return def;
    if (format == null) format = "YYYY/MM/DD";
    if (format == "time") format = "YYYY/MM/DD HH:mm:ss";
    return moment(input).format(format);
  } catch (e) {
    return def;
  }
}

function jalalian(input: any) {
  try {
    let moment = require("moment-jalaali");
    let date = moment(input, "jYYYY/jMM/jDD HH:mm:ss.SSS");
    return date.format("jYYYY/jM/jD");
  } catch (e) {
    return input;
  }
}

export const statusItems = [
  { name: "All", value: -1 },
  { name: "Active", value: true },
  { name: "Deactive", value: false },
];

export const getRoleName = (value: string) => {
  switch (value) {
    case "seniorRepresentative_sms":
      return "SMS Agent";
    case "representative_sms":
      return "Agent";
    case "user_sms":
      return "User";
  }
};
export function screenWidth() {
  return screen.availWidth;
}

export const truncateText = (text: String) => {
  var spaceIndex = text.indexOf(" ", 30);

  if (spaceIndex === -1) return text;

  return text.substring(0, spaceIndex) + " ...";
};

export const downloadFile = (file: Blob, name: string) => {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = name || "downloadableFile";
  link.click();
  URL.revokeObjectURL(link.href);
};
