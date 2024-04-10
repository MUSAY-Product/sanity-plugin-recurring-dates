import {defineField} from 'sanity'

import {RecurringDates} from '../components/RecurringDate'
import {PluginConfig, WithRequiredProperty} from '../types'

export default (config: WithRequiredProperty<PluginConfig, 'defaultRecurrences'>) => {
  const {dateTimeOptions, dateOnly} = config

  return defineField({
    name: 'recurringDates',
    title: 'Dates',
    type: 'object',
    fields: [
      defineField({
        title: 'Start Date',
        name: 'startDate',
        type: dateOnly ? 'date' : 'richDate',
        options: dateTimeOptions,
        validation: (Rule: any) => Rule.required(),
      }),
      defineField({
        title: 'End Date',
        name: 'endDate',
        type: dateOnly ? 'date' : 'richDate',
        options: dateTimeOptions,
        validation: (Rule: any) => Rule.required(),
      }),
      defineField({
        title: 'Recurring event',
        name: 'recurs',
        type: 'boolean',
      }),
      defineField({
        title: 'RRULE',
        name: 'rrule',
        type: 'string',
        hidden: true,
      }),
    ],
    components: {
      input: (props) => RecurringDates({...props, pluginConfig: config}),
    },
  })
}
