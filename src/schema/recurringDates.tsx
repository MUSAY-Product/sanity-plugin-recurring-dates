import {defineField} from 'sanity'

import {RecurringDates} from '../components/RecurringDate'
import {PluginConfig, WithRequiredProperty} from '../types'

export default (config: WithRequiredProperty<PluginConfig, 'defaultRecurrences'>) => {
  const {dateTimeOptions, dateInputType} = config

  return defineField({
    name: 'recurringDates',
    title: 'Dates',
    type: 'object',
    fields: [
      defineField({
        title: 'Start Date',
        name: 'startDate',
        type: dateInputType ?? 'datetime',
        options: dateTimeOptions,
        validation: (Rule: any) => Rule.required(),
      }),
      defineField({
        title: 'End Date',
        name: 'endDate',
        type: dateInputType ?? 'datetime',
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
    preview: {
      select: {
        startDate: 'startDate',
      },
      prepare({startDate}) {
        return {
          title: new Date(
            dateInputType === 'richDate' ? startDate?.utc : startDate,
          ).toLocaleString(),
        }
      },
    },
  })
}
