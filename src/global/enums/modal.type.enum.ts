export const EModalType = {
  ALERT: "alert",
  DELETE: "delete",
  APPROVE: "approve",
  CANCEL: "cancel",
  REPORT: "report",
  CREATE: "create",
} as const;

export type EModalType = (typeof EModalType)[keyof typeof EModalType];
