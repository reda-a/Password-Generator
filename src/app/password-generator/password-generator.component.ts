import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent {
  charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  password = '';
  length = 10;
  includeUppercase = true;
  includeNumbers = true;
  includeSymbols = true;
passwordLength: any;
includeLowercase: any;
generatedPassword: any;

  generatePassword(): void {
    let characters = this.charSet;
    if (!this.includeUppercase) {
      characters = characters.replace(/[A-Z]/g, '');
    }
    if (!this.includeNumbers) {
      characters = characters.replace(/[0-9]/g, '');
    }
    if (!this.includeSymbols) {
      characters = characters.replace(/[!@#$%^&*()]/g, '');
    }
    let result = '';
    for (let i = 0; i < this.length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    this.password = result;
  }
}

