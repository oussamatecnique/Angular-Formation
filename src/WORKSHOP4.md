apply validation on user-form
  * all the fields are required
  * email must be a valid email (add an email input (also in model) if it does not exit)
  * form submit is controlled by its validity
  * display a message when form is not valid

pipe
  * create a pipe fromNow that displays in text number of days since a date passed as an argument
  => {{ date | fromNow }} => two days ago
  => prefer using date-fns or https://github.com/iamkun/dayjs rather than moment