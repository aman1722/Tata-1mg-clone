function navbar() {
    return `
    <header>
    <!-- Nav Bar Section -->
      <nav>
          <div class="outer">
              <div class="inner1">
                <div><a href="index.html"><img id="logo" src="./img/Mainlogo.png" alt="Not found"></a></div>
                 <div>
                  <ul>
                      <li><a href="products.html">Medicines</a></li>
                      <li><a href="#">Lab Tests</a></li>
                      <li><a href="doctors.html">Consult Doctors</a></li>
                      <li><a href="#">COVID-19</a></li>
                      <li><a href="#">Ayurveda</a></li>
                      <li><a href="#">Care Plan</a></li>
                  </ul>
                 </div>
              </div>
              <div class="inner2">
                  <div id="beforelogin">
                      <p id="login_text_js"><a id="logtext" href="login.html" class="before_login_style">Login</a></p>
                      <p id="login_text_js1">|</p>
                      <p id="login_text_js2"><a href="signup.html" class="before_login_style">Signup</a></p>
                      <P></P>
                      <P></P>
                      <p>Offers</p>
                  </div>
                  
                  <div class="cartLogo"> 
                      <img src="https://onemg.gumlet.io/cart-icon-rebrand_vp4k0f.svg" alt="not found" id="red-cart" onclick="window.location.href = 'cart.html'"/>
                      <div id="cartItembox" onclick="window.location.href = 'cart.html'">0</div>
                  </div>
                  <div>
                      <p>Need Help ?</p>
                  </div>
              </div>
          </div>
          
      </nav>
  

      <!-- Header Search Section -->
      <section>
          <div class="searchOuter">
              <div class="searchInner1">
                  <i class="fa-solid fa-location-dot"></i>
                  <input type="text"  placeholder="Enter Your City..."/>
                  <i class="fa-solid fa-location-crosshairs" id="cross"></i>
                  <input type="text" placeholder="Search for Medicines and Health Products "/>
                  <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <div class="searchInner2">
                  <p><i class="fa-solid fa-bolt"></i></p>
                  <p class="quic">QUICK BUY! Get 15% off on medicines*
                  </p>
                  <button><b>Quick Order</b></button>
              </div>
          </div>
      </section>

      
      
<!-- Drop Down Section -->
      <section>
          <div class="dropdown">
              <ul>
                  <div><li><a href="#">Health Resource <i class="fa-solid fa-angle-down"></i></a>
                  
                      <div class="hidden-box">
                          <ul>
                            <li><a href="">All Diseases</a></li>
                            <li><a href="">All Medicines</a></li>
                            <li><a href="">Medicines by Therapeutic Class</a></li>
                          </ul>
                    </div>
                  </li></div>
                  
                    
                  
                  <div><li><a href="#">Vitamins and Nutrtion <i class="fa-solid fa-angle-down"></i></a>
                  
                      <div class="hidden-box">
                          <ul>
                            <li><a href="">Vitamins & Supplements</a>
                                <ul class="inside">
                                  <li class="light"><a href="sProductPage.html">Multivitamins</a></li>
                                  <li class="light"><a href="">Vitamins A-Z</a></li>
                                  <li class="light"><a href="">Mineral Supplements</a></li>
                                  <li class="light"><a href="">Vitamin B12 & B Complex</a></li>

                                </ul>
                          </li>
                            <li><a href="">Nutritional Drinks</a>
                              <ul class="inside">
                                  <li class="light"><a href="">Adult Daily Nutrition</a></li>
                                  <li class="light"><a href="">Kids Nutrition (2-15 Yrs)</a></li>
                                  <li class="light"><a href="">For Women</a></li>
                                </ul>
                          </li>
                            <li><a href="">Health Food Drinks</a>
                          
                              <ul class="inside">
                                  <li class="light"><a href="">Green Tea & Herbal Tea</a></li>
                                  <li class="light"><a href="">Apple Cider Vinegar</a></li>
                                  <li class="light"><a href="">Healthy Snacks</a></li>
                                </ul>
                          </li>
                          </ul>
                           
                          <!-- testing -->
                          <ul>
                              <li><a href="">Protein Supplements</a>
                                  <ul class="inside">
                                    <li class="light"><a href="">Why Protein</a></li>
                                    <li class="light"><a href="">Amino Acids</a></li>
                                    <li class="light"><a href="">Mass Gainers</a></li>
                                    <li class="light"><a href="">Workout Essential</a></li>
                                    <li class="light"><a href="">Fat Burners</a></li>
                                  </ul>
                            </li>
                              <li><a href="">Omega & Fish Oil</a>
                                <ul class="inside">
                                    <li class="light"><a href="">Fish Oil</a></li>
                                    <li class="light"><a href="">Cod Liver Oil</a></li>
                                    <li class="light"><a href="">Flax Seed Oil</a></li>
                                  </ul>
                            </li>
                              <li><a href="">Immunity Boosters</a>
                            
                                <ul class="inside">
                                    <li class="light"><a href="">Chyawanprasha</a></li>
                                    <li class="light"><a href="">Vitamin C</a></li>
                                    <li class="light"><a href="">Herbal Teas</a></li>
                                    <li class="light"><a href="">Antioxidant Supplements</a></li>
                                    <li class="light"><a href="">Ayurvedic Supplements</a></li>
                                  </ul>
                            </li>
                            </ul>
                          <!--  -->
                           <!-- testing -->
                           <ul>
                              <li><a href="">Specialty Supplements</a>
                                  <ul class="inside">
                                    <li class="light"><a href="">Plant based Supplements</a></li>
                                    <li class="light"><a href="">Beauty Supplemets</a></li>
                                    <li class="light"><a href="">Pre and Probiotics</a></li>
                                    <li class="light"><a href="">Glucosamine</a></li>
                                    <li class="light"><a href="">Antioxidants</a></li>
                                    <li class="light"><a href="">Biotin</a></li>
                                  </ul> 
                            </li>
                              <li><a href="">Weight Management</a>
                                <ul class="inside">
                                    <li class="light"><a href="">Weight Management Herbs</a></li>
                                    <li class="light"><a href="">Meal Replacements</a></li>
                                    <li class="light"><a href="">Weight Gain</a></li>
                                  </ul>
                            </li>
                              
                            </ul>
                          <!--  -->
                    </div>
                  </li></div>
                  <div><li><a href="#">Diabetes  <i class="fa-solid fa-angle-down"></i></a>
                      <div class="hidden-box">
                          <ul>
                            <li><a href="">Devices</a>
                                <ul class="inside">
                                  <li class="light"><a href="">Blood Glucose Monitors</a></li>
                                  <li class="light"><a href="">Test Strips & Lancets</a></li>
                                  <li class="light"><a href="">Syringes & Pens</a></li>
                                </ul>
                          </li>
                            <li><a href="">Diabetic Medicines</a>
                              <ul class="inside">
                                  <li class="light"><a href="">Vitamins, Minerals & Antioxidants</a></li>
                                  <li class="light"><a href="">Homeopathy Medicines</a></li>
                                  <li class="light"><a href="">Ayurvedic Medicines</a></li>
                                </ul>
                          </li>
                          </ul>
                           
                          <!-- testing -->
                          <ul>
                              <li><a href="">Sugar Substitutes</a>
                                  <br>
                                  
                            </li>
                              <li><a href="">Diabetic Diet</a>
                                <ul class="inside">
                                    <li class="light"><a href="">Juices & Vinegars</a></li>
                                    <li class="light"><a href="">Superfoods</a></li>
                                  </ul>
                            </li>
                              <li><a href="">Diabetic Foot Health</a>
                                
                            </li>
                            </ul>
                          <!--  -->
                           <!-- testing -->
                          
                          <!--  -->
                    </div>
                  
                  </li></div>
                  <div><li><a href="#">Healthcare Devices <i class="fa-solid fa-angle-down"></i></a>
                  
                      <div class="hidden-box">
                          <ul>
                            <li><a href="">Top brands in Healthcare Devices</a>
                                <ul class="inside">
                                  <li class="light"><a href="">Omron</a></li>
                                  <li class="light"><a href="">Accu-check</a></li>
                                  <li class="light"><a href="">Dr. Morepen Devices</a></li>
                                  <li class="light"><a href="">Dr Trust</a></li>
                                  <li class="light"><a href="">OneTouch</a></li>
                                  <li class="light"><a href="">Contour</a></li>
                                </ul>
                          </li>
                            <li><a href="">Masks (N95, Surgical and more)</a>
                              <ul class="inside">
                                  <li class="light"><a href="">Face Shield</a></li>
                                  <li class="light"><a href="">Surgical Masks</a></li>
                                  <li class="light"><a href="">N95 Masks</a></li>
                                </ul>
                          </li>
                          <li><a href="">Oxygen Concentrators & Cans</a></li>
                          <li><a href="">BP Monitors</a></li>
                          <li><a href="">Nebulizers & Vaporizers</a></li>
                          </ul>
                           
                          <!-- testing -->
                          <ul>
                              <li><a href="">Oximeters & Pedometers</a></li>
                              <li><a href="">Vital Signs Monitors & Wearables</a></li>
                              <li><a href="">Weighing Scales</a></li>
                              <li><a href="">Thermometers</a>
                                <ul class="inside">
                                    <li class="light"><a href="">IR Thermometers</a></li>
                                    
                                  </ul>
                            </li>
                              <li><a href="">Body Massager</a></li>
                              <li><a href="">Diabetes Monitors</a></li>
                              <li><a href="">Mobility Equipments</a></li>
                              <li><a href="">Exercise Equipments</a></li>
                              <li><a href="">Doctor's Corner</a>
                                  <ul class="inside">
                                      <li class="light"><a href="">Stethoscopes</a></li>
                                      <li class="light"><a href="">Tapes & Bandages</a></li>
                                      <li class="light"><a href="">Clinical Diagonstic Equipments</a></li>
                                      <li class="light"><a href="">Dressings & Wound Care</a></li>
                                    </ul>
                              </li>
                            </ul>
                          <!--  -->
                           <!-- testing -->
                           <ul>
                              <li><a href="">Supports & Braces</a>
                                  <ul class="inside">
                                    <li class="light"><a href="">Neck & Shoulder Support</a></li>
                                    <li class="light"><a href="">Knee & Leg Support</a></li>
                                    <li class="light"><a href="">Back & Abdomen Support</a></li>
                                    <li class="light"><a href="">Ankle & Foot Support</a></li>
                                    <li class="light"><a href="">Hand & Wrist Braces</a></li>
                                    <li class="light"><a href="">Arm & Elbow Support</a></li>
                                    <li class="light"><a href="">Cervical Pillows</a></li>
                                    <li class="light"><a href="">Compression support & sleeves</a></li>
                                    <li class="light"><a href="">heel support</a></li>
                                    <li class="light"><a href="">Crepe Bandage</a></li>
                                  </ul> 
                            </li>
                              
                              
                            </ul>
                          <!--  -->
                    </div>
                  
                  </li></div>
         <div>         <li><a href="#">Personal Care <i class="fa-solid fa-angle-down"></i></a>
      
          <div class="hidden-box">
              <ul>
                <li><a href="">Sexual Wellness</a>
                    <ul class="inside">
                      <li class="light"><a href="">Condoms</a></li>
                      <li class="light"><a href="">Lubricants & Massage Gels</a></li>
                      <li class="light"><a href="">Personal body massagers</a></li>
                      <li class="light"><a href="">Men Performance Enhancer</a></li>
                      <li class="light"><a href="">Sexual Health Supplements</a></li>
                    </ul>
              </li>
                <li><a href="">Skin Care</a>
                  <ul class="inside">
                      <li class="light"><a href="">Shampoo</a></li>
                      <li class="light"><a href="">Hair Conditioners</a></li>
                      <li class="light"><a href="">Hair Growth Supplements</a></li>
                      <li class="light"><a href="">Hair Oils</a></li>
                      <li class="light"><a href="">Hair Growth Products</a></li>
                    </ul>
              </li>
              </ul>
               
              <!-- testing -->
              <ul>
                  <li><a href="">Elderly Care</a>
                      <ul class="inside">
                          <li class="light"><a href="">Adult Diapers</a></li>
                          <li class="light"><a href="">Bone & Joint Health</a></li>
                          <li class="light"><a href="">Living & Safety Aids</a></li>
                          <li class="light"><a href="">Othopaedic Supports</a></li>
                        </ul>
                </li>
                  <li><a href="">Women Care</a>
                    <ul class="inside">
                        <li class="light"><a href="">Feminine Hygiene</a></li>
                        <li class="light"><a href="">Women Care Supplements</a></li>
                        <li class="light"><a href="">Mother Care</a></li>
                        <li class="light"><a href="">Menopause</a></li>
                        <li class="light"><a href="">Polycystic Ovary Syndrome</a></li>
                      </ul>
                </li>
                 
        </div>
      
      </li></div>
             <div>     <li><a href="#">Health Conditions <i class="fa-solid fa-angle-down"></i></a>
          
              <div class="hidden-box">
                  <ul>
                    <li><a href="">Stomach Care</a></li>
                    <li><a href="">Heart Care</a></li>
                    <li><a href="">Bone, Joint & Muscle Care</a></li>
                    <li><a href="">Pain Relief</a>
                      <ul class="inside">
                          <li class="light"><a href="">Heating Acids</a></li>
                        </ul>
                  </li>
                  <li><a href="">Eye Care</a>
                      <ul class="inside">
                          <li class="light"><a href="">Eye Lubricants</a></li>
                        </ul>
                  </li>
                  <li><a href="">Eye Care</a>
                      <ul class="inside">
                          <li class="light"><a href="">Hearing Aid Device</a></li>
                        </ul>
                  </li>
                  </ul>
                   
                  <!-- testing -->
                  <ul>
                      <li><a href="">First Aid</a></li>
                      <li><a href="liver.html">Liver Care</a></li>
                      <li><a href="">Cold & Cough</a></li>
                      <li><a href="">Fever</a></li>
                      <li><a href="">Mental Wellness</a></li>
                      <li><a href="">Kidney Care</a></li>
                      <li><a href="">Respiratory Care</a></li>
                      <li><a href="">Piles, Fissures & Fistula</a></li>
                      <li><a href="">Smoking Cessation</a></li>
                      <li><a href="">Derma Care</a></li>
                      </ul>
            </div>
          
          </li></div>
             <div>     <li><a href="#">Ayurveda Products <i class="fa-solid fa-angle-down"></i></a>
          
              <div class="hidden-box testingGap2">
                  <ul>

                      <li><a href="">Ayurveda Top Brands</a>
                          <ul class="inside">
                              <li class="light"><a href="">Dabur</a></li>
                              <li class="light"><a href="">Sri Sri Tattva</a></li>
                              <li class="light"><a href="">Kerala Ayurveda</a></li>
                              <li class="light"><a href="">Jiva Ayurveda</a></li>
                              <li class="light"><a href="">Patanjali</a></li>
                            </ul>
                      </li>

                      <li><a href="">Popular Categories</a>
                          <ul class="inside">
                              <li class="light"><a href="">Herbal Juice</a></li>
                              <li class="light"><a href="">Chyawanprash</a></li>
                              <li class="light"><a href="">Ayurvedic Immunity Boosters</a></li>
                              <li class="light"><a href="">Explore Popular Herbs</a></li>
                              <li class="light"><a href="">Herbal Supplements</a></li>
                            </ul>
                      </li>

                    
                  </ul>


                  <ul>

                      <li><a href="">Top Health Concerns</a>
                          <ul class="inside">
                              <li class="light"><a href="">Ayurvedic Respiratory care</a></li>
                              <li class="light"><a href="">Cough, Cold & Fever</a></li>
                              <li class="light"><a href="">Sexual Wellness</a></li>
                              <li class="light"><a href="">Bone, Joint and Muscle Care</a></li>
                              <li class="light"><a href="">Stomach Care</a></li>
                              <li class="light"><a href="">Diabetes Care</a></li>
                              <li class="light"><a href="liver.html">Liver Care</a></li>
                              <li class="light"><a href="">Mind Care</a></li>
                              <li class="light"><a href="">Cardiac Care</a></li>
                            </ul>
                      </li>

                      <li><a href="">Unani Medicines</a>
                          <ul class="inside">
                              <li class="light"><a href="">Hamdard Unani</a></li>
                              <li class="light"><a href="">AMU Dawakhana</a></li>
                              <li class="light"><a href="">Rex Remedies</a></li>
                              <li class="light"><a href="">Dehlvi Remedies</a></li>
                            </ul>
                      </li>

                    
                  </ul>
                   
                  
            </div>
            
          
          </li></div>
          <div>     <li><a href="#">Covid Essentials <i class="fa-solid fa-angle-down"></i></a>
            
          <div class="hidden-box testingGap2">
              <ul>

                  <li><a href="">Covid Vacination</a>
                      <ul class="inside">
                          <li class="light"><a href="">Covid</a></li>
                          <li class="light"><a href="">Sri</a></li>
                          <li class="light"><a href="">Kerala Ayurveda</a></li>
                          <li class="light"><a href="">Jiva Ayurveda</a></li>
                          <li class="light"><a href="">Patanjali</a></li>
                        </ul>
                  </li>

                  <li><a href="">Popular Categories</a>
                      <ul class="inside">
                          <li class="light"><a href="">Herbal Juice</a></li>
                          <li class="light"><a href="">Chyawanprash</a></li>
                          <li class="light"><a href=""> Immunity Boosters</a></li>
                          <li class="light"><a href="">Explore Popular Herbs</a></li>
                          <li class="light"><a href="">Herbal Supplements</a></li>
                        </ul>
                  </li>

                
              </ul>


              <ul>

                  <li><a href="">Top Health Concerns</a>
                      <ul class="inside">
                          <li class="light"><a href="">Ayurvedic Respiratory care</a></li>
                          <li class="light"><a href="">Cough, Cold & Fever</a></li>
                          <li class="light"><a href="">Sexual Wellness</a></li>
                          <li class="light"><a href="">Bone, Joint and Muscle Care</a></li>
                          <li class="light"><a href="">Stomach Care</a></li>
                          <li class="light"><a href="">Diabetes Care</a></li>
                          <li class="light"><a href="liver.html">Liver Care</a></li>
                          <li class="light"><a href="">Mind Care</a></li>
                          <li class="light"><a href="">Cardiac Care</a></li>
                        </ul>
                  </li>

                  <li><a href="">Unani Medicines</a>
                      <ul class="inside">
                          <li class="light"><a href="">Hamdard Unani</a></li>
                          <li class="light"><a href="">AMU Dawakhana</a></li>
                          <li class="light"><a href="">Rex Remedies</a></li>
                          <li class="light"><a href="">Dehlvi Remedies</a></li>
                        </ul>
                  </li>

                
              </ul>
               
              
        </div>
      
      </li></div>
              </ul>
          </div>
      </section>
  </header>`;
}

export default navbar;