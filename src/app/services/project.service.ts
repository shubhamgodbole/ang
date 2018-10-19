import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComandataService } from './comandata.service';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient, private  comandata: ComandataService) { }

  getAllProject(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let userID = localStorage.getItem('userID');
      // const apiUrl = 'http://localhost:1234/api/project/' + userID;
      const apiUrl = this.comandata.apiUrl + 'project/' + userID;
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

  addProject(projectData): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      // const apiUrl = 'http://localhost:1234/api/project/';
      const apiUrl = this.comandata.apiUrl + 'project/';
      this.http.post(apiUrl, projectData)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  findProject(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const apiUrl = 'http://localhost:1234/api/project/';
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

  editProject(projectData): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const apiUrl = 'http://localhost:1234/api/project/';
      this.http.put(apiUrl, projectData)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  deleteProject(projectId): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const apiUrl = 'http://localhost:1234/api/project/' + projectId ;
      this.http.delete(apiUrl)
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
