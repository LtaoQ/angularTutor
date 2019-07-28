import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

    isBun = false;
    isPatty = false;
    isChicken = false;
    isCheese = false;
    isBacon = false;
    isLnT = false;
    isServe = false;
    serveMsg = "nothing to serve";
    clickBun() {
      this.isBun = !this.isBun;
      this.isServe = false;
    }

    clickPatty() {
      this.isPatty = !this.isPatty;
      this.isServe = false;
    }

    clickChicken() {
      this.isChicken = !this.isChicken;
      this.isServe = false;
    }

    clickCheese() {
      this.isCheese = !this.isCheese;
      this.isServe = false;
    }

    clickBacon() {
      this.isBacon = !this.isBacon;
      this.isServe = false;
    }

    clickLnT() {
      this.isLnT = !this.isLnT;
      this.isServe = false;
    }

    clickClear() {
      this.isServe = false;
      this.isBun = false;
      this.isPatty = false;
      this.isChicken = false;
      this.isCheese = false;
      this.isBacon = false;
      this.isLnT = false;
    }

    clickSubmit() {

      if (!this.isBun) {
        this.serveMsg = 'no bun!!!!';
      } else if((!this.isPatty && !this.isChicken && !this.isCheese)) {
        this.serveMsg = 'no meat or cheese!';
      } else if (!this.isPatty && !this.isChicken) {
        this.serveMsg = (this.isBacon ? 'bacon' : '') + ' grilled cheese ' + (this.isLnT ? 'with lettuce and tomato' : '');
      } else if (this.isPatty && this.isChicken) {
        this.serveMsg = 'chicken and beef? don\'t be too greedy, eh?';
      } else {
        this.serveMsg = (this.isBacon ? 'bacon' : '') +
           (this.isCheese ? ' cheese' : '') + (this.isPatty ? ' burger' : ' chicken sandwich')+
           (this.isLnT ? ' with lettuce and tomato' : '');
      }



      this.isServe = true;
    }


    serverId = 10;
    serverStatus = 'offLine';
    magicname = 'hahaha';
    counter = 0;
    isLogin = false;
    userName: string;
    students: Student[] = [new Student('Bill Gates', 'Computer Science'),
                           new Student('Steve Jobs', 'Computer Science'),
                           new Student('Elon Musk', 'Computer Science')];

    getServerStatus() {
      return this.serverStatus;
    }

    counterPlus() {
     this.counter ++;
    }

    resetCounter() {
      this.counter = 0;
    }

    login() {
      this.isLogin = true;
    }

    signOut() {
      this.isLogin = false;
    }

    // Event Binding
    onUpdateUserName(event: Event) {
      this.userName = (<HTMLInputElement>event.target).value;
    }
}
