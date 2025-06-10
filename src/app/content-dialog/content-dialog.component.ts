import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-content-dialog',
  templateUrl: './content-dialog.component.html',
  styleUrls: ['./content-dialog.component.css'],
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,ReactiveFormsModule,CommonModule]
})
export class ContentDialogComponent {
  atticDataForm!: FormGroup;

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<ContentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.atticDataForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      homeownerConcerns: ['', Validators.required],
      rebateOpportunities: ['', Validators.required],
      joistSpacing: ['', Validators.required],
      roofStructure: ['', Validators.required],
      ridgeVent: [false],
      ventedSoffit: [false],
      soffitBaffles: [false],
      condensationEvidence: [false],
      rodentEvidence: [false],
      insType: ['', Validators.required],
      insThickness: ['', Validators.required],
      currentRValue: ['', Validators.required],
      airSealing: ['', Validators.required],
      hvacInAttic: ['', Validators.required],
      accessHatchType: ['', Validators.required],
      accessHatchSize: ['', Validators.required],
      atticSection1Dimensions: ['', Validators.required],
      atticSection1UnflooredArea: ['', Validators.required],
      atticSection1FlooredArea: ['', Validators.required],
      atticSection1TotalArea: ['', Validators.required],
      atticSection1FlooredAreaCavityDepth: ['', Validators.required],
      atticSection2Location: ['', Validators.required],
      atticSection2UnflooredArea: ['', Validators.required],
      atticSection2FlooredArea: ['', Validators.required],
      atticSection2TotalArea: ['', Validators.required],
      atticSection2FlooredAreaCavityDepth: ['', Validators.required],
      atticSection3Dimensions: ['', Validators.required],
      atticSection3UnflooredArea: ['', Validators.required],
      atticSection3FlooredArea: ['', Validators.required],
      atticSection3TotalArea: ['', Validators.required],
      atticSection3FlooredAreaCavityDepth: ['', Validators.required],
      additionalNotes: ['', Validators.required],
      atticInsRecommendations: ['', Validators.required],
      atticASRecommendations: ['', Validators.required],
      atticAccessInsAsRecommendations: ['', Validators.required],
      thermopanDamsRecommendations: ['', Validators.required],
      soffitVentilationRecommendations: ['', Validators.required],
      additionalServices: ['', Validators.required],
    });
  }

  closeDialog(result?: any) {
    this.dialogRef.close(result); // pass result back to parent if needed
  }

  onSubmit() {
    alert("Data Submitted");
    this.dialogRef.close();
    if (this.atticDataForm.valid) {
      console.log(this.atticDataForm.value);
    }
  }
}
  // // To receive data from the component that opens the dialog
  // // And to interact with the dialog instance (close, etc.)
  // constructor(
  //   public dialogRef: MatDialogRef<GreetingDialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: DialogData // Inject data passed to the dialog
  // ) {}

  // onNoClick(): void {
  //   this.dialogRef.close(); // Close the dialog without passing data back
  // }

  // onSendGreeting(): void {
  //   // You could perform some action here, like send the greeting
  //   console.log(`Sending greeting to ${this.data.name}!`);
  //   this.dialogRef.close('Greeting sent!'); // Close and pass data back to the opener
  // }
