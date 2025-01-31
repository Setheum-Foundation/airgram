/** Describes the reason why a chat is reported */
export type ChatReportReasonInputUnion = ChatReportReasonSpamInput
  | ChatReportReasonViolenceInput
  | ChatReportReasonPornographyInput
  | ChatReportReasonChildAbuseInput
  | ChatReportReasonCopyrightInput
  | ChatReportReasonUnrelatedLocationInput
  | ChatReportReasonFakeInput
  | ChatReportReasonCustomInput

/** The chat contains spam messages */
export interface ChatReportReasonSpamInput {
  _: 'chatReportReasonSpam'
}

/** The chat promotes violence */
export interface ChatReportReasonViolenceInput {
  _: 'chatReportReasonViolence'
}

/** The chat contains pornographic messages */
export interface ChatReportReasonPornographyInput {
  _: 'chatReportReasonPornography'
}

/** The chat has child abuse related content */
export interface ChatReportReasonChildAbuseInput {
  _: 'chatReportReasonChildAbuse'
}

/** The chat contains copyrighted content */
export interface ChatReportReasonCopyrightInput {
  _: 'chatReportReasonCopyright'
}

/** The location-based chat is unrelated to its stated location */
export interface ChatReportReasonUnrelatedLocationInput {
  _: 'chatReportReasonUnrelatedLocation'
}

/** The chat represents a fake account */
export interface ChatReportReasonFakeInput {
  _: 'chatReportReasonFake'
}

/** A custom reason provided by the user */
export interface ChatReportReasonCustomInput {
  _: 'chatReportReasonCustom'
}
