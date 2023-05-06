import React, {useState} from 'react';
import './style.css'
import { Helmet } from "react-helmet"
// import { Component } from 'react';
// import ReactDOM from 'react-dom';
// import Captcha from 'demos-react-captcha';
import CaptchaTest from './CaptchaTest';
function RegistrationForm() {
    
    return(
    //   <div className="form">
    //       <div className="form-body">
    //           <div className="username">
    //               <label className="form__label" for="firstName">First Name </label>
    //               <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
    //           </div>
    //           <div className="lastname">
    //               <label className="form__label" for="lastName">Last Name </label>
    //               <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
    //           </div>
    //           <div className="email">
    //               <label className="form__label" for="email">Email </label>
    //               <input  type="email" id="email" className="form__input" placeholder="Email"/>
    //           </div>
    //           <div className="password">
    //               <label className="form__label" for="password">Password </label>
    //               <input className="form__input" type="password"  id="password" placeholder="Password"/>
    //           </div>
    //           <div className="confirm-password">
    //               <label className="form__label" for="confirmPassword">Confirm Password </label>
    //               <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
    //           </div>
    //       </div>
    //       <div class="footer">
    //           <button type="submit" class="btn">Register</button>
    //       </div>
    //   </div>
    <div className="container">
      <div className="note" id="print">
        <h3>Note: Fields marked with asterisks (<b style={{ color: "red"}}> * </b>) are mandatory</h3>
        <span className="material-icons" aria-hidden="true" onclick="CopyElem();PrintElem('#container12')"
            style={{cursor: "pointer", float: "right", margin: "20px 10px 0 0", color: "yellowgreen",}}>&#xe8ad;</span>
       </div>

       <form>
         <form action="" className="form1">
            <div className="descrip">Location</div>
            <div className="conatinerFluid part1">
                <div>
                    <span>State<sup style={{color:"red"}}>* </sup></span>
                    <select className=" btn btn-secondary btn-sm dropdown-toggle state" name="slct7" id="slct7"
                    onchange="populate(this.id,'slct8')">
                    <option>Choose State</option>
                    <option value="andaman and nicobar islands"> ANDAMAN AND NICOBAR ISLANDS</option>
                    <option value="andhra pradesh"> ANDHRA PRADESH</option>
                    <option value="arunachal pradesh"> ARUNACHAL PRADESH</option>
                    <option value="assam"> ASSAM</option>
                    <option value="bihar"> BIHAR</option>
                    <option value="chandigarh"> CHANDIGARH</option>
                    <option value="chattisgarh"> CHATTISGARH</option>
                    <option value="dadra and nagar haveli"> DADRA AND NAGAR HAVELI</option>
                    <option value="daman and diu"> DAMAN AND DIU</option>
                    <option value="delhi"> DELHI</option>
                    <option value="goa"> GOA</option>
                    <option value="gujarat"> GUJARAT</option>
                    <option value="haryana"> HARYANA</option>
                    <option value="himachal pradesh"> HIMACHAL PRADESH</option>
                    <option value="jammu and kashmir"> JAMMU AND KASHMIR</option>
                    <option value="jharkhand"> JHARKHAND</option>
                    <option value="karnataka"> KARNATAKA</option>
                    <option value="kerala"> KERALA</option>
                    <option value="ladakh"> LADAKH</option>
                    <option value="lakshadweep"> LAKSHADWEEP</option>
                    <option value="madhya pradesh"> MADHYA PRADESH</option>
                    <option value="maharashtra"> MAHARASHTRA</option>
                    <option value="manipur"> MANIPUR</option>
                    <option value="meghalaya"> MEGHALAYA</option>
                    <option value="mizoram">MIZORAM</option>
                    <option value="nagaland"> NAGALAND</option>
                    <option value="odisha"> ODISHA</option>
                    <option value="puducherry">PUDUCHERRY </option>
                    <option value="punjab"> PUNJAB</option>
                    <option value="rajasthan"> RAJASTHAN</option>
                    <option value="sikkim"> SIKKIM</option>
                    <option value="tamil nadu"> TAMIL NADU</option>
                    <option value="telangana"> TELANGANA</option>
                    <option value="tripura"> TRIPURA</option>
                    <option value="uttar pradesh"> UTTAR PRADESH</option>
                    <option value="uttarakhand"> UTTARAKHAND</option>
                    <option value="west bengal">WEST BENGAL</option>
                    </select>
               </div>

                <div>
                    <span>District</span>
                    <select className="btn btn-secondary btn-sm dropdown-toggle district" name="slct8" id="slct8" onchange="Constituency_Change(this.id,'slct9')">
                    <option>Choose District</option>
                    </select>
                </div>
            </div>

            <div className="descrip">Mandatory specifications</div>
            <div className="conatinerFluid part2">
                <div>
                    <span>Name <sup style={{color:"red"}}> *</sup> </span>
                    <input type="text" name="" className="" id="name" placeholder="(In English)" required></input>
                    <input type="text" name="" id="nameregional" classname="" placeholder="(In Regional)" required></input>
                    <button><span className="material-icons">&#xe312;</span></button>
                </div>
                <div>
                    <span>Surname (if any)</span>
                    <input type="text" name="" id="" className="" placeholder="(In English)" required></input>
                    <input type="text" name="" id="" className="" placeholder="(In Regional)" required></input>
                    <button><span className="material-icons">&#xe312;</span></button>
                </div>
                <div>
                    <span className="longerspan">Date of birth (in the form of day/ month/ year) (if known) <sup
                        style={{color:"red"}}> * </sup></span>
                    <input type="date" className="date" name="" id=""></input>
                </div>
                <div>
                    <span>Applicant's gender<sup style={{color:"red"}}> *</sup></span>
                        <select className="btn btn-secondary btn-sm dropdown-toggle select gender" name="" id="">
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Transgender</option>
                        </select>
                </div>
            </div>

            <div className="descrip">Current address where applicant is ordinarily resident</div>
            <div className="conatinerFluid part3">
                <div>
                    <span>House no. <sup style={{color:"red"}}> * </sup></span>
                    <input type="text" name="" id="" className="" placeholder="(In English)" required></input>
                    <input type="text" name="" id="" className="" placeholder="(In Regional)" required></input>
                    <button><span className="material-icons">&#xe312;</span></button>
                </div>
                <div>
                    <span>Street / area / location <sup style={{color:"red"}}> * </sup></span>
                    <input type="text" name="" id="" className="" placeholder="(In English)" required></input>
                    <input type="text" name="" id="" className="" placeholder="(In Regional)" required></input>
                    <button><span className="material-icons">&#xe312;</span></button>
                </div>
                <div>
                    <span>City / Village: <sup style={{color:"red"}}> * </sup> </span>
                    <input type="text" name="" id="" className="" placeholder="(In English)" required></input>
                    <input type="text" name="" id="" className="" placeholder="(In Regional)"></input>
                    <button><span className="material-icons">&#xe312;</span></button>
                </div>
                <div>
                    <span>Post Office: <sup style={{color:"red"}}> * </sup> </span>
                    <input type="text" name="" id="" className="" placeholder="(In English)" required></input>
                    <input type="text" name="" id="" className="" placeholder="(In Regional)"></input>
                    <button><span className="material-icons">&#xe312;</span></button>
                </div>
                <div>
                    <span>Pin Code: <sup style={{color:"red"}}> * </sup> </span>
                    <input className="" type="text" name="" id="pincode" required onkeypress="return isNumberKey(event);"></input>
                </div>
                <div>
                    <span>State / Union Territory: <sup style={{color:"red"}}> * </sup></span>
                    <input className="" type="text" name="" id="state" required></input>
                </div>
                <div>
                    <span>District: <sup style={{color:"red"}}> * </sup></span>
                    <input className="" type="text" name="" id="district" required></input>
                </div>
            </div>

            <div className="descrip">Farm Details</div>
            <div className="conatinerFluid part4">
                <div>
                    <span>Dairy Products Produced("Enter values separated by comma")</span>
                    <input className="" type="text" name="" id="" required></input>
                </div>
                <div>
                    <span>Annual Income(Rs.)</span>
                    <input className="" type="text" name="input" required></input>
                </div>
            </div>

            <div className="descrip">
              Upload supporting documents (Supported formats .jpg, .png, .bmp, .jpeg) (max. 2MB)
            </div>
            <div className="conatinerFluid part5">
                <div className="eachimage">
                    <div className="breaksection">
                        <span>Your photo<sup style={{color:"red"}}> * </sup></span>
                        <input type="file" name="" className="docs" onchange="loadFile1(event)"></input>
                        </div>
                    <div className="breaksection">
                        <span>Document type <sup style={{color:"red"}}> * </sup></span>
                        <select className="btn btn-secondary btn-sm dropdown-toggle select image" name="" id="">
                            <option> .jpg </option>
                            <option> .png </option>
                            <option> .bmp </option>
                            <option> .jpeg </option>
                        </select>
                    </div>
                </div>
                <div className="eachimage">
                    <div className="breaksection">
                        <span>Age proof <sup style={{color:"red"}}> * </sup></span>
                        <input type="file" name="" className="docs" onchange="loadFile2(event)"></input>
                    </div>
                    <div className="breaksection">
                        <span>Document type<sup style={{color:"red"}}> * </sup></span>
                        <select className="btn btn-secondary btn-sm dropdown-toggle select image" name="" id="">
                            <option> .jpg </option>
                            <option> .png </option>
                            <option> .bmp </option>
                            <option> .jpeg </option>
                        </select>
                    </div>
                </div>
                <div className="eachimage">
                    <div className="breaksection">
                        <span>Address proof<sup style={{color:"red"}}> * </sup></span>
                        <input type="file" name="" className="docs" onchange="loadFile3(event)"></input>
                    </div>
                    <div className="breaksection">
                        <span>Document type <sup style={{color:"red"}}> * </sup></span>
                        <select className="btn btn-secondary btn-sm dropdown-toggle select image" name="" id="">
                            <option> .jpg </option>
                            <option> .png </option>
                            <option> .bmp </option>
                            <option> .jpeg </option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="descrip">Declaration</div>
            <div className="conatinerFluid part6">
                <div>I hereby declare that to the best of knowledge and belief</div>
                <div>
                    <span className="longerspan">(i) I am a citizen of India and place of my birth is</span>
                    <div style={{marginLeft: "20px"}}>
                        <div>
                            <span>City / Village: </span>
                            <input className="" type="text" name="" id="" required></input><br></br>
                        </div>
                        <div>
                            <span>State: <sup style={{color:"red"}}> * </sup></span>
                            <select className="btn btn-secondary btn-sm dropdown-toggle state" name="slct1" id="slct1"
                            onchange="populate(this.id,'slct2')">
                            <option>Choose State</option>
                            <option value="andaman and nicobar islands"> ANDAMAN AND NICOBAR ISLANDS</option>
                            <option value="andhra pradesh"> ANDHRA PRADESH</option>
                            <option value="arunachal pradesh"> ARUNACHAL PRADESH</option>
                            <option value="assam"> ASSAM</option>
                            <option value="bihar"> BIHAR</option>
                            <option value="chandigarh"> CHANDIGARH</option>
                            <option value="chattisgarh"> CHATTISGARH</option>
                            <option value="dadra and nagar haveli"> DADRA AND NAGAR HAVELI</option>
                            <option value="daman and diu"> DAMAN AND DIU</option>
                            <option value="delhi"> DELHI</option>
                            <option value="goa"> GOA</option>
                            <option value="gujarat"> GUJARAT</option>
                            <option value="haryana"> HARYANA</option>
                            <option value="himachal pradesh"> HIMACHAL PRADESH</option>
                            <option value="jammu and kashmir"> JAMMU AND KASHMIR</option>
                            <option value="jharkhand"> JHARKHAND</option>
                            <option value="karnataka"> KARNATAKA</option>
                            <option value="kerala"> KERALA</option>
                            <option value="ladakh"> LADAKH</option>
                            <option value="lakshadweep"> LAKSHADWEEP</option>
                            <option value="madhya pradesh"> MADHYA PRADESH</option>
                            <option value="maharashtra"> MAHARASHTRA</option>
                            <option value="manipur"> MANIPUR</option>
                            <option value="meghalaya"> MEGHALAYA</option>
                            <option value="mizoram">MIZORAM</option>
                            <option value="nagaland"> NAGALAND</option>
                            <option value="odisha"> ODISHA</option>
                            <option value="puducherry">PUDUCHERRY </option>
                            <option value="punjab"> PUNJAB</option>
                            <option value="rajasthan"> RAJASTHAN</option>
                            <option value="sikkim"> SIKKIM</option>
                            <option value="tamil nadu"> TAMIL NADU</option>
                            <option value="telangana"> TELANGANA</option>
                            <option value="tripura"> TRIPURA</option>
                            <option value="uttar pradesh"> UTTAR PRADESH</option>
                            <option value="uttarakhand"> UTTARAKHAND</option>
                            <option value="west bengal">WEST BENGAL</option>
                            </select>
                        </div>
                        <div>
                            <span>District: <sup style={{color:"red"}}> * </sup></span>
                            <select className="btn btn-secondary btn-sm dropdown-toggle district" name="slct2" id="slct2">
                            <option>Choose District</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="longerspan">(ii) I am ordinarily resident at the address given above since Date <sup
                        style={{color:"red"}}> * </sup></span>
                    <input className="date" type="date" name="" id=""></input>
                </div>
            </div>

            <div>
                <div className="captcha-container"
                    style={{textAlign: "center", margin: "0 auto", textAlign: "center", border: "0px solid"}}>
                    <div className="securityCode">
                        {/* <p id="code"></p>
                        <div className="icons">
                            <span className="readText" style={{alignItems: "center"}}>
                            <i className="fas fa-headphones"></i>
                            </span>
                            <span className="changeText">
                            <i className="fas fa-sync-alt"></i>
                            </span>
                            <input type="text" placeholder="Type the text here" style={{width: "50%"}}></input>
                        </div> */}
                        <CaptchaTest />
                    </div>
                </div>
            </div>

            {/* <div className="myBtn">
                <input type="reset" className="btn btn-success resetBtn" value="Reset"></input>
                <input type="submit" className="btn btn-success submitBtn" value="Submit" id="submitButton"></input>
            </div> */}
         </form>
       </form>
    </div>
    )       
}
export default RegistrationForm;