import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

export const goals = pgTable('goals', {
  id: text('id').primaryKey().$defaultFn(()=> createId()),
  title: text('title').notNull(),
  desiredWeekyfFrequency: integer('desired_weekly_frequency').notNull(),
  createAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})

export const goalCompletions = pgTable('goal_completation', {
  id: text('id').primaryKey().$defaultFn(()=> createId()),
  goldId: text('goal_id')
    .references(() => goals.id)
    .notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})
