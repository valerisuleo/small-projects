import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../interfaces';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'user-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

    public user: IUser;

    constructor(
        private service: UsersService,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    public showError(error): void {
        this.toastr.error('Ooops! Something went wrong...', `${error.status}`);
    }

    public userShow(): void {
        const id: string = this.route.snapshot.paramMap.get('id');

        this.service.getItem(id)
            .subscribe((response) => {
                const { data } = response;
                this.user = data;
            }, (error: Response) => {
                if (error) {
                    this.showError(error);
                }
            });
    }

    public navigateTo(): void {
        this.router.navigate(['/users'])
    }

    public ngOnInit(): void {
        this.userShow();
    }

}
