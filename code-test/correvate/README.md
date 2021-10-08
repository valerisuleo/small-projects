## Correvate Angular test

### Introduction
Create an Angular app which accesses the Swagger pet shop Rest API back-end running locally.

### Tasks

1. Login page
2. Page to create a pet
3. Page to get the pet by Id
4. Unit tests

I did create **reusable components**:

* `form`
* `input`
* `select`

I added the following **validations** to the forms:

- All the input fields, but *status*, are required
- Show validation messages
- Make sure that the form cannot be submitted if it is invalid

**Bonus:**

- I had a look at the API and because imageUrl is an `[]` I decided to handle multiple strings.
- I also added a pretty cool **carousel** to show the pet's data when a user get his pet.

### Delivered

**LOGIN:**

<img src="https://www.dropbox.com/s/dtqs57674y6zbae/login.png?raw=1" style="box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);">

<br>

**NEW**

<img src="https://www.dropbox.com/s/xq6n89sddzbq1on/new.png?raw=1" style="box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);">

<br>

**FIND BY ID**

<img src="https://www.dropbox.com/s/4efeg3ocytesjif/find.png?raw=1" style="box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);">
<br>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).