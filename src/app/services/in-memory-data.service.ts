/*
  An in memory data service to use while we have no WS setted

  avaiable states:
  1 - Pending
  2 - Running
  3 - Rejected
  4 - Complete
    pending, running, complete / accepted, rejected
*/
import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let projects = [
      { //fake row 1

        id: 1, name: 'Project Name 1', 
        owner: '', 
        startedAt: '', 
        state: {id: 1, name: "pending"},
        metrics: {
          state: {id: 1, name: "pending"},
          progress: 0,
          teste: 20,
          maintainability: 30,
          security: 60,
          workmanship: 70
        },
        build: {
          state: {id: 1, name: "pending"},
          code: '432461',
          progress: 0,
          startedAt: '',
          builds: ['debug', 'release']
          
        },
        unitTest: {
          state: {id: 1, name: "pending"},
          progress: 0,
          passed: 40,
          failed: 20,
          percPassed: 70,
          codeCovered: 50,
        },
        functionalTest: {
          state: {id: 1, name: "pending"},
          progress: 0,
          passed: 100,
          failed: 20,
          percPassed: 30,
          codeCovered: 60,
        },
        type: 'firewall',

      },{ //fake row 2

        id: 2, name: 'Project Name 2', 
        owner: 'jtuck', 
        startedAt: '2016-12-10T12:00:00Z', 
        state: {id: 4, name: "complete"},
        metrics: {
          state: {id: 4, name: "complete"},
          progress: 100,
          teste: 20,
          maintainability: 30,
          security: 60,
          workmanship: 70
        },
        build: {
          state: {id: 4, name: "complete"},
          code: 'R1_123',
          progress: 100,
          startedAt: '',
          builds: ['debug', 'release']
        },
        unitTest: {
          state: {id: 4, name: "complete"},
          progress: 100,
          passed: 27,
          failed: 43,
          percPassed: 10,
          codeCovered: 20,
        },
        functionalTest: {
          state: {id: 4, name: "complete"},
          progress: 100,
          passed: 97,
          failed: 25,
          percPassed: 90,
          codeCovered: 50,
        },
        type: 'build',

      },{ //fake row 3

        id: 3, name: 'Project Name 3', 
        owner: 'samy', 
        startedAt: '2017-03-01T12:00:00Z', 
        state: {id: 3, name: "rejected"},
        metrics: {
          state: {id: 1, name: "pending"},
          progress: 0,
          teste: 20,
          maintainability: 30,
          security: 60,
          workmanship: 70
        },
        build: {
          state: {id: 2, name: "running"},
          code: '532785',
          progress: 80,
          startedAt: '',
          builds: ['debug', 'release']
        },
        unitTest: {
          state: {id: 4, name: "complete"},
          progress: 100,
          passed: 223,
          failed: 16,
          percPassed: 70,
          codeCovered: 50,
        },
        functionalTest: {
          state: {id: 3, name: "rejected"},
          progress: 100,
          passed: 163,
          failed: 47,
          percPassed: 64,
          codeCovered: 76,
        },
        type: 'firewall',

      },{ //fake row 4

        id: 4, name: 'Project Name 4', 
        owner: 'samy', 
        startedAt: '2017-02-15T12:00:00Z', 
        state: {id: 2, name: "running"},
        metrics: {
          state: {id: 1, name: "pending"},
          progress: 0,
          teste: 20,
          maintainability: 30,
          security: 60,
          workmanship: 70
        },
        build: {
          state: {id: 2, name: "running"},
          code: '743894',
          progress: 35,
          startedAt: '',
          builds: ['debug', 'release']
        },
        unitTest: {
          state: {id: 4, name: "complete"},
          progress: 100,
          passed: 56,
          failed: 38,
          percPassed: 57,
          codeCovered: 87,
        },
        functionalTest: {
          state: {id: 4, name: "complete"},
          progress: 100,
          passed: 84,
          failed: 36,
          percPassed: 47,
          codeCovered: 17,
        },
        type: 'firewall',        

      },{ //fake row 5

        id: 5, name: 'Project Name 5', 
        owner: 'jtuck', 
        startedAt: '2017-01-26T12:00:00Z', 
        state: {id: 4, name: "complete"},
        metrics: {
          state: {id: 4, name: "complete"},
          progress: 100,
          teste: 20,
          maintainability: 30,
          security: 60,
          workmanship: 70
        },
        build: {
          state: {id: 4, name: "complete"},
          code: 'R1_124',
          progress: 100,
          startedAt: '',
          builds: ['debug', 'release']
        },
        unitTest: {
          state: {id: 4, name: "complete"},
          progress: 100,
          passed: 185,
          failed: 2,
          percPassed: 16,
          codeCovered: 85,
        },
        functionalTest: {
          state: {id: 4, name: "complete"},
          progress: 100,
          passed: 16,
          failed: 57,
          percPassed: 26,
          codeCovered: 84,
        },
        type: 'build',

      },{ //fake row 6

        id: 6, name: 'Project Name 6', 
        owner: 'samy', 
        startedAt: '2017-02-01T12:00:00Z', 
        state: {id: 3, name: "rejected"},
        metrics: {
          state: {id: 3, name: "rejected"},
          progress: 100,
          teste: 20,
          maintainability: 30,
          security: 60,
          workmanship: 70
        },
        build: {
          state: {id: 4, name: "complete"},
          code: '168794',
          progress: 100,
          startedAt: '2017-02-05T15:20:00Z',
          builds: ['debug', 'release']
        },
        unitTest: {
          state: {id: 2, name: "running"},
          progress: 10,
          passed: 574,
          failed: 2,
          percPassed: 27,
          codeCovered: 86,
        },
        functionalTest: {
          state: {id: 2, name: "running"},
          progress: 10,
          passed: 100,
          failed: 20,
          percPassed: 27,
          codeCovered: 93,
        },
        type: 'firewall',

      },
    ];

    return { 
      projects: projects
    };
  }

}
