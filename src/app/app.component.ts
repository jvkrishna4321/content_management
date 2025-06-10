import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import { ContentDialogComponent } from './content-dialog/content-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { ContentAppComponent } from './content-app/content-app.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}
  title = 'my-modal-app';
  dialogResult: string = '';
  name: string = 'User'; // Initial name to pass to the dialog
  searchText: string = '';

  displayedColumns: string[] = [
    'select',
    'displayName',
    'company',
    'address',
    'mobile',
    'email',
    'leadSource',
    'notes',
    'formType',
    'edit' 
  ];
  customers = [
    {
      displayName: 'Dennis Dum',
      company: '',
      address: '1926 Shermans Valley Rd, Elliottsburg, PA 17024',
      mobile: '(717) 582-8131',
      email: '',
      leadSource: 'Google Local Services',
      notes: 'Has Geothermal. Runs constantly. Older home and h...',
      formType: 'Attic_Data' // default selection
    },
    {
      displayName: 'Mike John',
      company: '',
      address: '3200 Spring suite Rd, henrico, VA 23234',
      mobile: '(302) 582-8131',
      email: '',
      leadSource: 'Microsoft Local Services',
      notes: 'Has Geothermal. Runs constantly. Older home and h...',
      formType: 'Audit_Data' // default selection
    },
    {
      displayName: 'Spring henry',
      company: '',
      address: '4567 Meadow suite Rd, Delaware, NY 23234',
      mobile: '(302) 582-8131',
      email: '',
      leadSource: 'Microsoft Local Services',
      notes: 'Has Geothermal. Runs constantly. Older home and h...',
      formType: 'Basement_Data' // default selection
    }
  ];

  get filteredCustomers() {
    const search = this.searchText.toLowerCase();
    return this.customers.filter(customer =>
      Object.values(customer)
        .map(val => (val ?? '').toString().toLowerCase())
        .join(' ')
        .includes(search)
    );
  }

  editCustomer(row: any) {
    console.log('Edit clicked for:', row);
    let dialog_popup:any;
    if(row.formType == 'Attic_Data'){
      dialog_popup = ContentDialogComponent
    }
    else if(row.formType == 'Audit_Data'){
      dialog_popup = ContentAppComponent
    }
    else {
       dialog_popup = ContentDialogComponent
    }
    const dialogRef = this.dialog.open(dialog_popup, {
      width: '1000px', // Set a specific width for the dialog
      data: { name: this.name } // Pass data to the dialog component
    });

    // Subscribe to the event emitted when the dialog is closed
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogResult = result; // Get data back from the dialog
      if (result) {
        alert(`Dialog returned: ${result}`);
      }
    });
    // You can open a dialog, or show a form to update this record
  }

  
}