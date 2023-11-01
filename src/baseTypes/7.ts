/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATUDAY, SUNDAY }

const isWeekend = (day: Day): boolean => {
  return day === Day.SATUDAY || day === Day.SUNDAY;
}