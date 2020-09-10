import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li
        (click)="onSelect(department)"
        [class.selected]="isSelected(department)"
        *ngFor="let department of departments"
      >
        <span class="badge">{{ department.id }}</span>
        <span class="badge">{{ department.name }}</span>
      </li>
    </ul>
  `,
  styles: [],
})
export class DepartmentListComponent implements OnInit {
  public selectedId;

  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Python' },
    { id: 3, name: 'Ruby' },
    { id: 4, name: 'C' },
    { id: 5, name: 'Bootstrap' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department) {
    // this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department) {
    // returns true or false
    return department.id === this.selectedId;
  }
}
