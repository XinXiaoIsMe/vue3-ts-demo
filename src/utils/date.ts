type DateOption = number | Date

export class DateTravel {
  private _date: Date
  private _time: number

  constructor(time: DateOption) {
    if (typeof time === 'number') {
      this._time = time
      this._date = new Date(time)
    } else if (time instanceof Date) {
      this._time = time.getTime()
      this._date = time
    } else {
      throw new TypeError('please pass a date instance or a time stamp.')
    }
  }

  static format (time: DateOption): string {
    const date = new Date(time)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${year}-${month}-${day}`
  }

  static today (): string {
    return this.format(new Date())
  }

  static yesterday (): string {
    return this.format(new Date().getTime() - 3600 * 24)
  }

  static tomarrow (): string {
    return this.format(new Date().getTime() + 3600 * 24)
  }

  getTimeStamp (): number {
    return this._time
  }

  getDate (): Date {
    return this._date
  }

  parseDateString (dateStr: string): DateTravel {
    const reg = /^\d{4}-\d{1,2}-\d{1-2}$/
    if (!reg.test(dateStr)) throw new TypeError('please pass a string follow format yyyy-mm-dd')
    return new DateTravel(new Date(dateStr))
  }

  beforeDay (): string {
    return DateTravel.format(this._time - 3600 * 24)
  }

  afterDay (): string {
    return DateTravel.format(this._time + 3600 * 24)
  }
}