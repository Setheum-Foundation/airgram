import { ApiRequestOptions, ApiResponse } from '../airgram'
import { NotificationSettingsScopeInputUnion } from '../inputs'
import { ChatsUnion } from '../outputs'

export interface GetChatNotificationSettingsExceptionsParams {
  scope?: NotificationSettingsScopeInputUnion // If specified, only chats from the scope will be returned; pass null to return chats from all scopes
  compareSound?: boolean // If true, also chats with non-default sound will be returned
}

/**
 * Returns list of chats with non-default notification settings
 * @param {Object} params
 * @param {NotificationSettingsScopeInputUnion} [params.scope] - If specified, only
 * chats from the scope will be returned; pass null to return chats from all scopes
 * @param {boolean} [params.compareSound] - If true, also chats with non-default
 * sound will be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatNotificationSettingsExceptionsParams, ChatsUnion>>}
 */
export type getChatNotificationSettingsExceptions = (
  params?: GetChatNotificationSettingsExceptionsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatNotificationSettingsExceptionsParams, ChatsUnion>>
