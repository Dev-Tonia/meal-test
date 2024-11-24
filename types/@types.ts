export type Vendor = {
  email: string;
  name: string;
};

export interface SendBroadcastPayloadInterface {
  subject: string; // Required
  message: string; // Required
  emails?: Vendor[] | null; // Optional, can be null
  sendToAll?: boolean; // Optional, defaults to false
  sendEmail?: boolean; // Optional, defaults to false
}
