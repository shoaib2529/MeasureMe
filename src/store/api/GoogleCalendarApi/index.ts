import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {GOOGEL_CALENDAR_BASE_URL} from '@env';

import {CalendarApiParams} from 'types';

export const CalendarApi = createApi({
  reducerPath: 'calendarApi',
  baseQuery: fetchBaseQuery({
    baseUrl: GOOGEL_CALENDAR_BASE_URL,
  }),
  endpoints: builder => ({
    addTaskToGoogleCalendar: builder.mutation<
      Record<string, any>,
      CalendarApiParams
    >({
      query: params => ({
        url: `calendars/primary/events?conferenceDataVersion=1`,
        method: 'POST',
        body: params.task,
        headers: {
          Authorization: `Bearer ${params.accessToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

const {useAddTaskToGoogleCalendarMutation} = CalendarApi;
export default {
  useAddTaskToGoogleCalendarMutation,
  CalendarApi,
};
