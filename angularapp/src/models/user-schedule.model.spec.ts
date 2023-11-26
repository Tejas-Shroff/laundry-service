// import { UserSchedule } from './user-schedule.model';

// describe('UserSchedule', () => {
//   it('should create an instance', () => {
//     expect(new UserSchedule()).toBeTruthy();
//   });
// });


import { UserSchedule } from "./user-schedule.model";

describe('JobApplication Models', () => {
  fit('JobApplication_Model_should_create_Job_Application_instance_Interface', () => {
    const Job_Application: UserSchedule = {
      id:1,
      fullName: "demo",
      mobileNumber: "789456123",
      email:"demo@gmail.com",
      address: "asd",
      area: "qwe",
      pincode:"456123",
      pickupDay: "monday",
      pickupTimeSlot : "1 to 4 pm",
      packageId: 1,
      statusId: 2,
    };
    expect(Job_Application).toBeTruthy();
    expect(Job_Application['id']).toBe(1);
    expect(Job_Application['fullName']).toBe("demo");
    expect(Job_Application['mobileNumber']).toBe("789456123");
    expect(Job_Application['email']).toBe("demo@gmail.com");
    expect(Job_Application['address']).toBe("asd");
    expect(Job_Application['area']).toBe("qwe");
    expect(Job_Application['pickupTimeSlot']).toBe("1 to 4 pm");
    expect(Job_Application['pincode']).toBe("456123");
    expect(Job_Application['pickupDay']).toBe("monday");
    expect(Job_Application['packageId']).toBe(1);
    expect(Job_Application['statusId']).toBe(2);
  });

});

