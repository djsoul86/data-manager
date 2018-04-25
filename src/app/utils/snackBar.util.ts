import { MatSnackBar, MAT_SNACK_BAR_DATA } from "@angular/material";
import { Inject } from "@angular/core";

export class SnackBarUtil {

  // constructor(public snackBar: MatSnackBar) { }
  constructor(@Inject(MatSnackBar) public snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}