export class SignupInfo {
    fullName: string;
    password: string;
    phoneNumber: string;
    userName: string;
    role: string[];

    constructor(fullName: string, password: string, phoneNumber: string, userName: string) {
        this.fullName = fullName;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.userName = userName;
        this.role = ['smit', 'user', 'admin'];
    }
}
