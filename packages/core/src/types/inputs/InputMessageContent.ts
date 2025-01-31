import {
  ContactInput,
  FormattedTextInput,
  InputFileInputUnion,
  InputThumbnailInput,
  InvoiceInput,
  LocationInput,
  MessageCopyOptionsInput,
  PollTypeInputUnion,
  VenueInput
} from './index'

/** The content of a message to send */
export type InputMessageContentInputUnion = InputMessageTextInput
  | InputMessageAnimationInput
  | InputMessageAudioInput
  | InputMessageDocumentInput
  | InputMessagePhotoInput
  | InputMessageStickerInput
  | InputMessageVideoInput
  | InputMessageVideoNoteInput
  | InputMessageVoiceNoteInput
  | InputMessageLocationInput
  | InputMessageVenueInput
  | InputMessageContactInput
  | InputMessageDiceInput
  | InputMessageGameInput
  | InputMessageInvoiceInput
  | InputMessagePollInput
  | InputMessageForwardedInput

/** A text message */
export interface InputMessageTextInput {
  _: 'inputMessageText'
  /**
   * Formatted text to be sent; 1-GetOption("message_text_length_max") characters. Only
   * Bold, Italic, Underline, Strikethrough, Code, Pre, PreCode, TextUrl and MentionName
   * entities are allowed to be specified manually
   */
  text?: FormattedTextInput
  /** True, if rich web page previews for URLs in the message text must be disabled */
  disableWebPagePreview?: boolean
  /** True, if a chat message draft must be deleted */
  clearDraft?: boolean
}

/** An animation message (GIF-style). */
export interface InputMessageAnimationInput {
  _: 'inputMessageAnimation'
  /** Animation file to be sent */
  animation?: InputFileInputUnion
  /** Animation thumbnail; pass null to skip thumbnail uploading */
  thumbnail?: InputThumbnailInput
  /** File identifiers of the stickers added to the animation, if applicable */
  addedStickerFileIds?: number[]
  /** Duration of the animation, in seconds */
  duration?: number
  /** Width of the animation; may be replaced by the server */
  width?: number
  /** Height of the animation; may be replaced by the server */
  height?: number
  /**
   * Animation caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max")
   * characters
   */
  caption?: FormattedTextInput
}

/** An audio message */
export interface InputMessageAudioInput {
  _: 'inputMessageAudio'
  /** Audio file to be sent */
  audio?: InputFileInputUnion
  /** Thumbnail of the cover for the album; pass null to skip thumbnail uploading */
  albumCoverThumbnail?: InputThumbnailInput
  /** Duration of the audio, in seconds; may be replaced by the server */
  duration?: number
  /** Title of the audio; 0-64 characters; may be replaced by the server */
  title?: string
  /** Performer of the audio; 0-64 characters, may be replaced by the server */
  performer?: string
  /**
   * Audio caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max")
   * characters
   */
  caption?: FormattedTextInput
}

/** A document message (general file) */
export interface InputMessageDocumentInput {
  _: 'inputMessageDocument'
  /** Document to be sent */
  document?: InputFileInputUnion
  /** Document thumbnail; pass null to skip thumbnail uploading */
  thumbnail?: InputThumbnailInput
  /**
   * If true, automatic file type detection will be disabled and the document will be
   * always sent as file. Always true for files sent to secret chats
   */
  disableContentTypeDetection?: boolean
  /**
   * Document caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max")
   * characters
   */
  caption?: FormattedTextInput
}

/** A photo message */
export interface InputMessagePhotoInput {
  _: 'inputMessagePhoto'
  /** Photo to send */
  photo?: InputFileInputUnion
  /**
   * Photo thumbnail to be sent; pass null to skip thumbnail uploading. The thumbnail
   * is sent to the other party only in secret chats
   */
  thumbnail?: InputThumbnailInput
  /** File identifiers of the stickers added to the photo, if applicable */
  addedStickerFileIds?: number[]
  /** Photo width */
  width?: number
  /** Photo height */
  height?: number
  /**
   * Photo caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max")
   * characters
   */
  caption?: FormattedTextInput
  /**
   * Photo TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only
   * in private chats
   */
  ttl?: number
}

/** A sticker message */
export interface InputMessageStickerInput {
  _: 'inputMessageSticker'
  /** Sticker to be sent */
  sticker?: InputFileInputUnion
  /** Sticker thumbnail; pass null to skip thumbnail uploading */
  thumbnail?: InputThumbnailInput
  /** Sticker width */
  width?: number
  /** Sticker height */
  height?: number
  /** Emoji used to choose the sticker */
  emoji?: string
}

/** A video message */
export interface InputMessageVideoInput {
  _: 'inputMessageVideo'
  /** Video to be sent */
  video?: InputFileInputUnion
  /** Video thumbnail; pass null to skip thumbnail uploading */
  thumbnail?: InputThumbnailInput
  /** File identifiers of the stickers added to the video, if applicable */
  addedStickerFileIds?: number[]
  /** Duration of the video, in seconds */
  duration?: number
  /** Video width */
  width?: number
  /** Video height */
  height?: number
  /** True, if the video is supposed to be streamed */
  supportsStreaming?: boolean
  /**
   * Video caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max")
   * characters
   */
  caption?: FormattedTextInput
  /**
   * Video TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only
   * in private chats
   */
  ttl?: number
}

