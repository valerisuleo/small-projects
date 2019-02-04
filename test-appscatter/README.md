# Register Form 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Exercise
Create a new angular app that has one component - the registration form below.

#### Requirements

- he form should have validation rules on all inputs.
- on submit, all inputs should be validated; any errors should be shown below the problematic input(s)
- Password should be validated against a second "confirm password" field
- Password fields should have a show/hide toggle
- password strength bar should use this npm lib: [Password  Strenght Bar](https://www.npmjs.com/package/ng2-password-strength-bar ) 
- The "slider toggle" (do you own any apps) should be done with *Angular Materials*
- The component should be reusable in html via its tag <lib-register-form>
- The component should have an @Input() for the sign in and terms and conditions links
- The component should have an @Output() that outputs the entire form data on successful submit


## Let's do this!

#### Building a Bootstrap Form

1. `ng g c register-form`

2. `/register-form.component.html`

```
<form>
  <div class="form-group">
  <label for="firstname">firstname</label>
  <input type="text" id="firstname" class="form-control">
</div>

<button class="btn btn-primary">submit</button>
</form>
```


#### ngModel
So we have built this basic bootrap form and now we wanna add validation to this, using the *template driven approach*: we apply a directive to our  input field and angular will create a control obj and associate it with that input field under the hood. 
>Now guess what?

The directive we are gonna apply is `ngModel`.

```
<div class="form-group">
  <label for="firstname">firstname</label>
  <input ngModel name="firstname" type="text" id="firstname" class="form-control">
</div>
```

>`ngModel name="firstname"`

>These 2 attributes is all you need to set in order to use the template driven attribute.

However in order to understand what's going on we add 

`(change)="log()"`

Now we need to pass a reference  `#firstname="ngModel"` to the log method so we can log it on the console:

`(change)="log(firstname)"`


Let's go implement this method `/contact-form.component.ts`

```
export class ContactFormComponent {
log(ace) {
  console.log(ace);
  	}
}
```

>Now we need to import the `FormsModule` from angular in the `/app.module.ts`

`import { FormsModule, ReactiveFormsModule } from '@angular/forms';`

When we apply the ngModel directive `#firstname="ngModel"` along the name attribute on the input field angular automatically creates an instance of the form control class and associates it with the input field.

#### Validation
1. we add `required` in the input field

2. we create a new div and we use a bootstrap class `class="alert alert-danger"`

3. we don't wanna display it for the whole time, we wanna show it only if the field is not valid: `*ngIf="passname.valid"`

```
<div class="alert alert-danger" 
*ngIf="passname.touched && !passname.valid">
firstname is required
</div>
```


#### Specific Validation Errors

1. we want a separate div for each validation errors:

	- `minlength`
	
	- `pattern`
	
	- `required`
	 

2. if we type `ok` and take a look at the console `/ngModel/control/errors` we'll notice an error obj with some properties inside. we can use those properties to make dynamic errors messages

```
<div class="form-group">
	<label for="firstname">firstname</label>
	<input type="text" required minlength="3" maxlength="10" pattern="bananas"
	ngModel name="firstname" #passname="ngModel" (change)="log(passname)"
	id="firstname" class="form-control">
	
	<div class="alert alert-danger" *ngIf="passname.touched && !passname.valid">
		<div *ngIf="passname.errors.required">firstname is required</div>
		<div *ngIf="passname.errors.minlength">firstname min {{ passname.errors.minlength.requiredLength }} characters</div>
		<div *ngIf="passname.errors.pattern">firstname does not match pattern</div>
	</div>
</div>
```

#### ngForm
>We have learned that when we apply and ngModel directive to an input field angular creates a form control object under the hood and associates it with the input field

1. We need to hookup our form with the cotroller 
`<form #f="ngForm" (ngSubmit)="submit(f)">`

2. Now back to `/ng-form.component.ts`

	```
	  submit(f) {
		console.log(f);
		// f.value
	  	}
	  	
	```

3. Once it has been submitted we can get in the console the value of our form.
 

###### Disabling the Submit Btn


```
<button class="btn btn-primary" [disabled]="!f.valid">submit</button>
```

## Cool Stuff

I had a couple of light bulb moments:

1. In order to compare the *password* and the *passowrd confirmation* I did use the **data binding** on the pattern attribute `[pattern]=isSamePassword`. Because of that now if the passwords are not exactly the same we have a validation error.
2. To hide and show the password when we click on the eye icon I did use the **data binding** on `<input [type]=currentType >`. We can change dynamically the attribute's type based on the output of this function `(click)="toggleEye()"`.



