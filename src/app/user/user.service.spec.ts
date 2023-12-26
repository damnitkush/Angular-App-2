import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {

  let service : UserService;
//executes code before each test
  beforeEach(()=>{
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);

  })


  it('should be created',()=>{
    expect(service).toBeTruthy();
  })

  //to get notifued once we get the value -> subscribe
  it('should get users',()=>{
    service.getUsers().subscribe(users =>{
      expect(users.length).toBeGreaterThan(0);
    })
  })


});