/** A video note message */
export interface InputMessageVideoNoteInput {
  _: 'inputMessageVideoNote'
  /** Video note to be sent */
  videoNote?: InputFileInputUnion
  /** Video thumbnail; pass null to skip thumbnail uploading */
  thumbnail?: InputThumbnailInput
  /** Duration of the video, in seconds */
  duration?: number
  /** Video width and height; must be positive and not greater than 640 */
  length?: number
}

/** A voice note message */
export interface InputMessageVoiceNoteInput {
  _: 'inputMessageVoiceNote'
  /** Voice note to be sent */
  voiceNote?: InputFileInputUnion
  /** Duration of the voice note, in seconds */
  duration?: number
  /** Waveform representation of the voice note, in 5-bit format */
  waveform?: string
  /**
   * Voice note caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max")
   * characters
   */
  caption?: FormattedTextInput
}

/** A message with a location */
export interface InputMessageLocationInput {
  _: 'inputMessageLocation'
  /** Location to be sent */
  location?: LocationInput
  /**
   * Period for which the location can be updated, in seconds; must be between 60 and
   * 86400 for a live location and 0 otherwise
   */
  livePeriod?: number
  /**
   * For live locations, a direction in which the location moves, in degrees; 1-360. Pass
   * 0 if unknown
   */
  heading?: number
  /**
   * For live locations, a maximum distance to another chat member for proximity alerts,
   * in meters (0-100000). Pass 0 if the notification is disabled. Can't be enabled in
   * channels and Saved Messages
   */
  proximityAlertRadius?: number
}

/** A message with information about a venue */
export interface InputMessageVenueInput {
  _: 'inputMessageVenue'
  /** Venue to send */
  venue?: VenueInput
}

/** A message containing a user contact */
export interface InputMessageContactInput {
  _: 'inputMessageContact'
  /** Contact to send */
  contact?: ContactInput
}

/** A dice message */
export interface InputMessageDiceInput {
  _: 'inputMessageDice'
  /** Emoji on which the dice throw animation is based */
  emoji?: string
  /** True, if the chat message draft must be deleted */
  clearDraft?: boolean
}

/** A message with a game; not supported for channels or secret chats */
export interface InputMessageGameInput {
  _: 'inputMessageGame'
  /** User identifier of the bot that owns the game */
  botUserId?: number
  /** Short name of the game */
  gameShortName?: string
}

/** A message with an invoice; can be used only by bots */
export interface InputMessageInvoiceInput {
  _: 'inputMessageInvoice'
  /** Invoice */
  invoice?: InvoiceInput
  /** Product title; 1-32 characters */
  title?: string
  /** Product description; 0-255 characters */
  description?: string
  /** Product photo URL; optional */
  photoUrl?: string
  /** Product photo size */
  photoSize?: number
  /** Product photo width */
  photoWidth?: number
  /** Product photo height */
  photoHeight?: number
  /** The invoice payload */
  payload?: string
  /** Payment provider token */
  providerToken?: string
  /** JSON-encoded data about the invoice, which will be shared with the payment provider */
  providerData?: string
  /**
   * Unique invoice bot deep link parameter for the generation of this invoice. If empty,
   * it would be possible to pay directly from forwards of the invoice message
   */
  startParameter?: string
}

/**
 * A message with a poll. Polls can't be sent to secret chats. Polls can be sent only
 * to a private chat with a bot
 */
export interface InputMessagePollInput {
  _: 'inputMessagePoll'
  /** Poll question; 1-255 characters (up to 300 characters for bots) */
  question?: string
  /** List of poll answer options, 2-10 strings 1-100 characters each */
  options?: string[]
  /**
   * True, if the poll voters are anonymous. Non-anonymous polls can't be sent or forwarded
   * to channels
   */
  isAnonymous?: boolean
  /** Type of the poll */
  type?: PollTypeInputUnion
  /** Amount of time the poll will be active after creation, in seconds; for bots only */
  openPeriod?: number
  /**
   * Point in time (Unix timestamp) when the poll will be automatically closed; for bots
   * only
   */
  closeDate?: number
  /** True, if the poll needs to be sent already closed; for bots only */
  isClosed?: boolean
}

/** A forwarded message */
export interface InputMessageForwardedInput {
  _: 'inputMessageForwarded'
  /** Identifier for the chat this forwarded message came from */
  fromChatId?: number
  /** Identifier of the message to forward */
  messageId?: number
  /**
   * True, if a game message is being shared from a launched game; applies only to game
   * messages
   */
  inGameShare?: boolean
  /**
   * Options to be used to copy content of the message without reference to the original
   * sender; pass null to try to forward the message as usual
   */
  copyOptions?: MessageCopyOptionsInput
}
