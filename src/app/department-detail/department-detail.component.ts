import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{ departmentId }}</h3>

    <p>
      <button class="btn btn-sm btn-secondary m-2" (click)="showOverview()">Overview</button>
      <button class="btn btn-sm btn-secondary m-2" (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <p>
      <button class="btn btn-sm btn-success m-2 prev" (click)="goPrevious()">
        Previous
      </button>
      <button class="btn btn-sm btn-success m-2 next" (click)="goNext()">
        Next
      </button>
    </p>

    <div>
      <button class="btn btn-sm btn-primary m-2" (click)="gotoDepartments()">
        Back
      </button>
    </div>
  `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    if (this.departmentId === 1) {
      let previousId = 1;
      this.router.navigate(['/departments', previousId]);
    } else {
      let previousId = this.departmentId - 1;
      this.router.navigate(['/departments', previousId]);
    }
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', { id: selectedId }]);
    this.router.navigate(['../', { id: selectedId }], {
      relativeTo: this.route,
    });
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
