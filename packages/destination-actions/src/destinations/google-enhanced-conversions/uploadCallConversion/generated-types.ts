// Generated file. DO NOT MODIFY IT BY HAND.

export interface Payload {
  /**
   * The ID of the conversion action associated with this conversion. To find the Conversion Action ID, click on your conversion in Google Ads and get the value for `ctId` in the URL. For example, if the URL is `https://ads.google.com/aw/conversions/detail?ocid=00000000&ctId=570000000`, your Conversion Action ID is `570000000`.
   */
  conversion_action: number
  /**
   * The caller ID from which this call was placed. Caller ID is expected to be in E.164 format with preceding + sign, e.g. "+16502531234".
   */
  caller_id: string
  /**
   * The date time at which the call occurred. The timezone must be specified. The format is "yyyy-mm-dd hh:mm:ss+|-hh:mm", e.g. "2019-01-01 12:32:45-08:00".
   */
  call_timestamp: string
  /**
   * The date time at which the conversion occurred. Must be after the click time. The timezone must be specified. The format is "yyyy-mm-dd hh:mm:ss+|-hh:mm", e.g. "2019-01-01 12:32:45-08:00".
   */
  conversion_timestamp: string
  /**
   * The value of the conversion for the advertiser.
   */
  value?: number
  /**
   * Currency associated with the conversion value. This is the ISO 4217 3-character currency code.
   */
  currency?: string
  /**
   * The custom variables associated with this conversion. On the left-hand side, input the name of the custom variable as it appears in your Google Ads account. On the right-hand side, map the Segment field that contains the corresponding value See [Google’s documentation on how to create custom conversion variables](https://developers.google.com/google-ads/api/docs/conversions/conversion-custom-variables).
   */
  custom_variables?: {
    [k: string]: unknown
  }
}
