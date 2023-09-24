import {useState,useEffect} from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Tables = ({Username}) => {
  const [users, setUsers] = useState([])
  const navigation=useNavigate();
  useEffect(()=>{
      fetch(`https://localhost:7113/api/heightwork/get/${Username}`)
      .then(response=>response.json().then(json=>{
        if(json.length==0)
        {
            alert("You have not posted any data");
            navigation("/approvalformat")
        }
        else
        {
          
          setUsers(json)
          console.log(users);
        }
      }))},[])
    return ( 
  <div>
  <table>
  <tr>
    <th>Site</th>
    <th>Date & Time</th>
    <th>Issuer</th>
    <th>Receiver</th>
    <th>Nature of Work</th>
    <th>Work Area</th>
    <th>Risk Associated with the Work</th>
    <th>Risk Assessment Detail</th>
    <th>Recommended PPE</th>
    <th>Special Instruction</th>
    <th>Possible Emergency Situation</th>
    <th>Precaution Taken To Support Emergency Situation</th>
    <th>Other permits Applicable</th>
    <th>Permit Approved by Site FHS</th>
    <th>Permit Verified and Closed</th>
  </tr>
   {users.map(user=>(
    <tr>
      <td>{user.Site}</td>
      <td>{user.DateAndTime}</td>
      <td>{user.Issuer}</td>
      <td>{user.Receiver}</td>
      <td>{user.NatureOfWork}</td>
      <td>{user.WorkArea}</td>
      <td>{user.RiskAssociatedWithTheWork}</td>
      <td>{user.RiskAssessmentDetail}</td>
      <td>{user.RecommendedPpe}</td>
      <td>{user.SpecialInstruction}</td>
      <td>{user.PossibleEmergencySituation}</td>
      <td>{user.PrecautionTakenToSupportEmergencySituation}</td>
      <td>{user.OtherPermitsApplicable}</td>
      <td>{user.PermitApprovedBySiteFhs}</td>
      <td>{user.PermitVerifiedAndClosed}</td>
  
  
    </tr>
   ))}
</table>
</div>
     );
}
 

export default Tables;