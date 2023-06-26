import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // 在这里添加您的登录逻辑
    if (this.username === 'admin' && this.password === 'password') {
      // 如果用户名和密码正确，将用户重定向到主页
      this.router.navigate(['/home']);
    } else {
      // 如果用户名或密码不正确，显示错误消息
      alert('Invalid username or password');
    }
  }
}