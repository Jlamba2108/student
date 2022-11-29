const studentData =[
{
    "profile": {
       "studentID": "RA19038240E",
       "firstName": "James",
       "lastName": "Thorndale",
       "course": "Computer Science Engineering",
       "batch": "May 2019",
       "expiration": "May 2023"
    },
    "image": {
       "url": "https://this-person-does-not-exist.com/img/avatar-7bf3c2e143851bbb333e951fb723f4cc.jpg",
       "alt": "James Thorndale - RA19038240E"
    },
    "contact": {
       "phoneNumber": "(647)-507-0300",
       "email": "james.thorndale@ecs.com",
       "address": "24, West Side Street North, Hamilton, ON",
       "pincode": "L8S 3J6"
    }
  }
]
export const studentProfile = (props) =>{
    return(
        <div style={{border:"3px solid black"}}>
          <p>
            <label>Student ID:{props.profile.studentID}</label>
            <label>First Name: {props.profile.firstName}</label>
            <label>Last Name: {props.profile.lastName}</label>
            <label>Course: {props.profile.course}</label>
            <label>Batch: {props.profile.batch}</label>
            <label>Expiration: {props.profile.expiration}</label>
          </p>
        </div>
    )

}

export const studentImage = (props) =>{
    return(
        <div style={{border:"3px solid black"}}>
          <p>
            <img src={props.image.url} alt={props.image.alt}/>
          </p>
        </div>
    )

}
export const studentContact = (props) =>{
    return(
        <div style={{border:"3px solid black"}}>
          <p>
            <label>Phone Number: {props.profile.phoneNumber}</label>
            <label>Email: {props.profile.email}</label>
            <label>Address: {props.profile.address}</label>
            <label>Pincode: {props.profile.pincode}</label>
          </p>
        </div>
    )

}

