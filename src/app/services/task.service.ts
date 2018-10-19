import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }

  addTask(taskData): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const apiUrl = 'http://localhost:1234/api/task/';
      this.http.post(apiUrl, taskData)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  showTask(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let userID = localStorage.getItem('userID');
      let projectID = localStorage.getItem('projectID');
      //const apiUrl = 'http://localhost:1234/api/task/' + userID + '/' + projectID;
      const apiUrl = 'http://localhost:1234/api/task/';
      console.log(apiUrl);
      this.http.get(apiUrl)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  editTask(taskData): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const apiUrl = 'http://localhost:1234/api/task/';
      this.http.put(apiUrl, taskData)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
