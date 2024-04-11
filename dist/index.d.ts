import type {DatetimeOptions} from 'sanity'
import type {ObjectDefinition} from 'sanity'
import {Plugin as Plugin_2} from 'sanity'
import type {RichDate} from '@sanity/rich-date-input'

export declare interface PluginConfig {
  defaultRecurrences?: string[]
  hideEndDate?: boolean
  hideCustom?: boolean
  dateTimeOptions?: DatetimeOptions
  dateInputType: 'date' | 'datetime' | 'richDate'
}

export declare interface RecurringDate {
  rrule: string
  startDate: RichDate | string
  endDate: RichDate | string
}

export declare type RecurringDateFieldOptions = Omit<ObjectDefinition, 'type' | 'fields'> & {
  type: 'recurringDates'
  options?: PluginConfig
}

export declare const recurringDates: Plugin_2<void | PluginConfig>

export declare type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property]
}

export {}

declare module 'sanity' {
  interface IntrinsicDefinitions {
    recurringDates: RecurringDateFieldOptions
  }
}
