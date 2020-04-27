# Adspur Test

To develop a simple user listing and details app using Angular 2+. You will need to create the: 

- app, 
- modules, 
- components,
- services 

using the angular CLI. 
The app needs to initially list users which link to a view page to display all user information passing ids in the route.

## Requirements:

### Page 1 

needs to list the users name, email and avatar linking to the page 2.
Resource to consume `https://reqres.in/api/users`

### Page 2 

simply views all details associated with the selected user from the list on page 1.
Resource to consume `https://reqres.in/api/users/<<id>>`

You will need to commit and push your changes to your specified branches "valerio". DO NOT merge with master.

## What went well?

![snack screenshot](https://www.dropbox.com/s/ij4rzt7ifio6dqv/adspur.png?raw=1)


- I really enjoyed the test;
- I learned how to use better *queryParams*;
- I am pretty happy with the layout and responsiveness;

> Bonus: I wanted to push myself a bit more so I added some cool animations (my favorite one is the flipping card in smartphone mode).


> Bonus 2: **Toast notifications**. You never know what could go wrong

```
import { ToastrService } from 'ngx-toastr';
 
@Component({...})
export class YourComponent {
  constructor(private toastr: ToastrService) {}
 
  public showError(error): void {
        this.toastr.error('Ooops! Something went wrong...', `${error.status}`);
    }
}

``` 

## What could be improved?

- Add more unit test
- Fix the little bumping on the next btn;
- save data on localstorage to minimize the number of calls

## What went badly?

- I spent some time on the first unit before realising I was passing an obj instead of an array.

	```
	// ARRANGE
	spyOn(service, 'getAll').and.callFake(() => {
	    const obs = from([fakeUserService]);
	    return obs;
	})
	```

- My back is killing me! :) 
