import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Projects } from '../classes/projects';

@Injectable()
export class LocalService {

  constructor(private http: Http) { }

  private headers = new Headers({'Content-Type': 'application/json'});
  private ProjectsUrl = 'api/projects';
  private ProjectStatesUrl = 'api/projectStates';

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }

  getProjects(): Promise<Projects[]> {
    return this.http.get(this.ProjectsUrl)
      .toPromise()
      .then(response => response.json().data as Projects[])
      .catch(this.handleError);
  }

  getProject(id: number): Promise<Projects> {
    const url = `${this.ProjectsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Projects)
      .catch(this.handleError);
  }

}
